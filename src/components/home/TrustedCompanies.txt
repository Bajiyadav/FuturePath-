export default function TrustedCompanies() {
  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Meta",
    "IBM",
    "Accenture",
  ];

  return (
    <section className="border-y bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-slate-500">
          Mentors from leading companies
        </p>

        <div className="mt-8 grid grid-cols-2 gap-6 text-center md:grid-cols-6">
          {companies.map((company) => (
            <div
              key={company}
              className="rounded-xl border bg-slate-50 p-4 font-semibold"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}