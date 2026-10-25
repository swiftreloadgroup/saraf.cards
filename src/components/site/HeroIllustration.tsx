import { CheckCircle2, Mail, Server, ShieldCheck } from "lucide-react";

/**
 * Abstract illustration: an origin service hands a message to a relay,
 * which delivers an authenticated verification email.
 */
export function HeroIllustration() {
  return (
    <div
      className="relative mx-auto aspect-[4/5] w-full sm:aspect-[5/4] max-w-[540px] select-none"
      role="img"
      aria-label="Illustration of a verification email travelling securely from a service to a recipient's inbox"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 rounded-[2rem] border border-border bg-surface" />
      <div className="dot-grid absolute inset-0 rounded-[2rem] opacity-70 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

      {/* Connection lines (coordinates are percentages of the frame) */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 hidden h-full w-full sm:block"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M20 26 C 20 44, 22 58, 26 58 C 34 58, 36 70, 50 70"
          className="flow-line stroke-primary/50"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full sm:hidden"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M20 24 C 20 32, 24 40, 26 40 C 26 52, 30 62, 45 64"
          className="flow-line stroke-primary/50"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Origin node */}
      <div className="absolute left-[8%] top-[10%] flex items-center gap-2.5 rounded-xl border border-border bg-card px-3 py-2.5 shadow-soft sm:top-[14%]">
        <span className="flex size-8 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
          <Server className="size-4" aria-hidden="true" />
        </span>
        <div className="leading-tight">
          <p className="text-xs font-semibold tracking-tight text-foreground">Business app</p>
          <p className="font-mono text-[10px] text-muted-foreground">event: sign_in</p>
        </div>
      </div>

      {/* Relay node */}
      <div className="absolute left-[26%] top-[40%] -translate-x-1/2 -translate-y-1/2 sm:top-[58%]">
        <span
          className="absolute -inset-5 rounded-[1.6rem] border border-primary/15"
          aria-hidden="true"
        />
        <span className="soft-pulse absolute inset-0 rounded-2xl bg-primary/15" aria-hidden="true" />
        <span className="relative flex size-14 items-center justify-center rounded-2xl bg-foreground text-background shadow-card">
          <ShieldCheck className="size-6" aria-hidden="true" />
        </span>
      </div>

      {/* Message card */}
      <div className="float-slow absolute bottom-[7%] right-[5%] w-[54%] min-w-[220px] rounded-2xl border border-border bg-card p-4 shadow-card sm:p-5">
        <div className="flex items-center gap-2.5 border-b border-border pb-3">
          <span className="flex size-7 items-center justify-center rounded-full bg-accent text-accent-foreground">
            <Mail className="size-3.5" aria-hidden="true" />
          </span>
          <div className="min-w-0 leading-tight">
            <p className="truncate text-xs font-semibold text-foreground">Sign-in verification</p>
            <p className="truncate font-mono text-[10px] text-muted-foreground">via saraf.cards</p>
          </div>
        </div>
        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">one-time code</p>
        <p className="mt-1 font-mono text-2xl font-medium tracking-[0.28em] text-foreground sm:text-[1.7rem]">
          482&nbsp;913
        </p>
        <p className="mt-1 font-mono text-[10px] text-muted-foreground">ttl: 10m</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5 font-mono text-[10px] text-secondary-foreground">
            <CheckCircle2 className="size-3 text-success" aria-hidden="true" />
            sender: verified
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5 font-mono text-[10px] text-secondary-foreground">
            <CheckCircle2 className="size-3 text-success" aria-hidden="true" />
            delivered · 840ms
          </span>
        </div>
      </div>
    </div>
  );
}
