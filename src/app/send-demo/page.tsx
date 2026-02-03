"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function SendDemoPage() {
  const [status, setStatus] = useState<string>("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Submitted. We review demos periodically; response times vary.");
  }

  return (
    <div className="container py-12">
      <h1 className="text-3xl md:text-5xl font-bold">Send Demo</h1>
      <p className="mt-4 text-muted-foreground">Share your best, finished work. We focus on PHNK, WAVE, Bassline, and Electronic.</p>

      <form onSubmit={onSubmit} className="mt-8 grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name">Full / Artist Name</Label>
          <Input id="name" required placeholder="Artist Name" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" required placeholder="you@example.com" />
        </div>
        <div>
          <Label htmlFor="genre">Genre</Label>
          <Select id="genre" defaultValue="PHNK">
            <option value="PHNK">PHNK</option>
            <option value="WAVE">WAVE</option>
            <option value="Bassline">Bassline</option>
            <option value="Electronic">Electronic</option>
          </Select>
        </div>
        <div>
          <Label htmlFor="links">Streaming/Download Links</Label>
          <Input id="links" required placeholder="SoundCloud private or Drive/Dropbox" />
        </div>
        <div className="md:col-span-2">
          <Label htmlFor="bio">Short Bio (optional)</Label>
          <Textarea id="bio" placeholder="Tell us about your project" />
        </div>
        <div className="md:col-span-2">
          <Label htmlFor="socials">Social Links (optional)</Label>
          <Input id="socials" placeholder="Instagram, YouTube, etc." />
        </div>
        <div className="md:col-span-2 flex items-start gap-3 text-xs text-muted-foreground">
          <input type="checkbox" required id="own-rights" className="mt-1" />
          <label htmlFor="own-rights">I confirm I own or control the rights to the submitted tracks and consent to be contacted per the Privacy Policy.</label>
        </div>
        <div className="md:col-span-2">
          <Button type="submit" variant="accent">Submit Demo</Button>
        </div>
        {status && <p className="md:col-span-2 text-sm text-emerald-400">{status}</p>}
      </form>

      <div className="mt-10 text-sm text-muted-foreground">
        <p>Guidelines: Send finished, mixed/mastered tracks. Do not submit unlicensed/copyrighted material. We cannot provide individual feedback to all submissions.</p>
      </div>
    </div>
  );
}
