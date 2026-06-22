"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
return ( <section className="relative overflow-hidden bg-slate-950 text-white"> <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#2563eb40,transparent_40%),radial-gradient(circle_at_bottom_right,#7c3aed40,transparent_40%)]" />


  <div className="relative mx-auto max-w-7xl px-6 py-32">
    <div className="grid items-center gap-16 lg:grid-cols-2">
      <div>
        <div className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
          FuturePath Career Intelligence Platform
        </div>

        <h1 className="mt-8 text-6xl font-extrabold leading-tight lg:text-8xl">
          Turn Career
          <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
            Confusion
          </span>
          Into Clarity
        </h1>

        <p className="mt-8 max-w-2xl text-xl text-slate-400">
          Discover the right career path, connect with elite
          mentors, and receive personalized AI-powered guidance
          to accelerate your professional growth.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/signup"
            className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            Start Your Journey
          </Link>

          <Link
            href="/mentors"
            className="rounded-2xl border border-white/10 px-8 py-4 font-semibold backdrop-blur hover:bg-white/5"
          >
            Explore Mentors
          </Link>
        </div>

        <div className="mt-14 flex gap-10">
          <div>
            <div className="text-4xl font-bold">55K+</div>
            <div className="text-slate-400">
              Industry Experts
            </div>
          </div>

          <div>
            <div className="text-4xl font-bold">150+</div>
            <div className="text-slate-400">
              Career Domains
            </div>
          </div>

          <div>
            <div className="text-4xl font-bold">92%</div>
            <div className="text-slate-400">
              Success Rate
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-2xl font-bold">
              Career Readiness
            </h3>

            <span className="rounded-full bg-green-500/20 px-3 py-1 text-green-400">
              Excellent
            </span>
          </div>

          <div className="mb-6 h-4 rounded-full bg-slate-800">
            <div className="h-4 w-[82%] rounded-full bg-gradient-to-r from-blue-500 to-indigo-600" />
          </div>

          <div className="text-right text-5xl font-bold">
            82%
          </div>

          <div className="mt-10 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              Resume Optimization
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              AI Career Roadmap
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              Mentor Matching
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              Skill Gap Analysis
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


);
}
