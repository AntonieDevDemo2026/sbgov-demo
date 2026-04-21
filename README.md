# SBgov

SBgov is an accessible clinical trial compliance intelligence app focused on incident triage, jurisdiction-specific reporting guidance, and defensible case documentation.

## What is included
- Product positioning and MVP plan in `../sbgov-plan.md`
- Next.js app scaffold
- Marketing pages for positioning
- Core app pages for jurisdictions, incident intake, cases, and playbooks
- Initial Prisma schema for a future PostgreSQL-backed data layer

## Routes
- `/`
- `/product`
- `/how-it-works`
- `/jurisdictions`
- `/jurisdictions/[code]`
- `/new-incident`
- `/cases`
- `/cases/[id]`
- `/playbooks`
- `/accessibility`
- `/contact`

## Next recommended build steps
1. Install and wire Prisma client plus a real database
2. Replace mock data with seeded jurisdiction content
3. Turn incident intake into a validated form with persistence
4. Build a real rules engine for triage logic
5. Add authentication and admin content workflows

## Run locally
```bash
npm install
npm run dev
```

## Deploy to Vercel (free)
1. Push this `sbgov` folder to a GitHub repository
2. Import the repository into Vercel
3. Set the framework to Next.js if prompted
4. Add the environment variable `DATABASE_URL=file:./dev.db` only if you are intentionally using the local SQLite setup during build previews
5. Deploy

### Important note
The current app uses SQLite for local prototyping. For a more durable hosted demo, switch to a hosted Postgres database next.
