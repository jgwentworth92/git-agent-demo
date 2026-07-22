import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const title = "Worktrees";

const BRANCH_POOL = [
  "feat/parallel-slide",
  "feat/dark-mode",
  "fix/slide-order",
  "docs/adr-index",
];

export default function Worktrees() {
  const [count, setCount] = useState(2);
  const worktrees = BRANCH_POOL.slice(0, count);
  const width = 640;
  const boxW = 140;
  const gap = (width - worktrees.length * boxW) / (worktrees.length + 1);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Parallel agents, one repository</h1>
      <p className="max-w-3xl text-muted-foreground">
        A worktree is an additional working copy of the same repository: its own
        checked-out branch and files, backed by the one shared object store. That
        makes it the natural unit of agent parallelism — an orchestrator can give
        each agent a full checkout of its own, none of them can touch what the
        others (or the presenter) have checked out, and creating one is instant
        because nothing is re-cloned.
      </p>
      <pre className="w-fit rounded-md border bg-muted px-4 py-3 font-mono text-xs text-muted-foreground">
        {`git worktree add ../wt-feature -b feat/new-section
cd ../wt-feature && pnpm install     # seconds — shared store
git push && gh pr create             # merges back like any PR`}
      </pre>
      <div className="flex gap-2">
        <Button onClick={() => setCount((c) => Math.min(c + 1, BRANCH_POOL.length))}>
          git worktree add
        </Button>
        <Button variant="outline" onClick={() => setCount((c) => Math.max(c - 1, 1))}>
          git worktree remove
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="font-mono text-sm">git worktree list</CardTitle>
        </CardHeader>
        <CardContent>
          <svg viewBox={`0 0 ${width} 260`} className="w-full">
            <rect x={width / 2 - 90} y={16} width={180} height={44} rx={8} className="fill-primary" />
            <text
              x={width / 2}
              y={43}
              textAnchor="middle"
              className="fill-primary-foreground font-mono text-[13px]"
            >
              .git object store
            </text>
            {worktrees.map((branch, i) => {
              const x = gap + i * (boxW + gap);
              return (
                <g key={branch}>
                  <line
                    x1={width / 2}
                    y1={60}
                    x2={x + boxW / 2}
                    y2={170}
                    className="stroke-border"
                    strokeWidth={1.5}
                  />
                  <rect x={x} y={170} width={boxW} height={56} rx={8} className="fill-muted stroke-border" />
                  <text x={x + boxW / 2} y={194} textAnchor="middle" className="fill-foreground font-mono text-[11px]">
                    wt-{i + 1}/
                  </text>
                  <text x={x + boxW / 2} y={212} textAnchor="middle" className="fill-muted-foreground font-mono text-[10px]">
                    {branch}
                  </text>
                </g>
              );
            })}
          </svg>
        </CardContent>
      </Card>
      <p className="max-w-3xl text-sm text-muted-foreground">
        This page exercises the pattern on itself: asked for a new section that must
        not disturb the running presentation, an agent builds it in a worktree and
        merges it through a reviewed pull request. Each section is one file, so
        parallel merges cannot conflict — a convention chosen for exactly this
        reason and recorded in the repo's CLAUDE.md.
      </p>
    </div>
  );
}
