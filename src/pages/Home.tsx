import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CLAIMS = [
  {
    title: "Memory",
    body: "Commit messages, ADRs, and blame answer “why is this code like this?” long after everyone forgot.",
  },
  {
    title: "Search index",
    body: "git log -S and git grep find when a thing appeared, changed, or vanished — across all of history.",
  },
  {
    title: "Coordination",
    body: "Worktrees and branches let multiple agents build in parallel while main stays stable.",
  },
  {
    title: "Safety net",
    body: "Small commits, CI, and git revert make every mistake cheap to undo.",
  },
];

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

export default function Home() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">Git is the agent's memory</h1>
        <p className="text-lg text-muted-foreground">
          For a human, git is version control. For an AI agent, git + GitHub is also its
          memory, its search index, its coordination layer, and its safety net.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {CLAIMS.map((c) => (
          <Card key={c.title}>
            <CardHeader>
              <CardTitle>{c.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">{c.body}</CardContent>
          </Card>
        ))}
      </div>
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Three ways agents drive git</h2>
        {WAYS.map((w) => (
          <Card key={w.name}>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>{w.name}</CardTitle>
              <Badge variant="secondary">{w.tag}</Badge>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">{w.body}</CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
