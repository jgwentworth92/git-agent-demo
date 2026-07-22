export const title = "Intro";

export default function Intro() {
  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-bold tracking-tight">Git is the agent's memory</h1>
      <p className="max-w-3xl text-muted-foreground">
        For a human, git is version control. For an AI agent working under a human
        orchestrator, git and GitHub are the working environment: memory between
        sessions, a search index over every change ever made, a coordination layer
        for parallel work, and a safety net when something breaks.
      </p>
      <p className="max-w-3xl text-muted-foreground">
        This page documents those capabilities. Each part covers one mechanism —
        what an agent can do with it, the commands involved, and how this repository
        uses the pattern. The repository behind this page is the running example:
        prompted by a presenter, agents answer questions from its history, build new
        sections in parallel worktrees, and repair breakage.
      </p>
    </div>
  );
}
