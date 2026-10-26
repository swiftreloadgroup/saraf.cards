// The shared config already includes TanStack Start, React, Tailwind, path aliases and
// React/TanStack dedupe — do not add those plugins again. Extra Vite options go under `vite`.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages only serves static files, so the GitHub Actions workflow sets
// STATIC_EXPORT=true to prerender every page to HTML and skip the server bundle.
const isStaticExport = process.env["STATIC_EXPORT"] === "true";

// Every public page. All of them render the same HTML for every visitor.
const staticPages = [{ path: "/" }, { path: "/faq" }, { path: "/terms" }];

export default defineConfig({
  ...(isStaticExport ? { nitro: false as const } : {}),
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(isStaticExport
      ? {
          pages: staticPages,
          prerender: { enabled: true, autoStaticPathsDiscovery: false, crawlLinks: false },
        }
      : {}),
  },
  vite: {
    // Pre-bundle UI deps at startup so Vite doesn't re-optimize mid-session,
    // which can leave the browser with two React copies (null useContext crash).
    optimizeDeps: {
      include: [
        "@radix-ui/react-slot",
        "class-variance-authority",
        "clsx",
        "lucide-react",
        "tailwind-merge",
      ],
    },
  },
});
