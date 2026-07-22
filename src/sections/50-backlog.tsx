import { Badge } from "@/components/ui/badge";
import tickets from "@/data/tickets.json";

export const title = "Backlog";

export default function Backlog() {
  const rows = [...tickets].sort((a, b) => (a.id < b.id ? 1 : -1));
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">The repo is the agent's database</h1>
      <p className="max-w-2xl text-muted-foreground">
        Agents read and write tickets.json like any state store — but every write is a
        commit, and CI validates it. The repo rejects bad data no matter who commits
        it, agent or human.
      </p>
      <p className="max-w-2xl text-sm text-muted-foreground/80">
        The shape is deliberate: a flat JSON file (docs/adr/0002) so every change is a
        readable diff, and tests/validate.mjs runs on every push so a bad write turns
        main red within a minute.
      </p>
      <div className="space-y-2">
        {rows.map((t) => (
          <div key={t.id} className="flex items-center gap-3 rounded-md border px-4 py-2">
            <Badge variant="outline" className="font-mono">
              {t.id}
            </Badge>
            <span className="flex-1 text-sm">{t.title}</span>
            <Badge variant={t.status === "done" ? "default" : "secondary"}>{t.status}</Badge>
            <span className="text-xs text-muted-foreground">{t.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
