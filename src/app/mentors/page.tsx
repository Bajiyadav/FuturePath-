import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const mentors = [
  {
    name: "Sarah Johnson",
    role: "Senior Software Engineer",
    company: "Google",
    experience: "8 Years",
  },
  {
    name: "Michael Chen",
    role: "Data Scientist",
    company: "Microsoft",
    experience: "7 Years",
  },
  {
    name: "Priya Sharma",
    role: "Cybersecurity Consultant",
    company: "Accenture",
    experience: "6 Years",
  },
  {
    name: "David Lee",
    role: "Business Analyst",
    company: "Amazon",
    experience: "5 Years",
  },
  {
    name: "Emily Brown",
    role: "Product Manager",
    company: "Meta",
    experience: "9 Years",
  },
  {
    name: "Rahul Verma",
    role: "Cloud Architect",
    company: "IBM",
    experience: "10 Years",
  },
];

export default function MentorsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">
        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold">
              Meet Our Expert Mentors
            </h1>

            <p className="mt-4 text-lg text-slate-600">
              Learn directly from professionals working at
              top global companies.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {mentors.map((mentor) => (
              <div
                key={mentor.name}
                className="rounded-2xl bg-white p-8 shadow-sm"
              >
                <div className="mb-4 h-16 w-16 rounded-full bg-slate-200" />

                <h3 className="text-xl font-bold">
                  {mentor.name}
                </h3>

                <p className="mt-2 text-slate-600">
                  {mentor.role}
                </p>

                <p className="text-sm text-slate-500">
                  {mentor.company}
                </p>

                <p className="mt-4 text-sm font-medium">
                  Experience: {mentor.experience}
                </p>

                <button className="mt-6 w-full rounded-xl bg-black py-3 text-white">
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}