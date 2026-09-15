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
npm run build
npm start
```

Deploy to [Vercel](https://vercel.com): connect this repo on `main` and redeploy. Root Directory can be **`.` (default)** or **`website`**.

**Vercel → Settings → Environment Variables** (Production, Preview, Development):

| Name | Value |
|------|--------|
| `SMTP_HOST` | `smtp.gmail.com` (optional if using repo `vercel.json`) |
| `SMTP_PORT` | `587` |
| `SMTP_USER` | `jjuar090@ucr.edu` |
| `SMTP_PASS` | your Gmail app password (spaces OK) |
| `QUOTE_TO_EMAIL` | `sandoval.anthony909@yahoo.com` |

Without `SMTP_USER` and `SMTP_PASS` on Vercel, the quote form returns an error (works locally with `.env.local` only).

## Project Structure

```
├── src/              # App pages & components
├── public/           # Static assets
├── package.json
└── README.md
```
