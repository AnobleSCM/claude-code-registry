# Claude Code Registry

Community-maintained catalog of Claude Code capabilities. **Data-only repo** — no code, no builds.

## Purpose

Provides JSON data for [Claude Code Playbook](https://claudecodeplaybook.ai):
- Skills (80+)
- Agents (48+)
- MCPs (8+)
- Tools (15+)
- Commands (20+)

---

## Structure

```
skills/
├── index.json       # List of all skill IDs
├── frontend-design.json
├── commit.json
└── ...

agents/
├── index.json
└── ...

mcps/
├── index.json
└── ...
```

Each `index.json` lists item IDs. Individual JSON files contain full metadata.

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

## No Services

This repo uses **NO backend services**:
- No Firebase
- No Supabase
- No build process
- No deployment

It's static JSON served via GitHub raw URLs.

---

## Related

- **Playbook App**: `~/claude-code-playbook` (consumes this data)
- **GitHub**: `github.com/AnobleSCM/claude-code-registry`
