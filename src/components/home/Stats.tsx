export default function Stats() {
  const stats = [
    {
      value: "55,000+",
      label: "Industry Experts",
    },
    {
      value: "150+",
      label: "Career Domains",
    },
    {
      value: "25,000+",
      label: "Students Guided",
    },
    {
      value: "92%",
      label: "Success Rate",
    },
  ];

  return (
    <section className="border-y bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 text-center md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-extrabold">
                {stat.value}
              </div>

              <p className="mt-2 text-slate-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}