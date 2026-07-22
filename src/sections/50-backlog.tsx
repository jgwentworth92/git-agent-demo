import { Badge } from "@/components/ui/badge";
import tickets from "@/data/tickets.json";

export const title = "Backlog";

export default function Backlog() {
  const rows = [...tickets].sort((a, b) => (a.id < b.id ? 1 : -1));
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">The repo is the agent's database</h1>
      <p className="max-w-3xl text-muted-foreground">
        This project's ticket backlog is a flat JSON file in the repository. An
        agent directed to change project data works on it like any state store —
        with one difference: every write is a commit. Data changes show up in
        history, diffs, and blame exactly like code, and CI validates each push, so
        the repo rejects bad data no matter who commits it, agent or human.
      </p>
      <p className="max-w-3xl text-sm text-muted-foreground/80">
        The shape is deliberate: flat JSON (docs/adr/0002) keeps every change a
        readable diff, and tests/validate.mjs enforces the record format on every
        push. An agent changing this data follows the same path a colleague would —
        read the ADR, edit the file, run the validator, commit with a conventional
        message. Break the format and main turns red within a minute.
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
