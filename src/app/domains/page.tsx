import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const domains = [
{
title: "Cybersecurity",
salary: "₹6L - ₹35L+",
description: "SOC Analyst, Threat Hunting, Detection Engineering, Security Operations.",
},
{
title: "Software Development",
salary: "₹5L - ₹50L+",
description: "Frontend, Backend, Full Stack, Mobile & Cloud Engineering.",
},
{
title: "Data Analytics",
salary: "₹5L - ₹25L+",
description: "Business Intelligence, SQL, Reporting & Visualization.",
},
{
title: "Artificial Intelligence",
salary: "₹8L - ₹60L+",
description: "Machine Learning, LLMs, GenAI, Deep Learning & MLOps.",
},
{
title: "Business Analysis",
salary: "₹5L - ₹30L+",
description: "Requirements Gathering, Agile, Product Strategy.",
},
{
title: "Cloud Computing",
salary: "₹6L - ₹40L+",
description: "AWS, Azure, GCP, DevOps and Infrastructure.",
},
{
title: "Data Engineering",
salary: "₹7L - ₹40L+",
description: "ETL Pipelines, Data Warehouses and Big Data Systems.",
},
{
title: "Product Management",
salary: "₹8L - ₹50L+",
description: "Product Strategy, Growth, Roadmaps and Leadership.",
},
{
title: "Food Technology",
salary: "₹4L - ₹20L+",
description: "Food Production, R&D, Quality Control and Innovation.",
},
{
title: "Food Safety",
salary: "₹4L - ₹18L+",
description: "HACCP, ISO 22000, Auditing and Compliance.",
},
{
title: "Industrial Automation",
salary: "₹5L - ₹30L+",
description: "PLC, SCADA, Industrial IoT and Smart Manufacturing.",
},
{
title: "Robotics Engineering",
salary: "₹6L - ₹40L+",
description: "Automation Systems, Robotics and AI Integration.",
},
];

export default function DomainsPage() {
return (
<> <Navbar />


  <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-center">
        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
          Career Intelligence Platform
        </span>

        <h1 className="mt-8 text-6xl font-bold">
          Explore Career Domains
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
          Discover high-growth industries, salary ranges,
          required skills, learning paths and mentors.
        </p>
      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {domains.map((domain) => (
          <div
            key={domain.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-white/10"
          >
            <h2 className="text-2xl font-bold">
              {domain.title}
            </h2>

            <div className="mt-4 text-3xl font-bold text-green-400">
              {domain.salary}
            </div>

            <p className="mt-4 text-slate-400">
              {domain.description}
            </p>

            <button className="mt-8 w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 font-semibold transition hover:scale-105">
              Explore Domain
            </button>
          </div>
        ))}
      </div>
    </section>
  </main>

  <Footer />
</>


);
}
