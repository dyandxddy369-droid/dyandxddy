export default function StoresLogos() {
  const stores = [
    "Spotify",
    "Apple Music",
    "YouTube Music",
    "TikTok",
    "Instagram",
    "Amazon Music",
    "Deezer",
    "SoundCloud",
    "Beatport",
  ];
  return (
    <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-xs text-muted-foreground">
      {stores.map((s) => (
        <div key={s} className="rounded-md border border-border/50 px-3 py-2 text-center">{s}</div>
      ))}
    </div>
  );
}
