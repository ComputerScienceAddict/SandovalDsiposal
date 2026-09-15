import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

/* UPDATE: Replace with actual business name, description, and service area for SEO */
export const metadata: Metadata = {
  title: "Sandoval Commercial Disposal | Renovation Junk Removal – Southern California",
  description:
    "Renovating? We handle the mess. Send photos for a FREE estimate. Junk removal, demolition debris, hot tubs, pianos, furniture. Serving Southern California homeowners, contractors & property managers. Fast, reliable, affordable.",
  keywords: [
    "junk removal",
    "renovation debris removal",
    "Southern California junk removal",
    "construction junk removal",
    "hot tub removal",
    "garage cleanout",
    "property cleanout",
    "demolition hauling",
  ],
  openGraph: {
    title: "Sandoval Commercial Disposal | Renovation Junk Removal",
    description:
      "Send photos for a FREE estimate. We clear the space so you can focus on the build. Southern California.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
