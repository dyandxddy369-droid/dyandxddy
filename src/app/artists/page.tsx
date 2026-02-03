"use client";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Music genres to filter
const GENRES = ["All Artists", "Phonk", "Trance", "Drum & Bass", "Electronic"] as const;

const ARTISTS = [
  { name: "PHNK", genre: "Phonk", bio: "Melodic wave phonk and electronic beats.", topRelease: "Night Drive" },
  { name: "WAVE", genre: "Trance", bio: "Uplifting trance melodies.", topRelease: "My Eyes" },
  { name: "Bassline", genre: "Drum & Bass", bio: "Heavy, bass-driven drum & bass grooves.", topRelease: "Warehouse" },
  { name: "Dyan Dxddy", genre: "Phonk", bio: "Dark, gritty phonk vibes.", topRelease: "Cute Memories" },

  // Lower-level / underground artists
  { name: "Magnetude", genre: "Drum & Bass", bio: "Underground neurofunk producer with sharp synths.", topRelease: "System Shock" },
  { name: "Agressor Bunx", genre: "Drum & Bass", bio: "Raw, aggressive DnB duo with cult underground energy.", topRelease: "Dark Pulse" },
  { name: "Xeonz", genre: "Drum & Bass", bio: "UK-based DnB with intricate bass and percussion.", topRelease: "Apollo" },
  { name: "NickBee", genre: "Drum & Bass", bio: "Dark, techy drum & bass with cinematic vibes.", topRelease: "Shadow Veil" },
  { name: "DJ Crazymane", genre: "Phonk", bio: "Underground phonk beatmaker with gritty rhythm.", topRelease: "City Shadows" },
  { name: "KIWA", genre: "Electronic", bio: "Finnish electronic producer blending breaks and electro.", topRelease: "Dreamtime Enhancer" },
];

export default function ArtistsPage() {
  const [active, setActive] = useState<(typeof GENRES)[number]>("All Artists");

  // If "All Artists" is selected, show all; else filter by genre
  const filtered = active === "All Artists"
    ? ARTISTS
    : ARTISTS.filter((a) => a.genre === active);

  return (
    <div className="container py-12">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl md:text-5xl font-bold">Artists</h1>
        <div className="flex gap-2 flex-wrap">
          {GENRES.map((g) => (
            <Button
              key={g}
              variant={active === g ? "accent" : "outline"}
              onClick={() => setActive(g)}
            >
              {g}
            </Button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {filtered.map((a) => (
          <div key={a.name} className="rounded-xl border border-border p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{a.name}</h3>
              <Badge>{a.genre}</Badge>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{a.bio}</p>
            <p className="mt-4 text-xs text-muted-foreground">Top release: {a.topRelease}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex gap-3 flex-wrap">
        <Button variant="accent" asChild>
          <a href="/signup">Distribute Free</a>
        </Button>
        <Button variant="outline" asChild>
          <a href="/send-demo">Apply for Partnership</a>
        </Button>
      </div>
    </div>
  );
}
