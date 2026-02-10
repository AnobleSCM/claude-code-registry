# Contributing to Claude Code Registry

Thank you for helping maintain the Claude Code Registry! This document explains how to contribute.

## How to Contribute

### Adding a new item

1. **Fork** this repository
2. **Create** a new JSON file in the appropriate folder:
   - `skills/` — for slash command skills
   - `agents/` — for sub-agents (Task tool)
   - `mcps/` — for MCP servers
   - `tools/` — for built-in tools
   - `commands/` — for CLI commands
3. **Name** the file using the item's ID: `my-skill-name.json`
4. **Fill out** the schema (see below)
5. **Submit** a Pull Request

### Updating an existing item

1. Find the JSON file for the item
2. Update the relevant fields
3. Update the `updatedAt` field to today's date
4. Submit a PR with a description of what changed

## Schema Reference

### Skills

```json
{
  "id": "skill-name",
  "name": "skill-name",
  "displayName": "Human Readable Name",
  "category": "Category",
  "description": "A clear description of what this skill does",
  "invocation": "/skill-name",
  "source": "where-it-comes-from",
  "tags": ["tag1", "tag2"],
  "documentationUrl": "https://...",
  "addedAt": "YYYY-MM-DD",
  "updatedAt": "YYYY-MM-DD"
}
```

**Categories for skills:**
- Development
- Design
- Git
- Testing
- Planning
- Documentation
- Marketing
- Security
- DevOps

**Source values:**
- `built-in` — Ships with Claude Code
- `superpowers` — From superpowers plugin
- `plugin:name` — From a specific plugin
- `community` — Community-contributed

### Agents

```json
{
  "id": "agent-name",
  "name": "agent-name",
  "displayName": "Human Readable Name",
  "category": "Category",
  "description": "What this agent specializes in",
  "invocation": "Task tool with subagent_type=\"agent-name\"",
  "capabilities": ["capability1", "capability2"],
  "tools": ["Tool1", "Tool2"],
  "addedAt": "YYYY-MM-DD",
  "updatedAt": "YYYY-MM-DD"
}
```

**Categories for agents:**
- Research
- Planning
- Development
- Testing
- Quality
- Security
- Architecture
- Documentation

### MCPs

```json
{
  "id": "mcp-name",
  "name": "MCP Name",
  "description": "What this MCP provides",
  "provider": "Provider name",
  "toolCount": 10,
  "tools": ["tool1", "tool2"],
  "installUrl": "https://...",
  "documentationUrl": "https://...",
  "addedAt": "YYYY-MM-DD",
  "updatedAt": "YYYY-MM-DD"
}
```

### Tools

```json
{
  "id": "tool-name",
  "name": "ToolName",
  "description": "What this tool does",
  "category": "Category",
  "parameters": [
    {
      "name": "param_name",
      "type": "string",
      "required": true,
      "description": "What this parameter does"
    }
  ],
  "source": "built-in",
  "addedAt": "YYYY-MM-DD",
  "updatedAt": "YYYY-MM-DD"
}
```

**Categories for tools:**
- File System
- Search
- Execution
- Web
- Code Intelligence

### Commands

```json
{
  "id": "command-name",
  "name": "/command",
  "description": "What this command does",
  "shortcut": "Cmd+K",
  "arguments": [],
  "addedAt": "YYYY-MM-DD",
  "updatedAt": "YYYY-MM-DD"
}
```

### Plugins

```json
{
  "id": "plugin-name",
  "name": "plugin-name",
  "displayName": "Plugin Name",
  "category": "Workflow",
  "description": "What this plugin does",
  "author": "Author Name",
  "installCommand": "npx claude-plugins add plugin-name",
  "source": "official|community",
  "tags": ["tag1", "tag2"],
  "addedAt": "YYYY-MM-DD",
  "updatedAt": "YYYY-MM-DD"
}
```

**Plugin install command contract:**
- `installCommand` must use `npx claude-plugins add <slug>`

## Guidelines

### Do

- Use clear, concise descriptions
- Include all required fields
- Test that your JSON is valid before submitting
- Use lowercase with hyphens for IDs: `my-skill-name`
- Include relevant tags to help with search

### Don't

- Don't include proprietary or private information
- Don't submit items that aren't part of Claude Code ecosystem
- Don't submit duplicates — search first!

## Questions?

Open an issue if you're unsure about anything.
