const POINTS = [
  ["Memory", "history and ADRs answer why."],
  ["Search index", "git log -S finds when."],
  ["Coordination", "worktrees build in parallel while main stays stable."],
  ["Safety net", "revert makes mistakes cheap."],
] as const;

export default function Recap() {
  return (
    <div className="space-y-8 text-center">
      <h1 className="text-4xl font-bold tracking-tight">
        For an agent, git is the whole operating environment.
      </h1>
      <ul className="space-y-2 text-lg text-muted-foreground">
        {POINTS.map(([title, line]) => (
          <li key={title}>
            <span className="font-medium text-foreground">{title}</span> — {line}
          </li>
        ))}
      </ul>
    </div>
  );
}
