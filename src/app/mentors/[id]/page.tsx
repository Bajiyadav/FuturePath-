import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function MentorProfilePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-3xl bg-white p-10 shadow-sm">
            <div className="grid gap-10 lg:grid-cols-3">
              <div>
                <div className="h-56 w-56 rounded-3xl bg-slate-200" />

                <button className="mt-6 w-full rounded-xl bg-black py-3 font-medium text-white">
                  Book Session
                </button>

                <button className="mt-3 w-full rounded-xl border py-3 font-medium">
                  View LinkedIn
                </button>
              </div>

              <div className="lg:col-span-2">
                <h1 className="text-4xl font-bold">
                  Sarah Johnson
                </h1>

                <p className="mt-2 text-xl text-slate-600">
                  Senior Software Engineer · Google
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full bg-slate-100 px-4 py-2">
                    React
                  </span>

                  <span className="rounded-full bg-slate-100 px-4 py-2">
                    Next.js
                  </span>

                  <span className="rounded-full bg-slate-100 px-4 py-2">
                    TypeScript
                  </span>

                  <span className="rounded-full bg-slate-100 px-4 py-2">
                    System Design
                  </span>
                </div>

                <div className="mt-10">
                  <h2 className="text-2xl font-bold">
                    About
                  </h2>

                  <p className="mt-4 text-slate-600">
                    Experienced software engineer with 8+ years
                    building scalable web applications and mentoring
                    aspiring developers. Passionate about helping
                    students break into top technology companies.
                  </p>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-3">
                  <div className="rounded-2xl bg-slate-50 p-6">
                    <div className="text-3xl font-bold">
                      8+
                    </div>

                    <p className="text-slate-500">
                      Years Experience
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-6">
                    <div className="text-3xl font-bold">
                      250+
                    </div>

                    <p className="text-slate-500">
                      Sessions Completed
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-6">
                    <div className="text-3xl font-bold">
                      4.9
                    </div>

                    <p className="text-slate-500">
                      Rating
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-3xl bg-white p-10 shadow-sm">
            <h2 className="text-3xl font-bold">
              Reviews
            </h2>

            <div className="mt-8 space-y-6">
              <div className="rounded-2xl bg-slate-50 p-6">
                <p>
                  "Excellent mentor. Helped me prepare for
                  interviews and improve my resume."
                </p>

                <div className="mt-4 font-medium">
                  — Student
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-6">
                <p>
                  "Very practical guidance and actionable
                  career advice."
                </p>

                <div className="mt-4 font-medium">
                  — Professional
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}