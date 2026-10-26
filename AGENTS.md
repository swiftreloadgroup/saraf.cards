## Project rules
- Shared header/footer live in `src/components/site/` and wrap `<Outlet />` in `src/routes/__root.tsx`, so every page gets the same chrome.
- How It Works and Security are in-page sections of `/` (linked with `hash`); FAQ and Terms are their own routes, each with its own `head()`.
- Theme is a `.dark` class on `<html>`, set before hydration by `themeInitScript` and toggled by `ThemeToggle`; night-mode button styling comes from the `glass-silver` / `glass-smoke` utilities applied via `dark:` in the shadcn button variants, so new buttons inherit it.
- GitHub Pages serves the repo root via "Deploy from a branch" (no GitHub Actions): `npm run build:pages` prerenders every page with `STATIC_EXPORT=true` and copies the static output (index.html, page folders, assets/, CNAME, .nojekyll) to the root; rerun it after any `src/` change, and add new public routes to `staticPages` in `vite.config.ts`.
