export const title = "Summary";

const POINTS = [
  ["Memory", "commit messages, blame, and ADRs give it the why behind code."],
  ["Search index", "log -S, grep, and --follow pin down the when."],
  ["Coordination", "worktrees isolate parallel work; pull requests integrate it under review."],
  ["Safety net", "small commits, CI, and revert make every mistake recoverable."],
] as const;

export default function Recap() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">
        For an agent, git is the whole operating environment.
      </h1>
      <ul className="max-w-3xl space-y-2 text-muted-foreground">
        {POINTS.map(([name, line]) => (
          <li key={name}>
            <span className="font-medium text-foreground">{name}</span> — {line}
          </li>
        ))}
      </ul>
    </div>
  );
}
