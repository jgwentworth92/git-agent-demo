# Working in this repo

## Conventions
- Conventional commit messages (`feat:`, `fix:`, `docs:`, `chore:`, `ci:`), imperative mood.
- Plain commit messages: no trailers of any kind.
- Every PR updates `CHANGELOG.md` under `[Unreleased]`.
- Before changing any data shape or format, check `docs/adr/` — data decisions are
  recorded there and must be respected.
- Branches: `feat/<slug>`. Open PRs with `gh pr create`.

## Architecture
- The site is a single-page slide deck. Slides live in `src/slides/<NN>-<slug>.tsx`
  (default export) and are auto-discovered and ordered by filename.
- To add a slide, add ONE new file using an unused number — gaps are deliberate
  (60 fits between 50 and 90). Never renumber or edit another slide's file.
- shadcn/ui components are vendored in `src/components/ui/` — use them.

## Before every commit
- `node tests/validate.mjs`
- `pnpm build`
