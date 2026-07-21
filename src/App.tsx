import { lazy, Suspense, type ComponentType } from "react";
import { Route, Routes } from "react-router-dom";
import ComingSoon from "@/components/ComingSoon";
import Layout from "@/components/Layout";
import { NAV } from "@/nav";

const pageModules = import.meta.glob("./pages/*.tsx");

function pageFor(name: string): ComponentType {
  const loader = pageModules[`./pages/${name}.tsx`];
  if (!loader) return ComingSoon;
  return lazy(loader as () => Promise<{ default: ComponentType }>);
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {NAV.map((entry) => {
          const Page = entry.comingSoon ? ComingSoon : pageFor(entry.page);
          return (
            <Route
              key={entry.path}
              path={entry.path}
              element={
                <Suspense fallback={null}>
                  <Page />
                </Suspense>
              }
            />
          );
        })}
      </Route>
    </Routes>
  );
}
