# Vercel deployment (fix 404 NOT_FOUND)

The Next.js app is in the **`website/`** folder. Vercel must use that folder as the project root.

## One-time setup

1. Open [Vercel Dashboard](https://vercel.com/dashboard) → your **SandovalDsiposal** project.
2. **Settings** → **General** → **Root Directory**.
3. Click **Edit**, set Root Directory to: **`website`**
4. Confirm / save when Vercel asks to adjust settings.
5. **Settings** → **General** → **Build & Development Settings**
   - **Framework Preset:** Next.js
   - Clear any custom **Build Command** / **Output Directory** overrides (leave blank so `website/vercel.json` and defaults apply).
6. **Settings** → **Environment Variables** — add values from `website/.env.example` (SMTP + `QUOTE_TO_EMAIL`).

## Redeploy

1. **Deployments** → latest deployment → **Redeploy** (use latest **`main`**, not an old commit like `af6b5f8`).
2. Wait for **Ready**, then open the production URL.

## Why you saw 404

- Deployments from commit **`af6b5f8`** used a **legacy root `vercel.json` `builds`** block. The build can finish, but routes often **404** on `/`.
- That root `vercel.json` was **removed** on **`main`** (commit **`57b238f`** and later). You must redeploy **`main`** **and** set Root Directory to **`website`**.

## Verify

After deploy, these should load:

- `/` — home page  
- `/gallery` — gallery  
- `/api/quote` — quote API (POST)

If Root Directory is still the repo root (`.`), Vercel will not serve this app correctly.
