import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <main>
      <section className="container py-16 md:py-28">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Badge variant="accent" className="mb-4">Independent since 2022</Badge>
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              Where underground sounds meet digital innovation
            </h1>
            <p className="mt-6 text-muted-foreground max-w-prose">
              Free music distribution and an artist-first record label for House, Trance, Drum & Bass, Dubstep, Techno, and Trap culture. Keep your rights, grow your audience, and monetize across DSPs and YouTube.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="accent" size="lg" asChild>
                <Link href="/signup">Distribute Free</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/send-demo">Send Demo</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              <Badge>Electronic</Badge>
              <Badge>Dance</Badge>
              <Badge>Trance</Badge>
              <Badge variant="outline">Phonk</Badge>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-gradient-to-br from-emerald-600/20 via-black to-emerald-400/10 p-6">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <h3 className="font-semibold">Value</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Free global DSP delivery</li>
                  <li>YouTube Content ID enrollment</li>
                  <li>Optional partnership membership</li>
                  <li>Artist-first, non-exclusive</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Tech + Admin</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>ISRC + UPC/EAN tools</li>
                  <li>Release scheduling</li>
                  <li>Splits & statements</li>
                  <li>Territories & pricing</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Monetization</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Streaming royalties</li>
                  <li>UGC via YouTube CID</li>
                  <li>Social libraries (IG/TikTok)</li>
                  <li>Editorial pitching (no guarantees)</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Certification</h3>
                <p className="text-muted-foreground">Certified by YouTube & Google*</p>
              </div>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">* Certification claims must be supported by current documentation. "YouTube" and "Google" are trademarks of their respective owners; Dyan Dxddy is not affiliated unless explicitly stated.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
