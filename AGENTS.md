# Sol-Luna development rules

- Keep requirements, decisions, risk judgments, and final acceptance in the primary Sol thread.
- Use `gpt-5.6-sol` at medium reasoning as the fallback for the primary controller when the user has not explicitly selected a model or reasoning effort; explicit user selections take precedence. Delegate bounded exploration, implementation, and testing to the project custom agents `luna_explorer`, `luna_implementer`, and `luna_tester` when the work fits their roles.
- Keep search output, test logs, and intermediate exploration in subagent threads; return concise evidence-backed summaries to Sol.
- Parallelize only independent read-heavy exploration, tests, retrieval, or log analysis. Serialize tasks that can modify the same file. Without independent worktrees, never let multiple subagents edit the same code region concurrently.
- Every delegation must state: goal; allowed files/directories; forbidden scope; known context; completion criteria; validation commands; rollback method; and the required result sections.
- Luna must stop and return ambiguities, risks, or out-of-scope needs to Sol. Luna may not broaden requirements, introduce an architecture direction, add production dependencies, weaken permissions, or modify unrelated files.
- Luna finishing does not mean acceptance. Sol must inspect the actual diff or file state, review command output and exit status, and decide to accept, request rework, add tests, or roll back.
- A started test is not a passed test. Report passed, failed, skipped, and not-run checks distinctly.
- Support important conclusions with file paths, symbols, commands, diffs, or test evidence. Do not report conclusions alone.
- Keep changes minimal; do not opportunistically refactor unrelated code.
- Use `sol_escalation` only for the escalation conditions defined by `$sol-luna`. Ordinary implementation, formatting, routine testing, simple bugs, searches, and documentation work stay with Sol Medium and Luna.
