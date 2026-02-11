# Claude Code Registry

Community-maintained catalog of Claude Code capabilities. **Data-only repo** — no code, no builds.

## Purpose

Provides JSON data for [Vibe Code Playbook](https://vibecodeplaybook.ai):
- Skills (267)
- Agents (100)
- MCPs (176)
- Tools (19)
- Commands (46)
- Collections (5)
- Plugins (12)
- Rules (80)
- Hooks (80)

---

## Structure

One directory per category: `skills/`, `agents/`, `mcps/`, `tools/`, `commands/`, `collections/`, `plugins/`, `rules/`, `hooks/`. Each has an `index.json` listing item IDs. Individual JSON files contain full metadata.

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

**No backend services.** Static JSON served via GitHub raw URLs. No Firebase, no Supabase, no build process.

Full schemas: See `CONTRIBUTING.md`.

## Gotchas

- **Index/file sync:** Every item must have an entry in its category's `index.json` AND a matching JSON file. Run `node scripts/validate-index-contracts.mjs` to catch drift.
- **Item counts change:** Don't hardcode counts in docs — check `index.json` for current totals.

## Related

- **Playbook App**: `~/Developer/claude-code-playbook` (consumes this data)
- **GitHub**: `github.com/AnobleSCM/claude-code-registry`

## Raw URLs

Playbook fetches from:
```
https://raw.githubusercontent.com/AnobleSCM/claude-code-registry/main/<category>/<id>.json
```
