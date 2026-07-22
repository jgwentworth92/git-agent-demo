export const title = "Three ways";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WAYS = [
  {
    name: "CLI through the agent's shell",
    tag: "used in this demo",
    body: "The agent runs git and gh like any developer: full fidelity, universal, scriptable, works anywhere the repo is cloned. Everything you see today happens this way.",
  },
  {
    name: "Scripts and hooks",
    tag: "no model in the loop",
    body: "Deterministic automation the agent rides on rather than drives: git hooks, CI jobs, changelog pipelines. The repo enforces its own rules even when nobody is prompting.",
  },
  {
    name: "MCP",
    tag: "structured tools",
    body: "The GitHub MCP server exposes the API as typed, permission-scoped tool calls — no shell or local clone required. The natural fit for hosted and remote agents; richer structure, less universality than the CLI.",
  },
];

export default function ThreeWays() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Three ways agents drive git</h1>
      <div className="space-y-4">
        {WAYS.map((w) => (
          <Card key={w.name}>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>{w.name}</CardTitle>
              <Badge variant="secondary">{w.tag}</Badge>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">{w.body}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
