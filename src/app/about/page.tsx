import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">
        <section className="mx-auto max-w-5xl px-6 py-20">
          <h1 className="text-center text-5xl font-bold">
            About FuturePath
          </h1>

          <p className="mt-6 text-center text-lg text-slate-600">
            FuturePath helps students and professionals discover
            career opportunities through mentorship, AI-powered
            guidance, skill assessments, and personalized roadmaps.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h2 className="text-xl font-bold">Our Mission</h2>
              <p className="mt-4 text-slate-600">
                Help every learner make informed career decisions.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h2 className="text-xl font-bold">Our Vision</h2>
              <p className="mt-4 text-slate-600">
                Build the world's most trusted career growth platform.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h2 className="text-xl font-bold">Our Values</h2>
              <p className="mt-4 text-slate-600">
                Growth, mentorship, transparency, and innovation.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}