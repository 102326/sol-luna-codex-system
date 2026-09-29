# Sol-Luna repository guidance

The current portable skill is `.agents/skills/sol-luna/SKILL.md`. Keep its instruction and `agents/openai.yaml` metadata in sync with the installed version when publishing an update.

The `.codex/config.toml` and `.codex/agents/*.toml` files are a historical, optional project-agent package. Do not treat their pinned models, fixed delegation fields, or project settings as defaults for the portable skill. Preserve a user's explicit model, reasoning, budget, and delegation choices. The primary agent retains decisions and acceptance.

Before publishing, inspect the exact diff, confirm no credentials or machine-specific secrets were added, and verify the remote commit. Do not force-push.
