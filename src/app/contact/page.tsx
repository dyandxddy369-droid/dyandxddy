export default function ContactPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl md:text-5xl font-bold">Contact</h1>
      <p className="mt-4 text-muted-foreground">Reach out for support, partnerships, and general inquiries.</p>
      <div className="mt-8 grid md:grid-cols-2 gap-6 text-sm">
        <div className="rounded-xl border border-border p-6">
          <h2 className="text-xl font-semibold">General</h2>
          <p className="mt-2">Email: contact@dyandxddy.com (placeholder)</p>
          <p className="mt-2">Response time: 3–5 business days.</p>
        </div>
        <div className="rounded-xl border border-border p-6">
          <h2 className="text-xl font-semibold">Partnerships</h2>
          <p className="mt-2">Email: partnerships@dyandxddy.com (placeholder)</p>
          <p className="mt-2">For A&R and membership inquiries.</p>
        </div>
      </div>
      <p className="mt-10 text-xs text-muted-foreground">Demos are accepted only via the Send Demo page.</p>
    </div>
  );
}
