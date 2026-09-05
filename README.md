# Sol–Luna Codex System

This private-repository payload packages a reusable Sol–Luna development workflow for Codex. It targets the verified Codex baseline `0.150.0-alpha.8` and keeps the primary Sol controller responsible for planning, risk decisions, review, and acceptance.

## Contents

- `.codex/config.toml`: project controller and multi-agent defaults.
- `.codex/agents/`: bounded Explorer, Implementer, Tester, and High-escalation agent definitions.
- `.agents/skills/sol-luna/`: the explicit `$sol-luna` workflow skill and invocation metadata.
- `AGENTS.md`: persistent project rules.

## Installation

Copy or merge the included relative paths into a target repository. Preserve existing files and merge TOML tables rather than replacing an existing configuration. Explicit user model and reasoning selections take precedence. When the user has not selected them, Sol with `gpt-5.6-sol` and medium reasoning is the recommended fallback; project configuration still supplies the subagent defaults. Review the resulting diff before use.

The payload intentionally contains no credentials, saved logs, caches, generated validation fixtures, or user-specific absolute paths. It does not initialize a Git repository.

## Validation

From the target repository, inspect the effective project configuration and rules, then run a bounded read-only delegation through `$sol-luna`. For an implementation probe, use a disposable fixture and require a clean diff review plus an exit-code-bearing test. Confirm that ordinary work uses the user's selected primary model and reasoning effort, or the Sol Medium fallback when no selection is made, and that `sol_escalation` is invoked only when an escalation gate in the skill is met.

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

The project files recommend Sol as the fallback `gpt-5.6-sol` with medium reasoning when the user has not selected a primary model or reasoning effort. They retain ordinary Luna agents as `gpt-5.6-luna` with medium reasoning and `sol_escalation` as Sol High. Some Codex clients do not display each child thread's model or reasoning level in the main transcript. Treat configuration parsing, agent status, and returned evidence as the observable checks; do not claim per-child runtime settings are confirmed when the client does not expose them.
