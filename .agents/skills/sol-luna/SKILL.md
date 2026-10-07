---
name: sol-luna
description: "When explicitly requested, assess bounded development delegation against quota, handoff, worker and review cost; otherwise work inline, with Primary owning decisions and acceptance."
---

# Sol-Luna: quota-aware delegation

Primary owns requirements, architecture, risk, ownership, integration and final acceptance. Preserve the user's selected Primary model, reasoning, budget and delegation restrictions. This skill does not authorize external writes, new spending or changing Primary settings. Explicit invocation permits assessing delegation; it does not require a worker or override higher-priority restrictions.

## Decide whether delegation earns its cost

Ask whether Primary can do the task more cheaply, quickly and clearly inline. Delegate only with clear expected net value after handoff, worker reading/execution, Primary review, integration, verification and likely rework. Compare total computation and quota as well as latency and context relief; parallel work does not inherently save quota. Without clear benefit, work inline.

Usually keep one command, a search, one or two file reads, a small known edit, local CSS or a typo inline. Be cautious when Primary already knows the context, a worker must reread the same material, or acceptance would require redoing most of its work. Large call-chain searches, log analysis, an independent subsystem investigation, repetitive migration or a separate costly test run can earn delegation when concise evidence spares Primary the intermediate material. Do not hunt for subtasks merely because this skill is available, or split a naturally serial problem to simulate parallelism.

Use known user budget preferences and available cost information; do not invent model prices, remaining quota or savings. Unknown cost is not permission to upgrade. No billing system, telemetry or routine quota polling is required. If material budget uncertainty prevents safe delegation, stay inline or ask only for the missing decision.

## Scheduling preferences

These are preferences expressed in the task, not a new configuration system. Default to Balanced with a conservative bias.

| Preference | Routing |
|---|---|
| Conserve | Prefer inline; use at most one worker only for substantial mechanical work or context relief. No automatic reviewer or escalation. |
| Balanced | Start inline; if justified, use one bounded worker. A second requires independent deliverables, non-overlapping scope, little duplicated context and clear time benefit within budget. |
| Speed | Only when the user explicitly prioritizes speed, consider more independent parallel work within live/user concurrency limits and budget. No overlapping writers, redundant reviewers or slot-filling. |

Parallel capacity is a ceiling, not a target. Reuse an existing worker for related follow-ups. Ordinary flow is Worker -> Primary review; Primary's own diff/evidence review normally suffices.

## Choose capability without silent upgrades

Check the live tool's supported models, reasoning efforts and any pinned role settings before dispatch. Prefer the lowest-cost currently available model and sufficient effort that can reliably complete the bounded task, respecting explicit user choices. Model names and role labels are not proof of capability or price; no specific version is a permanent routing default. If suitable capability or cost cannot be established, work inline rather than guessing or quietly switching to a premium model. Budget pressure never justifies inadequate capability.

Do not upgrade Primary. If a worker or escalation would use a materially more expensive model or reasoning setting than the authorized choice, explain the concrete need and obtain explicit user authorization before dispatch. Skill invocation, a role named architect/reviewer, and a free parallel slot do not provide that authorization.

Independent review/escalation is exceptional: consider it for consequential architecture uncertainty, data migration, security/permissions, races/consistency, irreversible operations, interacting core subsystems or credible large rework risk, only when another view can materially resolve the decision and budget permits. A category label alone does not trigger it. Ordinary features, bugs, documentation, routine tests/reviews or wanting another model's reassurance do not justify it. Primary may handle consequential design directly; its design is not an independent review of itself. Failures prompt diagnosis, not automatic agent chains or increased reasoning.

## Keep workers narrow

For model overrides use `fork_turns="none"` and a short self-contained handoff; otherwise pass the least context that preserves the task. Point to relevant files and existing evidence rather than duplicating full history or making workers rediscover findings.

State the output, edit/read boundary, consequential constraints and completion checks in proportion to the task. Workers return a concise diff or cited evidence, checks actually run and material uncertainty. They do not expand scope, decide new architecture, spawn descendants, publish, change permissions or silently raise model/budget levels. Unsettled decisions return to Primary. Avoid overlapping writes; independent worktrees do not remove integration ownership.

## Accept and finish within scope

Define this task's Done from the user request and risk before work. Primary inspects actual diffs/evidence and owns integration. Use targeted, risk-proportional validation; reuse valid unaffected checks and rerun only for changed behavior, failure, missing core evidence or a concrete risk. Preserve failed/flaky results and investigate them rather than retrying to green.

Report delivery, validation and real limitations. Additional devices, versions or optional integrations belong in future coverage, not automatic unfinished work. Skill metadata/config parsing is not proof of fresh-session loading, actual delegation choices or measured quota savings.

Legacy project-agent files are archival examples, not portable skill defaults. Do not install their pinned models, reasoning or concurrency merely to use this skill.
