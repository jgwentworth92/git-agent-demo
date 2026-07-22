import { Badge } from "@/components/ui/badge";
import tickets from "@/data/tickets.json";

export default function Backlog() {
  const rows = [...tickets].sort((a, b) => (a.id < b.id ? 1 : -1));
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">The backlog is data — and data is commits</h1>
      <p className="text-muted-foreground">
        src/data/tickets.json is the single source of truth, validated by
        tests/validate.mjs on every push. Change it wrong and main goes red.
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
