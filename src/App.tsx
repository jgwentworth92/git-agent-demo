import { useEffect, useRef, useState, type ComponentType, type ReactNode } from "react";

type SectionModule = { default: ComponentType; title: string };

const modules = import.meta.glob("./sections/*.tsx", { eager: true }) as Record<
  string,
  SectionModule
>;

const sections = Object.keys(modules)
  .sort()
  .map((path) => ({
    slug: path.replace("./sections/", "").replace(".tsx", "").replace(/^\d+-/, ""),
    title: modules[path].title,
    Section: modules[path].default,
  }));

function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return y;
}

function SectionShell({
  slug,
  index,
  scrollY,
  children,
}: {
  slug: string;
  index: number;
  scrollY: number;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const drift = ref.current ? (scrollY - ref.current.offsetTop) * 0.25 : 0;
  return (
    <section
      id={slug}
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden border-b"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-end pr-4"
        style={{ transform: `translateY(${drift}px)` }}
      >
        <span className="select-none font-mono text-[14rem] font-bold leading-none text-muted-foreground/10 sm:text-[18rem]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="relative mx-auto w-full max-w-4xl px-8 py-24">{children}</div>
    </section>
  );
}

export default function App() {
  const scrollY = useScrollY();
  const [active, setActive] = useState(sections[0]?.slug ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    for (const { slug } of sections) {
      const el = document.getElementById(slug);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-4xl items-center gap-5 px-8 py-3 text-sm">
          <span className="mr-auto font-semibold">git-agent-demo</span>
          {sections.map(({ slug, title }) => (
            <a
              key={slug}
              href={`#${slug}`}
              className={
                active === slug
                  ? "font-medium underline underline-offset-4"
                  : "text-muted-foreground hover:text-foreground"
              }
            >
              {title}
            </a>
          ))}
        </nav>
      </header>
      <main>
        {sections.map(({ slug, Section }, i) => (
          <SectionShell key={slug} slug={slug} index={i} scrollY={scrollY}>
            <Section />
          </SectionShell>
        ))}
      </main>
    </div>
  );
}
