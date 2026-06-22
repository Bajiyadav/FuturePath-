import Link from "next/link";
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
description: "SOC, Threat Hunting, Detection Engineering",
salary: "₹6L - ₹35L+",
icon: Shield,
},
{
title: "Software Development",
description: "Frontend, Backend, Full Stack Engineering",
salary: "₹5L - ₹50L+",
icon: Code,
},
{
title: "Data Analytics",
description: "BI, SQL, Reporting & Visualization",
salary: "₹5L - ₹25L+",
icon: BarChart3,
},
{
title: "Artificial Intelligence",
description: "ML, GenAI, LLMs, MLOps",
salary: "₹8L - ₹60L+",
icon: Brain,
},
{
title: "Business Analysis",
description: "Requirements, Agile, Product Thinking",
salary: "₹5L - ₹30L+",
icon: Briefcase,
},
{
title: "Data Engineering",
description: "Pipelines, Warehousing, Big Data",
salary: "₹7L - ₹40L+",
icon: Database,
},
];

export default function DomainGrid() {
return ( <section className="bg-slate-950 py-24"> <div className="mx-auto max-w-7xl px-6"> <div className="text-center"> <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
Career Opportunities </span>


      <h2 className="mt-6 text-5xl font-bold text-white">
        Explore High Growth Domains
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
        Discover career paths, salary potential,
        learning roadmaps and expert mentors.
      </p>
    </div>

    <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {domains.map((domain) => {
        const Icon = domain.icon;

        return (
          <div
            key={domain.title}
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-blue-500/40"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600">
              <Icon className="h-8 w-8 text-white" />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-white">
              {domain.title}
            </h3>

            <p className="mt-3 text-slate-400">
              {domain.description}
            </p>

            <div className="mt-5 rounded-xl bg-white/5 px-4 py-3">
              <p className="text-sm text-slate-400">
                Average Salary Range
              </p>

              <p className="mt-1 font-semibold text-green-400">
                {domain.salary}
              </p>
            </div>

            <Link
              href="/domains"
              className="mt-8 inline-block rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 font-semibold text-white transition hover:scale-105"
            >
              Explore Domain
            </Link>
          </div>
        );
      })}
    </div>
  </div>
</section>


);
}
