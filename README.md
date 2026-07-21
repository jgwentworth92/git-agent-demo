# git-agent-demo

The demo site for "Git is the agent's memory" — a live demo of GitHub + Claude Code
with worktrees and parallel development as the centerpiece. The site explains the
demo's concepts and is itself the repo the agents modify live.

## Run it

    pnpm install
    pnpm dev

## Checks

    node tests/validate.mjs
    pnpm build
