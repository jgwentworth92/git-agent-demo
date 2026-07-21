import { NavLink, Outlet } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { NAV } from "@/nav";

export default function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b">
        <div className="mx-auto flex max-w-4xl items-center gap-6 px-6 py-4">
          <span className="font-semibold">git-agent-demo</span>
          <nav className="flex items-center gap-4 text-sm">
            {NAV.map((entry) =>
              entry.comingSoon ? (
                <span
                  key={entry.path}
                  className="flex items-center gap-1 text-muted-foreground/60"
                >
                  {entry.label}
                  <Badge variant="outline">soon</Badge>
                </span>
              ) : (
                <NavLink
                  key={entry.path}
                  to={entry.path}
                  className={({ isActive }) =>
                    isActive
                      ? "font-medium underline underline-offset-4"
                      : "text-muted-foreground hover:text-foreground"
                  }
                >
                  {entry.label}
                </NavLink>
              )
            )}
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-6 py-10">
        <Outlet />
      </main>
    </div>
  );
}
