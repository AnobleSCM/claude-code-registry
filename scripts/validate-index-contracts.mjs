#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const CATEGORY_DIRS = [
  'skills',
  'agents',
  'mcps',
  'tools',
  'commands',
  'collections',
  'plugins',
  'rules',
  'hooks',
];
const PLUGIN_INSTALL_COMMAND_REGEX = /^npx claude-plugins add [a-zA-Z0-9@/_.-]+$/;

function fail(message) {
  throw new Error(message);
}

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  } catch (error) {
    fail(`Invalid JSON: ${filePath} (${error.message})`);
  }
}

function assert(condition, message) {
  if (!condition) {
    fail(message);
  }
}

function validateCategory(category) {
  const categoryPath = path.join(ROOT, category);
  const indexPath = path.join(categoryPath, 'index.json');
  assert(fs.existsSync(indexPath), `Missing index.json for category "${category}"`);

  const index = readJson(indexPath);
  const items = Array.isArray(index) ? index : index.items;
  assert(Array.isArray(items), `${category}/index.json must be [] or { items: [] }`);

  if (!Array.isArray(index) && typeof index.count === 'number') {
    assert(
      index.count === items.length,
      `${category}/index.json count (${index.count}) does not match items length (${items.length})`
    );
  }

  for (const itemId of items) {
    assert(typeof itemId === 'string' && itemId.length > 0, `${category}/index.json has invalid item id`);

    const itemPath = path.join(categoryPath, `${itemId}.json`);
    assert(fs.existsSync(itemPath), `Missing file for ${category} item: ${itemId}.json`);

    const item = readJson(itemPath);
    assert(item.id === itemId, `${category}/${itemId}.json has mismatched id "${item.id}"`);

    if (category === 'plugins') {
      assert(
        typeof item.installCommand === 'string' && item.installCommand.length > 0,
        `plugins/${itemId}.json missing installCommand`
      );
      assert(
        PLUGIN_INSTALL_COMMAND_REGEX.test(item.installCommand),
        `plugins/${itemId}.json has non-canonical installCommand "${item.installCommand}"`
      );
    }
  }

  return items.length;
}

function main() {
  const counts = [];

  for (const category of CATEGORY_DIRS) {
    if (!fs.existsSync(path.join(ROOT, category))) {
      continue;
    }
    const count = validateCategory(category);
    counts.push(`${category}:${count}`);
  }

  console.log(`Registry contract validation passed (${counts.join(', ')})`);
}

main();
