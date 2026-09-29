---
name: sol-luna
description: "Delegate a bounded development subtask to a fast smaller model when parallel work saves time or context; keep tiny tasks inline and the primary agent responsible for decisions and acceptance."
---

# Sol-Luna workflow

Use a smaller model as an optional worker inside an authorized development task. The primary agent owns scope, consequential decisions, integration, and final acceptance. This skill does not authorize external writes, new spending, or changes to the primary task's model settings. Higher-priority delegation restrictions and the user's model, budget, and no-delegation choices take precedence.

## Decide whether to delegate

Delegate when the subtask has a clear output, can be checked independently, and leaves useful work for the primary agent to do in parallel. Good examples: targeted code discovery, a small isolated edit with fixed acceptance criteria, or a focused test/log investigation. Do the work inline when it is a short read, one command, a tiny edit, or a task whose explanation and review would cost as much as doing it. Do not spawn a worker merely to follow this skill.

Use one worker by default. Add another only for independent deliverables with non-overlapping files and a likely time benefit. Reuse an existing worker for related follow-ups instead of starting a fresh one. Avoid a separate reviewer when the primary agent can verify the result quickly. Keep architecture decisions, unclear requirements, sensitive changes, and complex debugging with the primary agent; get independent review only when it is likely to change a consequential decision.

## Route models and context

Check the live delegation tool's supported models and efforts. Prefer an available Luna model at low effort for routine bounded work; currently `gpt-6-luna` fits when supported. Do not hard-code a retired model or silently choose a more expensive one. If no suitable model is available, work inline. Honor any explicit user model or reasoning choice.

For a model override, use `fork_turns="none"` with a short self-contained task. Pass only the relevant paths, known findings, constraints that matter, and acceptance checks. Use a short history fork only when it is cheaper and clearer than restating necessary context; avoid the full conversation by default. Point to files rather than pasting large contents. Do not make the worker rediscover evidence already collected.

A task message should state the outcome, allowed scope, relevant forbidden actions, and how to know it is done. Add exact commands, rollback, or a return format only when the subtask needs them. For a read-only task, say so. For a write task, name the edit boundary and avoid overlapping writers unless they have independent worktrees. Prefer the smallest meaningful check; require the full suite only when project rules or the change warrant it. Ask for a concise result with changed files or cited evidence, tests actually run, and remaining uncertainty. No transcript or repeated background.

## Accept and finish

Inspect the worker's diff or cited evidence. Reuse valid test results; rerun only when changes, failure, missing evidence, or an integration risk justify it. If a worker hits material ambiguity or fails, diagnose in the primary task before a bounded retry. Do not create a chain of agents to repair an unclear handoff.

Report the accepted change and its evidence, plus any material unverified behavior. Model routing may reduce latency and context, but does not guarantee lower billed tokens or quota usage.
