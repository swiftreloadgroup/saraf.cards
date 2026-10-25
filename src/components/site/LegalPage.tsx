import type { ReactNode } from "react";

export function LegalPage({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">{eyebrow}</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-[-0.035em] text-foreground sm:text-5xl">
        {title}
      </h1>
      <div className="mt-5 text-lg leading-relaxed text-muted-foreground">{intro}</div>
      <div className="mt-12 space-y-10 border-t border-border pt-10 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground [&_p]:mt-3 [&_p]:leading-relaxed [&_p]:text-muted-foreground [&_a]:font-medium [&_a]:text-primary [&_a]:underline-offset-4 hover:[&_a]:underline">
        {children}
      </div>
    </div>
  );
}
