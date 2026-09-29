# Sol–Luna Codex System

This private repository contains the current portable Sol–Luna skill and an older optional project-agent package. The skill keeps the primary agent responsible for decisions, integration, and acceptance. It delegates only bounded tasks when parallel work saves time or context; tiny tasks stay inline.

## Contents

- `.agents/skills/sol-luna/`: current `$sol-luna` skill and invocation metadata, synchronized from machine 1 on 2026-09-29.
- `.codex/config.toml` and `.codex/agents/`: older optional project-agent configuration retained for reference. Its pinned model names and rigid task contracts do not define the current skill.
- `AGENTS.md`: repository maintenance guidance.

## Installation

For a global skill, back up any existing `sol-luna` skill and copy `.agents/skills/sol-luna/` to the target machine's actual Codex skills directory (usually `~/.codex/skills/sol-luna/`). Review the diff before replacing an older version. The skill checks available worker models at runtime and respects the user's selected model, reasoning level, budget, and no-delegation choices. It does not require the older project-agent configuration.

Use `.codex/config.toml` and `.codex/agents/` only if you intentionally want that historical project setup. Merge with local configuration after checking current Codex support and model availability; never copy them into global configuration unchanged.

## Validation

Check that the installed `SKILL.md` and `agents/openai.yaml` match this repository and are available in a new task. If testing delegation, choose a bounded read-only task that genuinely saves work and inspect the worker's cited evidence. A simple task may correctly run inline.

## Rollback

Restore the skill from the backup made before installing. Restore any separately merged project configuration from its own backup.
