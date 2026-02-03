import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dyan Dxddy — Free Music Distribution & Record Label (Wave, Phonk, Electronic)",
  description:
    "Independent label helping emerging artists distribute globally with YouTube Content ID, partnership membership, and artist-first contracts.",
  keywords: [
    "Dyan Dxddy",
    "music distribution",
    "record label",
    "wave",
    "phonk",
    "bassline",
    "electronic",
    "YouTube Content ID",
  ],
  openGraph: {
    title: "Dyan Dxddy — Free Music Distribution & Record Label",
    description:
      "Independent label helping emerging artists distribute globally with YouTube Content ID & artist-first model.",
    type: "website",
    url: "https://dyandxddy.com",
  },
  metadataBase: new URL("https://dyandxddy.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <head>
        <Script crossOrigin="anonymous" src="//unpkg.com/same-runtime/dist/index.global.js" />
      </head>
      <body suppressHydrationWarning className="antialiased bg-black text-white">
        <header className="border-b border-border/40 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/40 sticky top-0 z-50">
          <div className="container flex h-16 items-center justify-between">
            <Link href="/" className="font-bold tracking-widest">Dyan Dxddy</Link>
            <nav className="hidden md:flex gap-6 text-sm">
              <Link href="/services" className="hover:text-emerald-400">Services</Link>
              <Link href="/artists" className="hover:text-emerald-400">Artists</Link>
              <Link href="/send-demo" className="hover:text-emerald-400">Send Demo</Link>
              <Link href="/contact" className="hover:text-emerald-400">Contact</Link>
            </nav>
            <div className="flex gap-2">
              <Button asChild variant="accent"><Link href="/signup">Sign Up</Link></Button>
              <Button asChild variant="outline"><Link href="/login">Login</Link></Button>
            </div>
          </div>
        </header>
        <ClientBody>
          {children}
        </ClientBody>
        <footer className="border-t border-border/40 mt-16">
          <div className="container py-8 text-sm text-muted-foreground flex flex-wrap gap-4 justify-between">
            <div>© 2022–Present Dyan Dxddy. All Rights Reserved.</div>
            <div className="flex flex-wrap gap-4">
              <Link href="/legal/terms">Terms</Link>
              <Link href="/legal/privacy">Privacy</Link>
              <Link href="/legal/cookies">Cookies</Link>
              <Link href="/legal/distribution">Distribution Agreement</Link>
              <Link href="/legal/dmca">DMCA</Link>
              <Link href="/legal/acceptable-use">Acceptable Use</Link>
              <Link href="/legal/youtube-cid">YouTube CID Policy</Link>
              <Link href="/legal/payment-taxes-kyc">Payment & KYC</Link>
              <Link href="/legal/ip-trademarks">IP & Trademarks</Link>
              <Link href="/legal/dispute-resolution">Dispute Resolution</Link>
              <Link href="/legal/changes-notices">Changes & Notices</Link>
            </div>
          </div>
          <div className="container pb-10 text-xs text-muted-foreground">
            Certification: Certified by YouTube & Google*. *Certification claims must be supported by current documentation. "YouTube" and "Google" are trademarks of their respective owners; Dyan Dxddy is not affiliated unless explicitly stated.
          </div>
        </footer>
      </body>
    </html>
  );
}
