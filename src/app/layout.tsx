import type { Metadata } from "next";
import { Big_Shoulders, Nunito_Sans, Roboto_Mono } from "next/font/google"

import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";

// ── Fonts ─────────────────────────────────────────────────────────────────────
// Each font injects a CSS variable onto <html>.
// Tailwind's font-display / font-sans / font-mono utilities read these via
// var(--font-big-shoulders) etc., as wired in tailwind.config.js.

const bigShoulders = Big_Shoulders({
  variable: "--font-big-shoulders",
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
  display: "swap",
})

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: {
    default: "Polin Liu",
    template: "%s — Polin Liu",
  },
  description:
    "Creative technologist building things worth looking at — design, engineering, and art.",
  keywords: [
    "developer",
    "portfolio",
    "Next.js",
    "React",
    "TypeScript",
    "creative technologist",
    "design",
  ],
  authors: [{ name: "Polin Liu" }],
  openGraph: {
    title: "Polin Liu",
    description:
      "Creative technologist building things worth looking at — design, engineering, and art.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Polin Liu",
    description:
      "Creative technologist building things worth looking at — design, engineering, and art.",
  },
};

// ── Root layout ───────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Font CSS variables are applied to <html> so every descendant can access
    // them via Tailwind's font-display / font-sans / font-mono utilities.
    // suppressHydrationWarning prevents hydration mismatches when a dark-mode
    // toggle adds/removes the `dark` class client-side.
    <html
      lang="en"
      className={`${bigShoulders.variable} ${nunitoSans.variable} ${robotoMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="bg-chalk text-ink">
        <Navbar />
        {/* pt-16 offsets all page content below the fixed 64px navbar */}
        <main className="pt-0">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <div
          className="fixed bottom-0 left-0 right-0 h-16 sm:h-32 z-40 pointer-events-none"
          style={{
            background: "linear-gradient(to top, var(--color-chalk), transparent)"
          }}
        />
      </body>
    </html>
  );
}
