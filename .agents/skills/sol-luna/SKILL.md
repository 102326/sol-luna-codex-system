---
name: sol-luna
description: "Route bounded development work by scope, ambiguity, risk and verifiability; delegate only when it saves useful work, with Primary owning decisions and acceptance."
---

# Sol-Luna capability routing

Primary owns requirements, consequential decisions, integration and acceptance. Preserve the user's tools, model, reasoning, budget and delegation choices. This skill does not authorize external writes, spending beyond the task, or broader permissions. Roles define work boundaries; model names below are configurable defaults, not capability guarantees.

## Decide whether to delegate

Keep tiny edits, one-command work and short reads inline. Delegate only a checkable deliverable that saves useful time or context after accounting for handoff, waiting, review and likely rework. Start with one worker; add another only for independent deliverables with non-overlapping writes. Keep the configured concurrency cap of three; a higher host limit is not a reason to fill it. No mandatory Explorer -> Architect -> Implementer -> Tester chain.

## Route the decision, then the execution

Judge scope, ambiguity, risk and verifiability. Risk is a gate, not a majority vote: a one-line recovery change can require consequential design. Keywords such as migration, public API or cross-module trigger assessment, not automatic escalation. After Primary settles a risky decision, it may delegate a separately bounded, lower-risk execution step.

| Role | Appropriate work | Default model / effort |
|---|---|---|
| luna_explorer | Read-only, targeted symbols, callers, tests and evidence | gpt-6-luna / low |
| luna_implementer | Low-risk edits with clear boundaries and readily checkable results | gpt-6-luna / low |
| luna_tester | Scoped tests, builds, reproductions and logs; no product-source edits | gpt-6-luna / low |
| sol_implementer | Settled design needing substantial cross-file implementation reasoning | gpt-6-sol / medium |
| astra_architect | Unsettled consequential state, protocol, recovery or architecture decisions | gpt-6-astra / high |
| astra_escalation | Independent read-only challenge of consequential decisions and evidence | gpt-6-astra / high |

Architect proposes invariants, alternatives, risks and acceptance checks; Primary decides. If Primary is capable and already has the context, design inline. Do not require weaker-model failures before addressing high-risk design. Use independent escalation only when another review is likely to change a consequential decision: credible data loss, unsafe permissions, concurrency/transaction risk, irreversible migration, or unresolved material disagreement/failure. Two failed attempts prompt diagnosis, not an automatic agent chain. The design author must not serve as the independent reviewer of that same design.

Check the live tool's available roles, models and efforts before dispatch. Configured custom roles may pin their models and reject overrides. If a suitable role/model is unavailable or stale, return the choice to Primary: work inline if qualified, or use an available generic worker with an explicit supported model and the same role boundaries when the host can enforce the needed permissions. Do not silently downgrade high-risk work or increase cost. Never claim that writing a role file proves it loaded. Preserve explicit user model choices.

`sol_escalation` is a deprecated compatibility name for the Astra review role, not a second review step. Prefer `astra_escalation` in new handoffs.

## Handoff and stop conditions

Use the smallest sufficient context: outcome, allowed scope, important exclusions, known evidence and acceptance checks. Link relevant files; do not repeat searches or pass the whole conversation by default. Add commands, rollback details or output structure only when useful. Use `fork_turns="none"` for model overrides; otherwise select the smallest supported history that actually helps.

Name ownership for writes. No overlapping writers without isolated worktrees. Workers must not broaden scope, change architecture, add production dependencies, publish or weaken permissions without Primary resolving the need within user authorization. Do not compensate for incorrect routing by silently broadening scope or increasing reasoning. Stop and return the unresolved decision when work exceeds the role. Primary diagnoses and may re-scope or re-route; workers do not recursively build escalation chains.

## Evidence and acceptance

Workers return concise changed-file or location evidence, checks actually completed, exit status where applicable, and uncertainties. A started command is not a passed check. Use the smallest sufficient existing check; bug fixes or new behavior may justify one focused regression test. Reuse valid results and stop after sufficient checks pass. Expand or rerun only for affected new changes, failures/flaky behavior, missing evidence or a concrete remaining risk; do not rerun until green to hide flaky behavior. Project/CI/user requirements take precedence.

Primary inspects the diff or cited evidence before acceptance. Report actual commands, verified scope and material unverified behavior. Configuration parsing, role discovery and real runtime behavior are distinct evidence levels. Routing does not guarantee lower cost, latency or quota usage.

## Local tools and DSH boundary

Run deterministic search, statistics and test commands directly when sufficient. DSH is not a required stage and local execution does not imply offline inference. A tool-enabled Local Worker skill is deferred; do not invent its capabilities.

The existing optional [DeepSeek text helper](references/deepseek-worker.md) remains separate from cloud routing. Read it only for an authorized text-only task using that helper. It sends selected material to a remote API, cannot inspect the repo or run tests, and is not an offline DSH executor. No additional executor, task queue, telemetry or automatic budget-based switching is introduced here.
