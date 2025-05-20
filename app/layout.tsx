

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider"
import  ContactButtonFix   from '@/components/ContactButtonFix'
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ludovic Portfolio",
  description: "🚀 Prêt à relever de nouveaux défis en alternance ! 🚀",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            enableColorScheme       
            disableTransitionOnChange
          >

            {children}
            <ContactButtonFix/>
          </ThemeProvider>
        </body>
    </html>
  );
}
