# Sol-Luna Codex System

Capability-aware delegation with Primary owning scope, decisions, integration and acceptance. Retains the `sol-luna` skill name. Choose a sufficient role using scope, ambiguity, risk and verifiability while considering handoff, review and rework costs. Risk is a gate, not a score averaged away by a small diff. No mandatory multi-agent pipeline or guaranteed cost reduction.

## Roles and defaults

| Role | Model / effort | Boundary |
|---|---|---|
| luna_explorer | gpt-6-luna / low | Read-only evidence |
| luna_implementer | gpt-6-luna / low | Low-risk bounded edits |
| luna_tester | gpt-6-luna / low | Tests/builds; no product-source edits |
| sol_implementer | gpt-6-sol / medium | Settled cross-file implementation |
| astra_architect | gpt-6-astra / high | Read-only consequential design proposal |
| astra_escalation | gpt-6-astra / high | Independent read-only risk review |

Role names are compatibility identifiers; TOML model fields are configurable mappings, not capability guarantees. `sol_escalation` remains as a deprecated compatibility name using the same Astra review settings. Do not schedule both names for one review. Qualified Primary may design inline; design authors do not count as their own independent reviewers. Explicit user choices take precedence.

## Installation and migration

Back up the target `AGENTS.md`, `.codex/config.toml`, `.codex/agents/` and `.agents/skills/sol-luna/`. Merge the packaged files into those paths; preserve unrelated configuration, existing permissions and user model selection. Do not replace the entire project config. Update all three Luna role files together with the skill to remove old fixed-contract requirements. Keep `max_concurrent_threads_per_session = 3`; default to Primary plus one worker.

Custom agents live in `.codex/agents/*.toml`. Inspect any explicit role references in the target config before retiring aliases. Preserve the legacy `sol_escalation` name during migration; new tasks should select `astra_escalation`. Start a new session and check the live role/model inventory: existing sessions may retain old role definitions. Do not silently downgrade high-risk work or raise cost if a configured model is unavailable; return the routing decision to Primary. This package does not change Primary's model.

## Scope and existing helper

Phase one changes routing instructions, roles, project defaults and documentation only. No DSH executor, telemetry, queue or token-budget switching is added. The existing optional DeepSeek text helper and its tests remain unchanged. Read `.agents/skills/sol-luna/references/deepseek-worker.md` only for authorized use. It calls a remote API with selected text; it cannot search the repo, run tests/ADB or provide offline inference. Deterministic local commands can run directly without an agent intermediary.

## Minimal verification

Parse changed TOML and skill frontmatter, inspect diffs and confirm installed/package file hashes. Use the host's config/role discovery to distinguish parsed files from loaded roles. One bounded read-only delegation can test routing behavior; it does not prove every model mapping or production permission boundary. Reuse valid results and follow project/CI/user requirements rather than rerunning full suites by default. Report actual commands, results and remaining unverified behavior.

## Rollback

Restore only this update's files from the pre-update backup. Remove the three newly added role files only if absent before this update; do not remove unrelated agents, the legacy alias or existing helper resources. Preserve pre-existing uncommitted work. No repository publication is required to install locally.
