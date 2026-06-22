import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function StoriesPage() {
return (
<> <Navbar />


  <main className="min-h-screen bg-slate-950 text-white">
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-center">
        <h1 className="text-6xl font-bold">
          Success Stories
        </h1>

        <p className="mt-6 text-xl text-slate-400">
          Real career transformations from FuturePath learners.
        </p>
      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-3">
        <div className="rounded-3xl bg-white/5 p-8">
          <div className="text-4xl">🛡️</div>

          <h2 className="mt-4 text-2xl font-bold">
            Cybersecurity
          </h2>

          <p className="mt-4 text-slate-400">
            A student transitioned into a SOC Analyst role after
            completing a cybersecurity roadmap.
          </p>
        </div>

        <div className="rounded-3xl bg-white/5 p-8">
          <div className="text-4xl">🤖</div>

          <h2 className="mt-4 text-2xl font-bold">
            AI Engineer
          </h2>

          <p className="mt-4 text-slate-400">
            A learner secured an AI internship through mentorship
            and project guidance.
          </p>
        </div>

        <div className="rounded-3xl bg-white/5 p-8">
          <div className="text-4xl">☁️</div>

          <h2 className="mt-4 text-2xl font-bold">
            Cloud Engineer
          </h2>

          <p className="mt-4 text-slate-400">
            A working professional successfully switched careers
            into cloud computing.
          </p>
        </div>
      </div>
    </section>
  </main>

  <Footer />
</>


);
}
