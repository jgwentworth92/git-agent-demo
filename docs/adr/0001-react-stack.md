# ADR-0001: Vite + React + TypeScript + Tailwind + shadcn/ui

## Status
Accepted — 2026-07

## Context
The site doubles as the slides for a live demo. It must start fast, build fast, and
survive being modified live by multiple agents in parallel worktrees.

## Decision
Vite + React + TypeScript, Tailwind v4, shadcn/ui (vendored components), pnpm.

## Consequences
- pnpm's shared store makes `pnpm install` in a fresh worktree take seconds.
- Vendored shadcn components mean UI changes show up as readable code in PRs,
  not dependency bumps.
- Only one dev server (the main worktree's) ever needs to run.
