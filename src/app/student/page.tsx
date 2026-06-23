import { prisma } from "@/lib/prisma";

export default async function StudentDashboard() {
const student =
await prisma.student.findFirst();

const assessments =
await prisma.assessment.findMany({
orderBy: {
createdAt: "desc",
},
});

const roadmaps =
await prisma.roadmap.findMany({
orderBy: {
createdAt: "desc",
},
});

const latestAssessment =
assessments[0];

const latestRoadmap =
roadmaps[0];

return ( <main className="min-h-screen bg-slate-950 text-white"> <div className="mx-auto max-w-7xl p-8"> <div className="mb-10"> <h1 className="text-5xl font-bold">
Welcome Back 👋 </h1>


      <p className="mt-3 text-slate-400">
        Track your profile,
        assessments and roadmap.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-4">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <p className="text-slate-400">
          Career Score
        </p>

        <h2 className="mt-2 text-4xl font-bold">
          {latestAssessment?.score ??
            0}
        </h2>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <p className="text-slate-400">
          Assessments
        </p>

        <h2 className="mt-2 text-4xl font-bold">
          {assessments.length}
        </h2>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <p className="text-slate-400">
          Roadmaps
        </p>

        <h2 className="mt-2 text-4xl font-bold">
          {roadmaps.length}
        </h2>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <p className="text-slate-400">
          Skills
        </p>

        <h2 className="mt-2 text-4xl font-bold">
          {student?.skills
            ?.length || 0}
        </h2>
      </div>
    </div>

    <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8">
      <h2 className="text-2xl font-bold">
        Latest Recommended Domain
      </h2>

      <p className="mt-4 text-xl">
        {latestAssessment
          ?.recommendedDomains?.[0] ||
          "Not Available"}
      </p>
    </div>

    <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8">
      <h2 className="text-2xl font-bold">
        Active Roadmap
      </h2>

      <div className="mt-4">
        <p>
          {latestRoadmap?.title ||
            "No Roadmap Generated"}
        </p>

        <p className="mt-2 text-slate-400">
          {latestRoadmap?.description ||
            ""}
        </p>
      </div>
    </div>

    <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8">
      <h2 className="text-2xl font-bold">
        Profile Summary
      </h2>

      <div className="mt-6 space-y-3">
        <p>
          Institution:{" "}
          {student?.institution ||
            "Not Set"}
        </p>

        <p>
          Degree:{" "}
          {student?.degree ||
            "Not Set"}
        </p>

        <p>
          Career Goal:{" "}
          {student?.careerGoal ||
            "Not Set"}
        </p>

        <p>
          LinkedIn:{" "}
          {student?.linkedinUrl ||
            "Not Set"}
        </p>

        <p>
          GitHub:{" "}
          {student?.githubUrl ||
            "Not Set"}
        </p>
      </div>
    </div>
  </div>
</main>


);
}
