"use client";

import Link from "next/link";
import { ArrowRight, Users, Briefcase, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium shadow-sm">
              🚀 AI-Powered Career Platform
            </div>

            <h1 className="text-5xl font-extrabold leading-tight tracking-tight lg:text-7xl">
              Build Your
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Dream Career
              </span>
              With Expert Mentors
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-slate-600">
              Get personalized career guidance, industry mentorship,
              skill assessments, and AI-powered career roadmaps
              designed to help students and professionals succeed.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center rounded-xl bg-black px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <Link
                href="/mentors"
                className="rounded-xl border border-slate-300 px-6 py-3 font-semibold hover:bg-slate-100"
              >
                Browse Mentors
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6">
              <div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span className="text-2xl font-bold">55K+</span>
                </div>
                <p className="text-sm text-slate-500">
                  Industry Experts
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-green-600" />
                  <span className="text-2xl font-bold">150+</span>
                </div>
                <p className="text-sm text-slate-500">
                  Career Domains
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-purple-600" />
                  <span className="text-2xl font-bold">92%</span>
                </div>
                <p className="text-sm text-slate-500">
                  Success Rate
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-bold text-xl">
                  Career Readiness Score
                </h3>
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                  Excellent
                </span>
              </div>

              <div className="mb-4 h-4 rounded-full bg-slate-200">
                <div className="h-4 w-[82%] rounded-full bg-gradient-to-r from-blue-500 to-indigo-600" />
              </div>

              <div className="text-right text-3xl font-bold">
                82%
              </div>

              <div className="mt-8 space-y-4">
                <div className="rounded-xl bg-slate-50 p-4">
                  ✓ Resume Optimization
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  ✓ Mentor Recommendations
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  ✓ AI Career Roadmap
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  ✓ Skill Gap Analysis
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}