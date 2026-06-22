import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const domains = [
  "Cybersecurity",
  "Software Development",
  "Data Analytics",
  "Artificial Intelligence",
  "Business Analysis",
  "Cloud Computing",
  "Data Engineering",
  "Product Management",
];

export default function DomainsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">
        <section className="mx-auto max-w-7xl px-6 py-20">
          <h1 className="text-center text-5xl font-bold">
            Career Domains
          </h1>

          <p className="mt-4 text-center text-lg text-slate-600">
            Explore the fastest-growing career paths.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {domains.map((domain) => (
              <div
                key={domain}
                className="rounded-2xl bg-white p-8 shadow-sm"
              >
                <h2 className="text-xl font-bold">
                  {domain}
                </h2>

                <p className="mt-3 text-slate-600">
                  Learn from mentors and follow structured roadmaps.
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}