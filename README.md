# git-agent-demo

A single-page scrolling presentation for "Git is the agent's memory". The site is
also the demo: it gets modified live — from worktrees, through pull requests, with
CI watching main.

## Run it

    pnpm install
    pnpm dev

The nav links scroll to each part of the presentation.

## Checks

    node tests/validate.mjs
    pnpm build
