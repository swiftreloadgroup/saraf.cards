import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" aria-hidden="true" className={cn("size-7", className)}>
      <rect x="1" y="1" width="26" height="26" rx="7" className="fill-foreground" />
      <path
        d="M7.5 10.5 14 15l6.5-4.5"
        fill="none"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-background"
      />
      <rect
        x="6.5"
        y="8"
        width="15"
        height="12"
        rx="2.5"
        fill="none"
        strokeWidth="1.8"
        className="stroke-background"
      />
      <circle cx="21" cy="19.5" r="4" className="fill-primary stroke-foreground" strokeWidth="1.5" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      className={cn(
        "inline-flex items-center gap-2.5 rounded-md text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background",
        className,
      )}
      aria-label="saraf.cards home"
    >
      <LogoMark />
      <span className="text-[1.05rem] font-semibold tracking-tight">
        saraf<span className="text-primary">.</span>cards
      </span>
    </Link>
  );
}
