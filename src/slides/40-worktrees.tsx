import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
      <p className="text-muted-foreground">
        Each agent gets its own worktree on its own branch — a full working copy backed
        by one shared object store. A broken agent never reaches main, and the
        presentation you're watching runs from main the whole time.
      </p>
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
    </div>
  );
}
