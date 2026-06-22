import { Brain, Users, Map, Trophy } from "lucide-react";

const steps = [
  {
    title: "Take Assessment",
    description:
      "Complete AI-powered personality, skills, and career readiness assessments.",
    icon: Brain,
  },
  {
    title: "Get Mentor Match",
    description:
      "Connect with experienced industry professionals aligned with your goals.",
    icon: Users,
  },
  {
    title: "Receive Career Roadmap",
    description:
      "Get a structured roadmap with milestones, projects, and certifications.",
    icon: Map,
  },
  {
    title: "Achieve Career Success",
    description:
      "Land internships, jobs, promotions, and long-term career growth.",
    icon: Trophy,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            How FuturePath Works
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            A simple step-by-step system designed to accelerate your career.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="rounded-2xl bg-white p-8 shadow-sm"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100">
                    <Icon className="h-7 w-7" />
                  </div>

                  <span className="text-3xl font-bold text-slate-200">
                    {index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 text-slate-600">
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