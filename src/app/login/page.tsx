"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function LoginPage() {
  const [msg, setMsg] = useState("");
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMsg("Check your email for a login link or reset instructions (placeholder).");
  }
  return (
    <div className="container py-12 max-w-xl">
      <h1 className="text-3xl md:text-5xl font-bold">Login</h1>
      <form onSubmit={onSubmit} className="mt-8 grid gap-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" required placeholder="you@example.com" />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required />
        </div>
        <div className="flex items-center justify-between text-sm">
          <a href="#" className="text-emerald-400">Forgot password?</a>
        </div>
        <Button type="submit" variant="accent">Login</Button>
        {msg && <p className="text-emerald-400 text-sm">{msg}</p>}
      </form>
    </div>
  );
}
