# Sol-Luna development rules

- The primary agent owns requirements, consequential decisions, integration, and final acceptance. Preserve the user's model, reasoning, budget, and delegation choices.
- Apply `$sol-luna` only when a bounded subtask offers a likely time or context saving. Keep one-command work and tiny edits inline; start with one worker and reuse it for related follow-ups.
- Keep each handoff brief: outcome, relevant file scope and limits, completion check, and evidence expected. Add commands or rollback details only when needed. Do not repeat the entire conversation or enforce a fixed return template.
- Parallelize only independent work. Do not let agents write the same code region concurrently without isolated worktrees.
- Workers report concise evidence, changed files when applicable, tests actually completed, and uncertainties. The primary agent inspects the diff or cited evidence and reuses valid test results instead of rerunning them by default.
- Keep architecture, unclear requirements, sensitive changes, and complex debugging with the primary agent. Use a separate high-effort review only when it is likely to change a consequential decision.
- The user's instructions and higher-priority execution limits take precedence over this project guidance.
