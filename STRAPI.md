# Strapi CMS integration

The homepage loads all section content from Strapi when enabled, with static fallbacks in `data/site-content.js`.

## Enable locally

1. Start Strapi: `cd D:\TVK\tvk-strapi && npm run develop`
2. Copy env: `copy .env.local.example .env.local`
3. Ensure `NEXT_PUBLIC_USE_STRAPI=true` and `STRAPI_URL=http://localhost:1337`
4. Start site: `npm run dev` → http://localhost:3000

Disable Strapi (static only): set `NEXT_PUBLIC_USE_STRAPI=false` or remove the variable.

## Data flow

- `app/page.js` → `getHomePageData()` in `lib/strapi/queries.js`
- `components/HomeContent.js` passes props to every section

Strapi project docs: `D:\TVK\tvk-strapi\README-TVK.md` and `SCHEMAS.md`.
