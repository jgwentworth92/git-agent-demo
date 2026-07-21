# ADR-0002: Ticket data is a flat JSON file

## Status
Accepted — 2026-07

## Context
The app displays a small ticket backlog. A backend or database would add moving parts
that can fail during a live demo and would obscure the git-centric story.

## Decision
`src/data/tickets.json` is the single source of truth, validated by
`tests/validate.mjs` in CI.

## Consequences
- Data changes are commits — they show up in history, diffs, and blame like all code.
- Validation failures are deterministic and fast, with no services to mock.
