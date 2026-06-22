import {
  Shield,
  Code,
  BarChart3,
  Brain,
  Briefcase,
  Database,
} from "lucide-react";

const domains = [
  {
    title: "Cybersecurity",
    description:
      "SOC Analyst, Threat Hunting, Detection Engineering, Security Operations.",
    icon: Shield,
  },
  {
    title: "Software Development",
    description:
      "Frontend, Backend, Full Stack, Cloud Native Engineering.",
    icon: Code,
  },
  {
    title: "Data Analytics",
    description:
      "Business Intelligence, Data Visualization, SQL, Analytics.",
    icon: BarChart3,
  },
  {
    title: "Artificial Intelligence",
    description:
      "Machine Learning, LLMs, Generative AI, MLOps.",
    icon: Brain,
  },
  {
    title: "Business Analysis",
    description:
      "Requirements Gathering, Product Strategy, Stakeholder Management.",
    icon: Briefcase,
  },
  {
    title: "Data Engineering",
    description:
      "ETL Pipelines, Warehousing, Big Data Systems.",
    icon: Database,
  },
];

export default function DomainGrid() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Explore Career Domains
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Discover the most in-demand career paths and connect
            with experts who have already succeeded in them.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {domains.map((domain) => {
            const Icon = domain.icon;

            return (
              <div
                key={domain.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="text-xl font-bold">
                  {domain.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {domain.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}