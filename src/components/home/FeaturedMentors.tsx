const mentors = [
{
id: "sarah",
name: "Sarah Johnson",
role: "Senior Software Engineer",
company: "Google",
rating: "4.9",
},
{
id: "michael",
name: "Michael Chen",
role: "Data Scientist",
company: "Microsoft",
rating: "4.8",
},
{
id: "priya",
name: "Priya Sharma",
role: "Cybersecurity Consultant",
company: "Accenture",
rating: "5.0",
},
];

export default function FeaturedMentors() {
return ( <section className="bg-slate-950 py-24"> <div className="mx-auto max-w-7xl px-6"> <div className="text-center"> <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
Expert Mentors </span>


      <h2 className="mt-6 text-5xl font-bold text-white">
        Learn From Industry Leaders
      </h2>

      <p className="mt-4 text-lg text-slate-400">
        Get direct guidance from professionals working at
        world-class companies.
      </p>
    </div>

    <div className="mt-20 grid gap-8 md:grid-cols-3">
      {mentors.map((mentor) => (
        <div
          key={mentor.id}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-blue-500/40"
        >
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-3xl font-bold text-white">
            {mentor.name.charAt(0)}
          </div>

          <h3 className="mt-6 text-2xl font-bold text-white">
            {mentor.name}
          </h3>

          <p className="mt-2 text-slate-400">
            {mentor.role}
          </p>

          <p className="text-blue-400">
            {mentor.company}
          </p>

          <div className="mt-4 text-yellow-400">
            ⭐ {mentor.rating}
          </div>

          <a
            href="/mentors/test"
            className="mt-8 block rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 text-center font-semibold text-white transition hover:scale-105"
          >
            View Profile
          </a>
        </div>
      ))}
    </div>
  </div>
</section>


);
}
