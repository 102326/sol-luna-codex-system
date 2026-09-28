# Sol–Luna Codex System

This repository packages a reusable Sol–Luna development workflow for Codex. The primary agent remains responsible for decisions, review, and acceptance. The test branch trials a lower-overhead delegation policy; model availability must be checked on the active host.

## Contents

- `.codex/config.toml`: project controller and multi-agent defaults.
- `.codex/agents/`: bounded Explorer, Implementer, Tester, and High-escalation agent definitions.
- `.agents/skills/sol-luna/`: the explicit `$sol-luna` workflow skill and invocation metadata.
- `AGENTS.md`: persistent project rules.

## Installation

Copy or merge the included relative paths into a target repository. Preserve existing files and merge TOML tables rather than replacing an existing configuration. Explicit user model and reasoning selections take precedence. The payload leaves the primary model unchanged; project configuration supplies only subagent defaults. Review the resulting diff before use.

The payload intentionally contains no credentials, saved logs, caches, generated validation fixtures, or user-specific absolute paths. It does not initialize a Git repository.

## Validation

From the target repository, inspect the effective project configuration and rules, then use `$sol-luna` only when a bounded subtask has a likely time or context benefit. For an implementation probe, use a disposable fixture and require a clean diff review plus an exit-code-bearing test. Confirm that ordinary work keeps the user's chosen primary model and reasoning effort, and that high-effort escalation happens only for consequential decisions.

Suggested checks are:

```powershell
codex --version
rg --files --hidden .codex .agents AGENTS.md
Get-Content .codex/config.toml
Get-Content AGENTS.md
git diff --check
```

## Rollback

Rollback is bounded to the files copied from this payload. Restore the pre-install versions from the target repository's Git diff or backup, and remove only the added Sol–Luna paths if they were previously absent. Never delete unrelated user configuration or project files.

## Model observability

The project leaves the primary model untouched. The trial defaults ordinary Luna agents to `gpt-6-luna` at low effort where supported; `sol_escalation` remains a separate read-only high-effort reviewer. Check the current host roster before delegation. Some Codex clients do not display each child thread's model or reasoning level in the main transcript. Treat configuration parsing, agent status, and returned evidence as the observable checks; do not claim per-child runtime settings are confirmed when the client does not expose them.
