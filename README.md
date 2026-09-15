# Sandoval Commercial Disposal – Website

Professional junk removal website for Sandoval Commercial Disposal, serving Southern California. Built with Next.js.

## Features

- **Responsive design** – Optimized for mobile and desktop
- **Gallery** – Project photos showcasing junk removal work
- **TikTok videos** – Embedded videos (no autoplay)
- **Contact form** – Free quote requests
- **Sticky call CTA** – Call/quote buttons on mobile

## Tech Stack

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript

## Getting Started

1. Install dependencies:

```bash
cd website
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Deploy

Build for production:

```bash
cd website
npm run build
npm start
```

Or deploy to [Vercel](https://vercel.com):

1. Import this repo and open **Project Settings → General → Root Directory**.
2. Set Root Directory to **`website`** (required — the Next.js app lives in that folder).
3. Redeploy from `main`.
4. Add the SMTP environment variables from `website/.env.example` so quote emails work in production.

If the site shows a Vercel **404 NOT_FOUND** page, the Root Directory is almost always still set to the repo root instead of `website`.

## Project Structure

```
anthony/
├── website/          # Next.js app
│   ├── src/
│   │   ├── app/      # Pages & layout
│   │   ├── components/
│   │   └── lib/
│   └── public/       # Static assets
└── README.md
```
