# saraf.cards

Marketing site for saraf.cards — transactional email infrastructure for one-time passcodes, sign-in verification, and account-security notifications.

## Development

Requires Node.js (or Bun).

```sh
npm i
npm run dev
```

## Publishing on GitHub Pages

The site is served as plain static files straight from the repository root
(GitHub Pages → Settings → Pages → Source: **Deploy from a branch**, Branch: **main**, Folder: **/ (root)**).

The built files in the root — `index.html`, `faq/`, `terms/`, `assets/`, `CNAME` and `.nojekyll` — are generated. After changing anything in `src/`, rebuild them and push:

```sh
npm run build:pages
git add -A && git commit -m "Rebuild site" && git push
```

`CNAME` sets the custom domain to `saraf.cards`. `.nojekyll` tells GitHub Pages to serve the files as-is.

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
