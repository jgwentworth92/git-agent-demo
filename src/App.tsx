import { useEffect, useState, type ComponentType } from "react";

const modules = import.meta.glob("./slides/*.tsx", { eager: true }) as Record<
  string,
  { default: ComponentType }
>;

const slides = Object.keys(modules)
  .sort()
  .map((path) => ({ path, Slide: modules[path].default }));

export default function App() {
  const count = slides.length;
  const [index, setIndex] = useState(() => {
    const saved = Number(sessionStorage.getItem("slide") ?? "0");
    return Number.isInteger(saved) && saved >= 0 ? saved : 0;
  });

  useEffect(() => {
    sessionStorage.setItem("slide", String(index));
  }, [index]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === " " && e.target instanceof HTMLElement && e.target.tagName === "BUTTON") {
        return;
      }
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        setIndex((i) => Math.min(i + 1, count - 1));
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        setIndex((i) => Math.max(i - 1, 0));
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [count]);

  if (count === 0) return null;
  const current = Math.min(index, count - 1);
  const { Slide } = slides[current];

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <main className="mx-auto flex min-h-screen max-w-4xl items-center px-8">
        <div className="w-full py-16">
          <Slide />
        </div>
      </main>
      <button
        aria-label="Previous slide"
        className="fixed inset-y-0 left-0 w-12 opacity-0"
        onClick={() => setIndex((i) => Math.max(i - 1, 0))}
      />
      <button
        aria-label="Next slide"
        className="fixed inset-y-0 right-0 w-12 opacity-0"
        onClick={() => setIndex((i) => Math.min(i + 1, count - 1))}
      />
      <nav className="fixed inset-x-0 bottom-6 flex justify-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.path}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={
              i === current
                ? "h-2.5 w-2.5 rounded-full bg-foreground"
                : "h-2.5 w-2.5 rounded-full bg-muted-foreground/40 hover:bg-muted-foreground"
            }
          />
        ))}
      </nav>
      <span className="fixed bottom-6 right-8 font-mono text-sm text-muted-foreground">
        {current + 1} / {count}
      </span>
    </div>
  );
}
