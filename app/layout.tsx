import type { Metadata } from "next";
import { Newsreader, IBM_Plex_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const plex = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://ludovicbergeron.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ludovic Bergeron — Machine learning research",
    template: "%s — Ludovic Bergeron",
  },
  description:
    "Student researcher at esiealab working on explainable deep reinforcement learning for type 1 diabetes insulin delivery, and on-device machine learning. Previously applied ML research at Christian Dior Couture.",
  keywords: [
    "Ludovic Bergeron",
    "machine learning research",
    "explainable reinforcement learning",
    "causal inference",
    "on-device machine learning",
    "recommender systems",
    "esiealab",
    "ESIEA",
  ],
  authors: [{ name: "Ludovic Bergeron" }],
  openGraph: {
    type: "profile",
    title: "Ludovic Bergeron — Machine learning research",
    description:
      "Explainable deep RL for closed-loop insulin delivery, on-device sign language translation, and recommendation research.",
    url: siteUrl,
    siteName: "Ludovic Bergeron",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${newsreader.variable} ${plex.variable} antialiased`}>
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            enableColorScheme
            disableTransitionOnChange
          >
            {children}
            <Analytics />
            <SpeedInsights />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
