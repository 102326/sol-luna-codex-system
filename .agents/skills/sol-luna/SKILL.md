---
name: sol-luna
description: Orchestrate bounded software-development work with Sol planning and acceptance, Luna exploration/implementation/testing, and tightly gated Sol High escalation. Use for development tasks that benefit from explicit delegation contracts and evidence-based review.
---

# Sol-Luna workflow

Keep the primary Sol thread responsible for requirements, constraints, decisions, risk, and final acceptance. Use Sol with `gpt-5.6-sol` and medium reasoning. Delegate only bounded work to the project custom agents:

- `luna_explorer`: read-only code discovery, call-chain tracing, and evidence gathering.
- `luna_implementer`: small workspace changes after the design and acceptance criteria are fixed.
- `luna_tester`: reproduction, builds, tests, and log analysis; source edits are forbidden.
- `sol_escalation`: read-only `gpt-5.6-sol` high-reasoning review, only when an escalation gate below is met.

## Workflow

1. Inspect the request, applicable `AGENTS.md`, existing code/configuration, and rollback boundary. Clarify only decisions that materially change scope or risk.
2. Decide whether read-only exploration is needed. Delegate independent read-heavy tasks in parallel only when they do not depend on one another.
3. Split implementation into the smallest testable units. Never run overlapping writers against the same file or code region without independent worktrees.
4. Before every delegation, give Luna the complete contract below. Do not send open-ended requests such as "finish this feature."
5. Wait for structured results. Review cited files, actual changes, commands, exit codes, and test evidence in the Sol thread.
6. Accept, request a bounded rework, add a bounded test task, or roll back. Luna completion alone is not acceptance, and a command merely starting is not a passing test.
7. Invoke `sol_escalation` only when an escalation gate is clearly met. Otherwise keep the decision with Sol Medium.
8. Finish with the accepted scope, evidence, validation status, remaining uncertainty, and rollback instructions.

## Delegation contract

Provide all of the following:

1. **Goal:** the single outcome required now.
2. **Allowed scope:** exact files or directories that may be read and, when applicable, modified.
3. **Forbidden scope:** files, behaviors, dependencies, and external actions that are off limits.
4. **Known context:** relevant call paths, constraints, and prior conclusions.
5. **Completion criteria:** observable conditions that define done.
6. **Validation:** exact build, test, reproduction, or inspection commands and expected evidence.
7. **Rollback:** how to restore the pre-task state.
8. **Return format:** Investigation conclusion; Modified files; Key code changes; Commands executed; Test results; Unresolved issues; Risks and recommendations. For read-only work, replace modification sections with files/symbols examined and state that nothing changed.

If any required field is missing or conflicts with the agent's sandbox, the agent must stop expansion and return the gap to Sol.

## Escalation gates

Use `sol_escalation` only for at least one of these conditions:

- an architecture decision crosses multiple subsystems;
- a data migration, protocol change, or irreversible operation is involved;
- security, permissions, concurrency, race conditions, or data consistency are central;
- alternatives have major long-term cost or tradeoffs;
- Sol Medium has twice failed to reach a credible conclusion;
- a wrong decision could cause production failure, data damage, or large-scale rework.

Do not escalate ordinary features, formatting, routine tests, simple bugs, code search, or documentation cleanup. A temporary instruction such as "do not use High for this task" disables escalation unless completing the request would otherwise require a new high-risk decision; in that case stop and ask the user rather than invoking High.

## Acceptance rules

- Inspect the real diff or final file state; do not trust summaries alone.
- Verify that only authorized files changed and that rollback remains possible.
- Separate passed, failed, skipped, and unobservable checks.
- Require file, symbol, command, or test evidence for key conclusions.
- Keep unrelated refactors and new production dependencies out of scope.
