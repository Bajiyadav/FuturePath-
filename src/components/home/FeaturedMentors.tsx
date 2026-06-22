const mentors = [
  {
    name: "Sarah Johnson",
    role: "Senior Software Engineer",
    company: "Google",
  },
  {
    name: "Michael Chen",
    role: "Data Scientist",
    company: "Microsoft",
  },
  {
    name: "Priya Sharma",
    role: "Cybersecurity Consultant",
    company: "Accenture",
  },
];

export default function FeaturedMentors() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Featured Mentors
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Learn from professionals at top companies.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {mentors.map((mentor) => (
            <div
              key={mentor.name}
              className="rounded-2xl bg-white p-8 shadow-sm"
            >
              <div className="mb-4 h-20 w-20 rounded-full bg-slate-200" />

              <h3 className="text-xl font-bold">
                {mentor.name}
              </h3>

              <p className="mt-2 text-slate-600">
                {mentor.role}
              </p>

              <p className="text-sm text-slate-500">
                {mentor.company}
              </p>

              <button className="mt-6 w-full rounded-xl bg-black py-3 text-white">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}