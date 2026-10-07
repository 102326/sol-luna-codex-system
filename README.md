# Sol-Luna Codex System

This public repository contains the portable Sol-Luna skill. Primary owns requirements, architecture, risk, integration and acceptance. Delegate only when clear net value exceeds handoff, worker, review and likely rework cost, considering total computation and quota as well as time. Otherwise work inline.

## Contents and installation

- `.agents/skills/sol-luna/`: current portable skill and invocation metadata.
- `AGENTS.md`: repository maintenance guidance, not an instruction to auto-invoke the skill.
- `archive/legacy-project-agents/`: historical project configuration and roles, physically outside the auto-discovered `.codex/` path. Their model names, reasoning, concurrency and task contracts are examples, not current defaults.

For global installation, compare and back up any existing skill, then copy `.agents/skills/sol-luna/` into the target machine's actual skills directory (usually `~/.codex/skills/sol-luna/`). Project installation can use `.agents/skills/sol-luna/`. Merge independent local changes rather than overwriting them. Do not copy this repository's AGENTS.md over unrelated project rules or restore archived TOML into `.codex/` during normal installation.

Invoke explicitly with `$sol-luna`; implicit invocation is disabled to avoid routing overhead in ordinary development tasks. Invocation asks for a routing decision, not mandatory delegation. Existing host/project rules may independently govern agents. Reload discovery in a new task to check installed metadata; this does not change the current task's model or already-loaded roles.

## Routing and budget

Primary keeps the user's chosen model and reasoning. A justified worker uses the lowest-cost available capability sufficient for its bounded task, checked against live support and pinned settings. No model version is a permanent default; unknown pricing is not assumed cheap. Materially more expensive model or reasoning choices require explicit authorization. Risk still gates delegation; budget pressure never justifies inadequate capability.

Default to conservative Balanced: inline unless useful, then one worker. Conserve raises the benefit threshold and permits at most one worker. Speed requires the user's explicit speed preference; additional workers still need independent scope, minimal context duplication, clear benefit and budget. Capacity is a ceiling. Reuse workers for follow-ups. Ordinary work uses Worker -> Primary review, without a separate reviewer. Independent review/escalation is reserved for consequential uncertainty and affordable, useful evidence.

Quota awareness is a qualitative cost decision, not a billing service or savings guarantee. No new roles, metering, telemetry, pricing dependency or automatic model upgrades are introduced.

## Validation and coverage

Validate skill frontmatter/YAML, confirm explicit-only invocation/default prompt, inspect archive paths and local installation diffs. Compare installed files after merging. Archived TOML can be parsed without activating it. For meaningful authorized delegation, inspect live model selection and returned evidence; small tasks should remain inline. Do not spawn an agent just to fill a validation checklist.

Fresh-session discovery, actual routing and quota savings require separate runtime evidence; static validation alone does not prove them. Additional environments are coverage limits, not missing implementation. Restore backed-up skill files to roll back; archived configuration is never automatically installed or executed.
