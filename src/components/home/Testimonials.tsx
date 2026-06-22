const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Engineer",
    company: "Google",
    quote:
      "FuturePath helped me identify skill gaps, connect with mentors, and land my dream role.",
  },
  {
    name: "Michael Chen",
    role: "Data Analyst",
    company: "Microsoft",
    quote:
      "The roadmap and mentorship sessions completely changed my career trajectory.",
  },
  {
    name: "Priya Sharma",
    role: "Cybersecurity Analyst",
    company: "Accenture",
    quote:
      "The mentor guidance was practical, actionable, and directly helped me secure interviews.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Success Stories From Our Community
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Thousands of students and professionals have accelerated
            their careers through FuturePath.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <p className="text-slate-600 leading-relaxed">
                "{item.quote}"
              </p>

              <div className="mt-6">
                <h4 className="font-bold">
                  {item.name}
                </h4>

                <p className="text-sm text-slate-500">
                  {item.role} · {item.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}