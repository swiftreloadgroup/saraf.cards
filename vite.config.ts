// The shared config already includes TanStack Start, React, Tailwind, path aliases and
// React/TanStack dedupe — do not add those plugins again. Extra Vite options go under `vite`.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
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
