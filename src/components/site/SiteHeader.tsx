import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const navLinkClass =
  "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-card focus:px-3 focus:py-2 focus:text-sm focus:shadow-soft"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 sm:px-8">
        <Logo />

        <div className="flex items-center gap-1 sm:gap-3">
          <nav aria-label="Primary" className="hidden items-center gap-1 sm:flex">
            <Link to="/" hash="how-it-works" className={navLinkClass}>
              How It Works
            </Link>
            <Link to="/" hash="security" className={navLinkClass}>
              Security
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
