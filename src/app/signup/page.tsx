"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function SignUpPage() {
  const [msg, setMsg] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMsg(
      "Account created (placeholder). Please verify your email and complete KYC where required."
    );
  }

  return (
    <div className="container py-12 max-w-2xl">
      <h1 className="text-3xl md:text-5xl font-bold">Sign Up</h1>
      <form onSubmit={onSubmit} className="mt-8 grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="artist">Artist / Legal Name</Label>
          <Input id="artist" required placeholder="Artist Name" />
        </div>
        <div>
          <Label htmlFor="country">Country/Region</Label>
          <Input id="country" required placeholder="Country" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" required placeholder="you@example.com" />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required />
        </div>

        <div className="md:col-span-2 space-y-3 text-xs text-muted-foreground">
          <div className="flex items-start gap-3">
            <input type="checkbox" required id="tos" className="mt-1" />
            <label htmlFor="tos">I accept the Terms of Service.</label>
          </div>
          <div className="flex items-start gap-3">
            <input type="checkbox" required id="distribution" className="mt-1" />
            <label htmlFor="distribution">I accept the Distribution Agreement.</label>
          </div>
          <div className="flex items-start gap-3">
            <input type="checkbox" required id="privacy" className="mt-1" />
            <label htmlFor="privacy">I accept the Privacy Policy and Cookie Policy.</label>
          </div>
        </div>

        <div className="md:col-span-2">
          <Button type="submit" variant="accent">Create Account</Button>
        </div>

        {msg && <p className="md:col-span-2 text-emerald-400 text-sm">{msg}</p>}
      </form>
    </div>
  );
}
