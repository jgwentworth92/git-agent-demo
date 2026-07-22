import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CLAIMS = [
  {
    title: "Memory",
    body: "An agent joining this repo reads commit messages, ADRs, and blame to learn why the code is the way it is — context no prompt gave it.",
  },
  {
    title: "Search index",
    body: "Before touching anything, it runs git log -S and git grep to find when a thing appeared, changed, or vanished.",
  },
  {
    title: "Coordination",
    body: "Agents split work across worktrees and branches — main stays stable while they build in parallel.",
  },
  {
    title: "Safety net",
    body: "They commit small and often: every mistake is one revert away, so they can act without fear.",
  },
];

export default function Claims() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight">What an agent does with this repo</h1>
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
