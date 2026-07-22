export const title = "Capabilities";

const CAPABILITIES = [
  {
    name: "Memory",
    body: "Asked why code is the way it is, an agent can recover the answer from the repository itself: commit messages for what changed and why, docs/adr/ for decisions recorded with their trade-offs, and git blame to connect a line of code to the commit that explains it. In this repo, CLAUDE.md instructs agents to check docs/adr/ before changing any data shape — the ADR is the context the agent consults before acting.",
    commands: "git log · git blame · docs/adr/ · CLAUDE.md",
  },
  {
    name: "Search index",
    body: "History answers when and where did it go. Given a question about a format or a vanished function, an agent can run git log -S to find every commit that added or removed a string, git log --follow to track a file across renames, and git grep to search any revision without checking it out — history queried as an index, not browsed as an archive.",
    commands: "git log -S \"needle\" · git grep · git log --follow",
  },
  {
    name: "Coordination",
    body: "A human orchestrator can run several agents against one repository without collisions: each gets its own worktree on its own branch and integrates through pull requests the orchestrator reviews. Conventions carry the load — this repo keeps one file per section with gaps in the numbering, so two agents adding sections cannot produce a merge conflict.",
    commands: "git worktree add · git push · gh pr create · gh pr merge",
  },
  {
    name: "Safety net",
    body: "Small, frequent commits make every state recoverable. CI runs the repo's validator and build on each push, so a bad change is flagged within a minute, and git revert undoes it without rewriting history. Cheap recovery is what makes delegation safe: the orchestrator can let an agent act, inspect the result, and roll back.",
    commands: "git revert · git commit · gh run watch",
  },
];

export default function Claims() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight">What an agent can do with a repository</h1>
      <p className="max-w-3xl text-muted-foreground">
        Four capabilities, one storage layer. Each is ordinary git — the agent
        brings the ability, the human orchestrator decides when to use it, and
        history supplies the context no prompt contains.
      </p>
      <div className="space-y-7">
        {CAPABILITIES.map((c) => (
          <div key={c.name} className="space-y-2 border-l-2 pl-4">
            <h2 className="text-lg font-semibold">{c.name}</h2>
            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            <p className="font-mono text-xs text-muted-foreground/70">{c.commands}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
