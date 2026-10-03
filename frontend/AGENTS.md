# Tunisian Hoops — Frontend

Independent app for following Tunisian basketball.

## Architecture Rules
- Server Components by default; Client Components only for interactivity.
- Data-access layer in `apps/web/src/lib/data/` (mock data for now).
- Domain types in `packages/shared`.
- Use logical CSS properties (`ms-`, `pe-`, etc.) for RTL support.
- No backend/auth yet.

## Design
- Dark-first ("arena at night" feel), modern sports app.
- Tokens (Court Orange, Carthage Red) defined in `globals.css` via CSS custom properties.
- Fonts: Inter (body), Barlow Condensed (scores/headings), Cairo (Arabic).

## Tech Stack
- Next.js (App Router), TypeScript (strict).
- Tailwind CSS v4, shadcn/ui.
- next-intl, Framer Motion, lucide-react, next-themes.
- pnpm workspace.
