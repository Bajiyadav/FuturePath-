"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
{ name: "Home", href: "/" },
{ name: "Domains", href: "/domains" },
{ name: "Mentors", href: "/mentors" },
{ name: "About", href: "/about" },
{ name: "Contact", href: "/contact" },
];

export default function Navbar() {
const [mobileOpen, setMobileOpen] = useState(false);

return ( <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl"> <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"> <Link href="/" className="flex items-center gap-3"> <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-lg font-bold text-white shadow-lg">
FP </div>


      <div>
        <h1 className="text-lg font-bold text-white">
          FuturePath
        </h1>

        <p className="text-xs text-slate-400">
          Career Intelligence Platform
        </p>
      </div>
    </Link>

    <nav className="hidden items-center gap-8 md:flex">
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="text-sm font-medium text-slate-300 transition hover:text-white"
        >
          {item.name}
        </Link>
      ))}
    </nav>

    <div className="hidden items-center gap-3 md:flex">
      <Link
        href="/login"
        className="rounded-xl border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5"
      >
        Login
      </Link>

      <Link
        href="/signup"
        className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2 text-sm font-semibold text-white transition hover:scale-105"
      >
        Get Started
      </Link>
    </div>

    <button
      onClick={() => setMobileOpen(!mobileOpen)}
      className="text-white md:hidden"
    >
      {mobileOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  </div>

  {mobileOpen && (
    <div className="border-t border-white/10 bg-slate-950 md:hidden">
      <div className="flex flex-col gap-4 px-6 py-6">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setMobileOpen(false)}
            className="text-slate-300"
          >
            {item.name}
          </Link>
        ))}

        <Link
          href="/login"
          className="rounded-xl border border-white/10 px-4 py-2 text-center text-slate-300"
        >
          Login
        </Link>

        <Link
          href="/signup"
          className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-center text-white"
        >
          Get Started
        </Link>
      </div>
    </div>
  )}
</header>


);
}
