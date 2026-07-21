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

export default function Home() {
  return (
    <div className="space-y-8">
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
    </div>
  );
}
