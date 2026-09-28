# Sol-Luna development rules

- Primary owns requirements, consequential decisions, integration and acceptance. Preserve the user's model, reasoning, budget and delegation choices.
- Use `$sol-luna` to assess scope, ambiguity, risk and verifiability. Risk is a gate, not a majority vote; small diffs are not necessarily low risk.
- Delegate only when handoff, review and likely rework still leave a useful benefit. Keep tiny tasks inline, start with one worker, and retain the concurrency cap of three.
- Luna handles bounded low-risk work; Sol handles settled cross-file implementation; Astra roles support consequential design or independent review when useful. These are default model mappings, not a mandatory pipeline. Qualified Primary may design directly.
- Keep handoffs proportional to the task, with scope, relevant evidence and completion checks. No fixed field checklist or repeated full history. Workers stop for unresolved decisions instead of broadening scope or increasing reasoning to compensate.
- Parallelize independent work only. Do not overlap writes without isolated worktrees. Workers cannot authorize dependencies, publication, broader permissions or new architecture.
- Primary inspects actual diffs/evidence. Use minimum sufficient verification, reuse valid results, and report completed checks and remaining uncertainty. Follow project/CI/user requirements; do not hide flaky checks by rerunning until green.
- Verify role/model availability before use; do not silently change capability or cost. The design author is not its independent reviewer. Keep DSH optional and separate; the existing text helper is not a local execution agent.
- User instructions and higher-priority execution limits take precedence.
