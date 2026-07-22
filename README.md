# git-agent-demo

A single-page slide deck for "Git is the agent's memory". The deck is also the
demo: it gets modified live — from worktrees, through pull requests, with CI
watching main.

## Run it

    pnpm install
    pnpm dev

Arrow keys (or the screen edges) move between slides.

## Checks

    node tests/validate.mjs
    pnpm build
