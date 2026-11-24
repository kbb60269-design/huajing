import type { ReactNode } from "react";

export function PageIntro({
  index,
  kicker,
  title,
  en,
  children,
}: {
  index?: string;
  kicker?: string;
  title: string;
  en: string;
  children?: ReactNode;
}) {
  return (
    <header className="mx-auto max-w-[1180px] px-5 pt-12 pb-2 md:px-8 md:pt-16">
      <p className="font-latin text-xs tracking-[0.22em] text-cinnabar">
        {index ? `${index}  ·  ` : ""}
        {kicker ?? en}
      </p>
      <h1 className="mt-3 font-serif text-4xl tracking-wide text-cinnabar md:text-5xl">{title}</h1>
      <p className="font-latin mt-2 text-sm tracking-[0.18em] text-ink-soft">{en}</p>
      <div className="mt-5 h-px w-full bg-cinnabar" />
      {children ? (
        <div className="mt-6 max-w-2xl text-[15px] leading-8 text-ink/90">{children}</div>
      ) : null}
    </header>
  );
}
