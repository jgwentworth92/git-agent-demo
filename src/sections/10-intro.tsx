export const title = "Intro";

export default function Intro() {
  return (
    <div className="space-y-6">
      <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">Git is the agent's memory</h1>
      <p className="max-w-2xl text-xl text-muted-foreground">
        For a human, git is version control. For an AI agent, git + GitHub is also its
        memory, its search index, its coordination layer, and its safety net.
      </p>
      <p className="max-w-2xl text-muted-foreground">
        This page is the presentation — and the repository behind it is the demo.
        Agents modify both while you watch: they answer questions from its history,
        build new sections in parallel worktrees, and repair it when a human breaks it.
      </p>
    </div>
  );
}
