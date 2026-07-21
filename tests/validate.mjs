#!/usr/bin/env node
// Validates src/data/tickets.json. Exits 1 on any violation.
import { readFileSync } from "node:fs";

const url = new URL("../src/data/tickets.json", import.meta.url);
const tickets = JSON.parse(readFileSync(url, "utf8"));
const errors = [];
const seen = new Set();

for (const t of tickets) {
  const label = JSON.stringify(t.id ?? t.title);
  if (!Number.isInteger(t.id)) errors.push(`${label}: id must be an integer`);
  if (seen.has(t.id)) errors.push(`${label}: duplicate id`);
  seen.add(t.id);
  for (const field of ["title", "status", "date"]) {
    if (typeof t[field] !== "string" || t[field].length === 0)
      errors.push(`${label}: missing ${field}`);
  }
}

if (errors.length > 0) {
  console.error(`tickets.json: ${errors.length} error(s)`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log(`tickets.json: ${tickets.length} tickets valid`);
