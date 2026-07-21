export type NavEntry = {
  path: string;
  label: string;
  /** Module name under src/pages — `<page>.tsx` must default-export the component. */
  page: string;
  comingSoon: boolean;
};

// One multi-line object per entry, separated by blank lines: parallel branches
// each flip their own entry's flag, and the hunks merge cleanly.
export const NAV: NavEntry[] = [
  {
    path: "/",
    label: "Home",
    page: "Home",
    comingSoon: false,
  },

  {
    path: "/three-ways",
    label: "Three Ways",
    page: "ThreeWays",
    comingSoon: false,
  },

  {
    path: "/worktrees",
    label: "Worktree Playground",
    page: "WorktreePlayground",
    comingSoon: true,
  },

  {
    path: "/history",
    label: "History Explorer",
    page: "HistoryExplorer",
    comingSoon: true,
  },
];
