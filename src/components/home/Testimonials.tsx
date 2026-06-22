const testimonials = [
{
name: "Sarah Johnson",
role: "Software Engineer",
company: "Google",
quote:
"FuturePath helped me identify skill gaps, connect with mentors, and secure a role at a top technology company.",
},
{
name: "Michael Chen",
role: "Data Analyst",
company: "Microsoft",
quote:
"The personalized roadmap and mentorship sessions accelerated my career growth significantly.",
},
{
name: "Priya Sharma",
role: "Cybersecurity Analyst",
company: "Accenture",
quote:
"The practical mentor guidance gave me confidence and helped me clear multiple interview rounds.",
},
];

export default function Testimonials() {
return ( <section className="bg-slate-950 py-24"> <div className="mx-auto max-w-7xl px-6"> <div className="text-center"> <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
Success Stories </span>


      <h2 className="mt-6 text-5xl font-bold text-white">
        Real Career Transformations
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
        Thousands of professionals have accelerated
        their careers with mentorship and guidance.
      </p>
    </div>

    <div className="mt-20 grid gap-8 md:grid-cols-3">
      {testimonials.map((item) => (
        <div
          key={item.name}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40"
        >
          <div className="mb-6 text-4xl">
            ⭐⭐⭐⭐⭐
          </div>

          <p className="leading-8 text-slate-300">
            "{item.quote}"
          </p>

          <div className="mt-8 border-t border-white/10 pt-6">
            <h4 className="font-bold text-white">
              {item.name}
            </h4>

            <p className="text-sm text-slate-400">
              {item.role}
            </p>

            <p className="mt-1 text-sm text-blue-400">
              {item.company}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


);
}
