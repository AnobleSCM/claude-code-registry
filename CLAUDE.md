# Claude Code Registry

Community-maintained catalog of Claude Code capabilities. **Data-only repo** — no code, no builds.

## Purpose

Provides JSON data for [Vibe Code Playbook](https://vibecodeplaybook.ai):
- Skills (83)
- Agents (51)
- MCPs (101)
- Tools (20)
- Commands (47)
- Collections (6)
- Plugins (13)
- Rules (3)
- Hooks (3)

---

## Structure

```
skills/        # 83 skill definitions
agents/        # 51 agent definitions
mcps/          # 101 MCP server definitions
tools/         # 20 tool definitions
commands/      # 47 command definitions
collections/   # 6 curated skill collections
plugins/       # 13 plugin definitions
rules/         # 3 rule definitions
hooks/         # 3 hook definitions
```

Each directory has an `index.json` listing item IDs. Individual JSON files contain full metadata.

---

## Schema

```json
{
  "id": "skill-name",
  "name": "skill-name",
  "displayName": "Skill Name",
  "category": "Development",
  "description": "What it does",
  "invocation": "/skill-name",
  "source": "superpowers|plugin-name",
  "tags": ["tag1", "tag2"],
  "addedAt": "2026-01-23",
  "updatedAt": "2026-01-23"
}
```

---

## Workflow

1. Add/edit JSON file in appropriate folder
2. Update `index.json` if adding new item
3. Commit and push to main
4. Playbook app fetches updated data

---

## Validation

```bash
# Check all JSON files are valid
find . -name "*.json" -exec python3 -m json.tool {} > /dev/null \;

# Check index/file contracts and plugin install command syntax
node scripts/validate-index-contracts.mjs
```

---

## No Services

This repo uses **NO backend services**:
- No Firebase
- No Supabase
- No build process
- No deployment

It's static JSON served via GitHub raw URLs.

---

## Related

- **Playbook App**: `~/Developer/claude-code-playbook` (consumes this data)
- **GitHub**: `github.com/AnobleSCM/claude-code-registry`

## Raw URLs

Playbook fetches from:
```
https://raw.githubusercontent.com/AnobleSCM/claude-code-registry/main/<category>/<id>.json
```
