import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { parseArgs, runWorker } from './deepseek-worker.mjs';

async function fixture(task = 'bounded task') {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'deepseek-worker-'));
  const taskFile = path.join(dir, 'task.txt');
  const output = path.join(dir, 'result.json');
  await fs.writeFile(taskFile, task);
  return { dir, taskFile, output, args: { task: taskFile, output } };
}
const env = { DEEPSEEK_API_KEY: 'secret', DEEPSEEK_MODEL: 'deepseek-chat' };
const ok = (body = { choices: [{ finish_reason: 'stop', message: { content: 'answer' } }], usage: { total_tokens: 2 } }) => async (url, options) => ({ ok: true, status: 200, url, options, json: async () => body });

test('success sends bounded no-tools request and writes result', async () => {
  const f = await fixture(); let request;
  const result = await runWorker({ args: f.args, env, fetchImpl: async (url, options) => { request = { url, options }; return ok()(url, options); } });
  assert.equal(result.status, 'completed_unreviewed');
  assert.equal(request.url, 'https://api.deepseek.com/chat/completions');
  assert.equal(request.options.redirect, 'error');
  const body = JSON.parse(request.options.body);
  assert.equal(body.tools, undefined); assert.equal(body.max_tokens, 2048); assert.deepEqual(body.thinking, { type: 'disabled' });
  assert.equal(JSON.parse(await fs.readFile(f.output, 'utf8')).answer, 'answer');
});

test('rejects endpoint variants and provider errors without leaking body', async () => {
  const f = await fixture();
  await assert.rejects(runWorker({ args: f.args, env: { ...env, DEEPSEEK_BASE_URL: 'http://api.deepseek.com' }, fetchImpl: ok() }), /invalid endpoint/);
  const g = await fixture();
  await assert.rejects(runWorker({ args: g.args, env, fetchImpl: async () => ({ ok: false, status: 500, text: async () => 'SECRET BODY' }) }), /DeepSeek request failed/);
  assert.equal(await fs.access(g.output).then(() => true, () => false), false);
});

test('rejects truncation, tool calls, blank and oversized tasks', async () => {
  for (const body of [{ choices: [{ finish_reason: 'length', message: { content: 'x' } }] }, { choices: [{ finish_reason: 'stop', message: { content: 'x', tool_calls: [] } }] }]) {
    const f = await fixture(); await assert.rejects(runWorker({ args: f.args, env, fetchImpl: ok(body) }), /invalid DeepSeek response/);
  }
  const blank = await fixture('  '); await assert.rejects(runWorker({ args: blank.args, env, fetchImpl: ok() }), /task is empty/);
  const huge = await fixture('x'.repeat(48 * 1024 + 1)); await assert.rejects(runWorker({ args: huge.args, env, fetchImpl: ok() }), /task is too large/);
});

test('reserves existing output and performs no network call', async () => {
  const f = await fixture(); await fs.writeFile(f.output, 'keep'); let called = false;
  await assert.rejects(runWorker({ args: f.args, env, fetchImpl: async () => { called = true; return ok()(); } }), /output already exists/);
  assert.equal(called, false); assert.equal(await fs.readFile(f.output, 'utf8'), 'keep');
});

test('argument parser requires complete paired DSH options', () => {
  assert.throws(() => parseArgs(['--task', 'a']), /output/);
  assert.throws(() => parseArgs(['--task', 'a', '--output', 'b', '--dsh-home', 'h']), /paired/);
  assert.deepEqual(parseArgs(['--help']), { help: true });
});

test('CLI entrypoint runs on Windows and reports safe failure', () => {
  const script = fileURLToPath(new URL('./deepseek-worker.mjs', import.meta.url));
  const help = spawnSync(process.execPath, [script, '--help'], { encoding: 'utf8' });
  assert.equal(help.status, 0);
  assert.match(help.stdout, /Usage:/);
  const bad = spawnSync(process.execPath, [script], { encoding: 'utf8' });
  assert.equal(bad.status, 1);
  assert.match(bad.stderr, /Worker failed/);
});

test('rejects alternative hosts, ports, paths, and embedded credentials before network', async () => {
  for (const base of ['https://evil.example', 'https://api.deepseek.com:444', 'https://key@api.deepseek.com', 'https://api.deepseek.com/other', 'https://api.deepseek.com/?key=x']) {
    const f = await fixture(); let called = false;
    await assert.rejects(runWorker({ args: f.args, env: { ...env, DEEPSEEK_BASE_URL: base }, fetchImpl: async () => { called = true; } }), /invalid endpoint/);
    assert.equal(called, false);
  }
});
