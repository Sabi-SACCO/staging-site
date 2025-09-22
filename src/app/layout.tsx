import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { cn } from "@/lib/utils";
import { LanguageProvider } from "@/context/language-context";
import { Analytics } from "@/components/analytics";
import { FormationBanner } from "@/components/layout/formation-banner";

export const metadata: Metadata = {
  title: "Sabi SACCO Ltd. | Modern Cooperative Finance",
  description:
    "Your financial journey, simplified. Welcome to Sabi SACCO, a modern, member-first cooperative for Ethiopia's next generation of creators, innovators, and leaders.",
  keywords: [
    "Sabi",
    "SACCO",
    "Ethiopia",
    "finance",
    "cooperative",
    "savings",
    "loans",
    "fintech",
  ],
  authors: [{ name: "Sabi SACCO Ltd." }],
  openGraph: {
    title: "Sabi SACCO Ltd. | Modern Cooperative Finance",
    description:
      "A modern, community-built financial engine for Ethiopia's next generation.",
    url: "https://sabi-sacco.com", // Replace with your actual domain
    siteName: "Sabi SACCO Ltd.",
    images: [
      {
        url: "https://picsum.photos/1200/630", // Replace with a branded image
        width: 1200,
        height: 630,
        alt: "Sabi SACCO Community",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sabi SACCO Ltd. | Modern Cooperative Finance",
    description:
      "A community-built financial engine for Ethiopia's next generation.",
    images: ["https://picsum.photos/1200/630"], // Replace with a branded image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          "font-sans bg-background text-foreground antialiased",
          "min-h-screen"
        )}
      >
        <LanguageProvider>
          <FormationBanner />
          {children}
        </LanguageProvider>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
