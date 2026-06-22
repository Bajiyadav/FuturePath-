import { Brain, Users, Map, Trophy } from "lucide-react";

const steps = [
{
title: "AI Career Assessment",
description:
"Analyze skills, interests, strengths and career readiness with intelligent assessments.",
icon: Brain,
},
{
title: "Mentor Matching",
description:
"Get connected with experienced professionals from leading global companies.",
icon: Users,
},
{
title: "Personalized Roadmap",
description:
"Receive a structured learning plan, projects, certifications and milestones.",
icon: Map,
},
{
title: "Career Success",
description:
"Secure internships, promotions and high-paying opportunities faster.",
icon: Trophy,
},
];

export default function HowItWorks() {
return ( <section className="bg-slate-950 py-24"> <div className="mx-auto max-w-7xl px-6"> <div className="text-center"> <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
How It Works </span>


      <h2 className="mt-6 text-5xl font-bold text-white">
        Your Career Growth Framework
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
        A proven system designed to guide students and
        professionals from uncertainty to career success.
      </p>
    </div>

    <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => {
        const Icon = step.icon;

        return (
          <div
            key={step.title}
            className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-blue-500/40"
          >
            <div className="absolute right-6 top-6 text-5xl font-bold text-white/10">
              0{index + 1}
            </div>

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600">
              <Icon className="h-8 w-8 text-white" />
            </div>

            <h3 className="text-2xl font-bold text-white">
              {step.title}
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              {step.description}
            </p>
          </div>
        );
      })}
    </div>
  </div>
</section>


);
}
