import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const mentors = [
{
id: "sarah",
name: "Sarah Johnson",
role: "Senior Software Engineer",
company: "Google",
experience: "8 Years",
rating: "4.9",
},
{
id: "michael",
name: "Michael Chen",
role: "Data Scientist",
company: "Microsoft",
experience: "7 Years",
rating: "4.8",
},
{
id: "priya",
name: "Priya Sharma",
role: "Cybersecurity Consultant",
company: "Accenture",
experience: "6 Years",
rating: "4.9",
},
];

export default function MentorsPage() {
return (
<> <Navbar />


  <main className="min-h-screen bg-slate-950 text-white">
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-center text-5xl font-bold">
        Our Mentors
      </h1>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {mentors.map((mentor) => (
          <div
            key={mentor.id}
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">
              {mentor.name.charAt(0)}
            </div>

            <h2 className="mt-4 text-2xl font-bold">
              {mentor.name}
            </h2>

            <p className="text-slate-400">
              {mentor.role}
            </p>

            <p className="text-blue-400">
              {mentor.company}
            </p>

            <p className="mt-4">
              ⭐ {mentor.rating}
            </p>

            <p>
              Experience: {mentor.experience}
            </p>

            <a
              href={`/mentors/${mentor.id}`}
              className="mt-6 block rounded-xl bg-blue-600 py-3 text-center font-semibold"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </section>
  </main>

  <Footer />
</>


);
}
