export const title = "Three ways";

const ROWS = [
  {
    method: "CLI in the agent's shell",
    how: "The agent runs git and gh like a developer — every capability, every flag, fully scriptable.",
    fit: "Local work, full-history operations, anything a human could do in a terminal.",
    limits: "Needs a shell and a clone.",
  },
  {
    method: "Scripts and hooks",
    how: "Deterministic automation with no model in the loop: git hooks, CI jobs, and pipelines enforce rules on every push.",
    fit: "Guarantees that hold even when nobody is prompting.",
    limits: "Fixed behavior; exercises no judgment.",
  },
  {
    method: "MCP (GitHub server)",
    how: "The GitHub API exposed as typed, permission-scoped tool calls.",
    fit: "Hosted and remote agents with no shell or local clone.",
    limits: "Narrower surface than the CLI.",
  },
];

export default function ThreeWays() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Three ways agents drive git</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b text-left">
              <th className="py-2 pr-4 font-semibold">Method</th>
              <th className="py-2 pr-4 font-semibold">How it works</th>
              <th className="py-2 pr-4 font-semibold">Best for</th>
              <th className="py-2 font-semibold">Limits</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            {ROWS.map((r) => (
              <tr key={r.method} className="border-b align-top">
                <td className="py-3 pr-4 font-medium text-foreground">{r.method}</td>
                <td className="py-3 pr-4">{r.how}</td>
                <td className="py-3 pr-4">{r.fit}</td>
                <td className="py-3">{r.limits}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="max-w-3xl text-sm text-muted-foreground">
        This demo uses the first method: everything the agents do here happens
        through git and gh in their shell, at a presenter's direction — while this
        repository's CI is the second method running underneath, validating every
        push with no model involved.
      </p>
    </div>
  );
}
