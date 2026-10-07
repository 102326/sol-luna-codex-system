# Sol-Luna repository guidance

The portable skill lives in `.agents/skills/sol-luna/`. Keep SKILL.md, agents/openai.yaml and README consistent; compare installed copies before synchronizing and preserve independent local edits.

Use the skill when explicitly requested, not automatically for every coding task. Default to inline unless delegation has clear net value after handoff, worker, review and likely rework costs, including quota and duplicated context. Normally use at most one worker; extra workers require independent scope and concrete time benefit within the user's budget. Capacity is a ceiling, not a goal; do not automatically create reviewers or escalation chains.

Primary retains requirements, architecture, risk, ownership, integration and acceptance. Preserve its selected model and reasoning. Check live worker capability and cost; materially more expensive models or effort require explicit user authorization. Do not hard-code a permanent model version or add roles/billing infrastructure for this policy.

Historical configuration is under `archive/legacy-project-agents/`, not `.codex/`. Do not move it into auto-discovery paths during ordinary installation, use its pinned models/reasoning/concurrency as current defaults, or overwrite unrelated host configuration.

Define scoped Done and validate by actual risk. Reuse valid evidence, separate additional coverage from missing implementation and preserve failures. Before authorized publication, inspect the exact diff, check for credentials/machine secrets and verify the remote commit. Do not force-push.
