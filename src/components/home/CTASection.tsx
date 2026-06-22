import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-black py-24 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-5xl font-bold">
          Ready to Accelerate Your Career?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
          Join thousands of students and professionals building
          successful careers with AI-powered guidance and expert mentors.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/signup"
            className="rounded-xl bg-white px-6 py-3 font-semibold text-black"
          >
            Get Started Free
          </Link>

          <Link
            href="/mentors"
            className="rounded-xl border border-white px-6 py-3 font-semibold"
          >
            Browse Mentors
          </Link>
        </div>
      </div>
    </section>
  );
}