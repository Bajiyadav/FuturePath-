export default function TrustedCompanies() {
const companies = [
"Google",
"Microsoft",
"Amazon",
"Meta",
"Netflix",
"IBM",
"Accenture",
"Adobe",
];

return ( <section className="bg-slate-950 py-20"> <div className="mx-auto max-w-7xl px-6"> <div className="text-center"> <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
Trusted By Industry Leaders </span>


      <h2 className="mt-6 text-4xl font-bold text-white">
        Learn From Professionals At
      </h2>

      <p className="mt-4 text-slate-400">
        Access mentors from the world's most respected companies.
      </p>
    </div>

    <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-8">
      {companies.map((company) => (
        <div
          key={company}
          className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40"
        >
          {company}
        </div>
      ))}
    </div>
  </div>
</section>


);
}
