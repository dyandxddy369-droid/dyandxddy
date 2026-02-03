import { Badge } from "@/components/ui/badge";
import StoresLogos from "./stores-logos";

export default function ServicesPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl md:text-5xl font-bold">Services</h1>
      <p className="mt-4 text-muted-foreground max-w-3xl">Free, non-exclusive distribution to major DSPs and social platforms, with optional partnership membership and YouTube Content ID support.</p>

      <section className="mt-10 grid md:grid-cols-2 gap-8">
        <div className="rounded-xl border border-border p-6">
          <h2 className="text-xl font-semibold">Distribution</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Global DSP delivery: Spotify, Apple Music, YouTube Music, TikTok, Instagram, Amazon, Deezer, SoundCloud, Beatport*</li>
            <li>ISRC assignment and UPC/EAN support</li>
            <li>Metadata management, territories, pricing</li>
            <li>Release scheduling (recommend 14–21 days lead time)</li>
            <li>Artist splits, monthly statements, payouts</li>
          </ul>
          <p className="mt-3 text-xs text-muted-foreground">* Store availability may vary by genre and content type.</p>
        </div>
        <div className="rounded-xl border border-border p-6">
          <h2 className="text-xl font-semibold">YouTube Content ID</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>UGC fingerprinting and monetization on eligible content</li>
            <li>Claim & dispute management</li>
            <li>Eligibility: original content you fully own/control</li>
            <li>Not eligible: unlicensed samples or widely used loops/sample packs</li>
          </ul>
          <p className="mt-3 text-xs text-muted-foreground">Compliant with YouTube Content ID and Google Partner Guidelines. "YouTube" and "Google" are trademarks of their respective owners.</p>
        </div>
        <div className="rounded-xl border border-border p-6">
          <h2 className="text-xl font-semibold">Partnership Membership</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>A&R feedback and release strategy</li>
            <li>Marketing assets, pre-save pages, cover art support</li>
            <li>Playlist/editorial pitching where applicable (no guarantees)</li>
          </ul>
        </div>
        <div className="rounded-xl border border-border p-6">
          <h2 className="text-xl font-semibold">Specs & Guidelines</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Audio: WAV/AIFF 16–24-bit, 44.1–48 kHz</li>
            <li>Artwork: square 3000x3000px minimum, no unauthorized text</li>
            <li>Metadata: Title, Artists, Genre, Release Date, ISRC, UPC/EAN, Explicit, Contributors, Rights holder</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h3 className="text-lg font-semibold">Monetization</h3>
        <div className="mt-4 grid md:grid-cols-3 gap-6 text-sm text-muted-foreground">
          <div className="rounded-lg border border-border p-4"><Badge>Streaming</Badge><p className="mt-2">Royalties from DSPs.</p></div>
          <div className="rounded-lg border border-border p-4"><Badge>UGC</Badge><p className="mt-2">YouTube CID where eligible.</p></div>
          <div className="rounded-lg border border-border p-4"><Badge>Social</Badge><p className="mt-2">Facebook/Instagram/TikTok monetization where supported.</p></div>
        </div>
      </section>

      <section className="mt-12">
        <h3 className="text-lg font-semibold">Platforms</h3>
        <StoresLogos />
      </section>
    </div>
  );
}
