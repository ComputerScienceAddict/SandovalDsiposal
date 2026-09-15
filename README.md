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

Deploy to [Vercel](https://vercel.com): connect this repo on `main` and redeploy. The Next.js app is at the **repository root**. Root Directory can be **`.` (default)** or **`website`** — both are supported. Add SMTP variables from `.env.example` for quote emails.

## Project Structure

```
├── src/              # App pages & components
├── public/           # Static assets
├── package.json
└── README.md
```
