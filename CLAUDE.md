# Working in this repo

## Conventions
- Conventional commit messages (`feat:`, `fix:`, `docs:`, `chore:`, `ci:`), imperative mood.
- Every PR updates `CHANGELOG.md` under `[Unreleased]`.
- Before changing any data shape or format, check `docs/adr/` — data decisions are
  recorded there and must be respected.
- Branches: `feat/<slug>`. Open PRs with `gh pr create`.

## Architecture
- Pages live in `src/pages/<Page>.tsx` (default export) and are auto-discovered by the
  router — adding a page never requires touching `App.tsx`.
- The nav is `src/nav.ts`. To ship a page that's marked coming soon, add its file and
  flip only that entry's `comingSoon` flag. Never touch another page's files or entry.
- shadcn/ui components are vendored in `src/components/ui/` — use them.

## Before every commit
- `node tests/validate.mjs`
- `pnpm build`
