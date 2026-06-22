import Link from "next/link";

export default function CTASection() {
return ( <section className="relative overflow-hidden bg-slate-950 py-32"> <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#2563eb30,transparent_40%),radial-gradient(circle_at_bottom_right,#7c3aed30,transparent_40%)]" />


  <div className="relative mx-auto max-w-5xl px-6 text-center">
    <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
      Start Your Career Transformation
    </span>

    <h2 className="mt-8 text-6xl font-bold text-white">
      Ready To Build
      <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
        Your Dream Career?
      </span>
    </h2>

    <p className="mx-auto mt-8 max-w-3xl text-xl text-slate-400">
      Join thousands of students and professionals who are
      accelerating their careers through mentorship,
      AI-powered guidance, and personalized learning paths.
    </p>

    <div className="mt-12 flex flex-wrap justify-center gap-4">
      <Link
        href="/signup"
        className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
      >
        Get Started Free
      </Link>

      <Link
        href="/mentors"
        className="rounded-2xl border border-white/10 px-8 py-4 font-semibold text-white transition hover:bg-white/5"
      >
        Explore Mentors
      </Link>
    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-3">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h3 className="text-3xl font-bold text-white">
          55K+
        </h3>

        <p className="mt-2 text-slate-400">
          Industry Experts
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h3 className="text-3xl font-bold text-white">
          25K+
        </h3>

        <p className="mt-2 text-slate-400">
          Careers Accelerated
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h3 className="text-3xl font-bold text-white">
          92%
        </h3>

        <p className="mt-2 text-slate-400">
          Success Rate
        </p>
      </div>
    </div>
  </div>
</section>


);
}
