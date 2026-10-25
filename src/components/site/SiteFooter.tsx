import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const linkClass =
  "rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm space-y-3">
          <Logo />
          <p className="text-sm leading-relaxed text-muted-foreground">
            saraf.cards is a transactional communications service.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
          <Link to="/faq" className={linkClass}>
            FAQ
          </Link>
          <Link to="/terms" className={linkClass}>
            Terms
          </Link>
        </nav>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-5 py-6 font-mono text-[11px] text-muted-foreground sm:px-8">
          © 2026 saraf.cards
        </p>
      </div>
    </footer>
  );
}
