import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PricingPage() {
return (
<> <Navbar />


  <main className="min-h-screen bg-slate-950 text-white">
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-center">
        <h1 className="text-6xl font-bold">
          Pricing Plans
        </h1>

        <p className="mt-6 text-xl text-slate-400">
          Choose the plan that fits your career growth journey.
        </p>
      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-3xl font-bold">Starter</h2>
          <p className="mt-4 text-5xl font-bold">₹0</p>

          <ul className="mt-8 space-y-3 text-slate-400">
            <li>✓ Career Domains</li>
            <li>✓ Mentor Directory</li>
            <li>✓ Basic Guidance</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-blue-600 p-8">
          <h2 className="text-3xl font-bold">Professional</h2>
          <p className="mt-4 text-5xl font-bold">₹999</p>

          <ul className="mt-8 space-y-3">
            <li>✓ 1-on-1 Mentorship</li>
            <li>✓ Career Roadmaps</li>
            <li>✓ Resume Reviews</li>
            <li>✓ Interview Preparation</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-3xl font-bold">Enterprise</h2>
          <p className="mt-4 text-5xl font-bold">Custom</p>

          <ul className="mt-8 space-y-3 text-slate-400">
            <li>✓ Team Training</li>
            <li>✓ Corporate Mentorship</li>
            <li>✓ Custom Programs</li>
          </ul>
        </div>
      </div>
    </section>
  </main>

  <Footer />
</>


);
}
