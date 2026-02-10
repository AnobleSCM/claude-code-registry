# Claude Code Registry

The community-maintained catalog of Claude Code capabilities — skills, agents, MCPs, tools, and commands.

> **Note:** This registry powers [Vibe Code Playbook](https://vibecodeplaybook.ai), the visual companion app for Claude Code.

## What's in this registry?

| Category | Description | Count |
|----------|-------------|-------|
| [Skills](/skills) | Slash commands that provide specialized capabilities | 80+ |
| [Agents](/agents) | Sub-agents that can be spawned for complex tasks | 48+ |
| [MCPs](/mcps) | Model Context Protocol servers for external integrations | 8+ |
| [Tools](/tools) | Core built-in tools available to Claude Code | 15+ |
| [Commands](/commands) | CLI commands for Claude Code | 20+ |

## Usage

This registry is consumed by:
- **Vibe Code Playbook app** — fetches registry data to display the catalog
- **Developers** — reference for Claude Code capabilities
- **Community** — contribute new items as Claude Code evolves

### Fetching data

Registry files are plain JSON. Fetch directly from GitHub:

```bash
# Get all skills
curl https://raw.githubusercontent.com/AnobleSCM/claude-code-registry/main/skills/index.json

# Get a specific skill
curl https://raw.githubusercontent.com/AnobleSCM/claude-code-registry/main/skills/frontend-design.json
```

## Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

**Quick start:**
1. Fork this repo
2. Add or update a JSON file in the appropriate category folder
3. Submit a PR with a brief description

## File Format

Each item is a JSON file with this structure:

```json
{
  "id": "frontend-design",
  "name": "frontend-design",
  "displayName": "Frontend Design",
  "category": "Development",
  "description": "Create distinctive, production-grade frontend interfaces with high design quality",
  "invocation": "/frontend-design",
  "source": "superpowers",
  "tags": ["ui", "react", "design", "frontend"],
  "documentationUrl": null,
  "addedAt": "2026-01-23",
  "updatedAt": "2026-01-23"
}
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for full schema documentation.

## License

This registry data is released under [CC0 1.0 Universal](LICENSE) — public domain, no restrictions.

## Links

- [Vibe Code Playbook](https://vibecodeplaybook.ai) — The companion app
- [Claude Code Documentation](https://docs.anthropic.com/claude-code) — Official docs
- [Report an issue](https://github.com/AnobleSCM/claude-code-registry/issues)
