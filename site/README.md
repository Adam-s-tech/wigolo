# wigolo landing site

Next.js static site for [wigolo](https://github.com/KnockOutEZ/wigolo), deployed to GitHub Pages (custom domain `wigolo.app`, DNS on Cloudflare) by `.github/workflows/site.yml` on pushes to `main` that touch `site/`, `docs/` or `examples/`.

```bash
npm ci
npm run dev        # local dev at localhost:3000
npm run build      # static export to out/
```

Environment (set by the Pages workflow; optional locally):

| Var | Purpose |
|---|---|
| `NEXT_PUBLIC_BASE_PATH` | Optional path prefix for hosting under a sub-path; unset in production (the site serves from the domain root) |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata/OG (`https://wigolo.app`) |
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Access key for the quick-feedback form (web3forms.com). Unset → the form hides and only the GitHub links show. |

All `/public` asset references go through `asset()` from `src/lib/site.ts` so they keep working if a base path is ever set. Fonts are open-licensed and self-hosted at build time via `next/font` (Bricolage Grotesque · Instrument Sans · Azeret Mono).
