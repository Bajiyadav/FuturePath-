export default function Stats() {
const stats = [
{
value: "55K+",
label: "Industry Experts",
description: "Global mentor network",
},
{
value: "150+",
label: "Career Domains",
description: "Technology & business",
},
{
value: "25K+",
label: "Students Guided",
description: "Successful career journeys",
},
{
value: "92%",
label: "Success Rate",
description: "Career transformation",
},
];

return ( <section className="bg-slate-950 py-24"> <div className="mx-auto max-w-7xl px-6"> <div className="mb-16 text-center"> <h2 className="text-4xl font-bold text-white">
Trusted By Thousands </h2>


      <p className="mt-4 text-slate-400">
        Helping students and professionals unlock
        career opportunities worldwide.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40"
        >
          <div className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-5xl font-extrabold text-transparent">
            {stat.value}
          </div>

          <h3 className="mt-4 text-xl font-semibold text-white">
            {stat.label}
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            {stat.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


);
}
