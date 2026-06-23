import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
try {
const body = await request.json();


const {
  studentId,
  score,
  topDomain,
} = body;

if (
  !studentId ||
  score === undefined ||
  !topDomain
) {
  return NextResponse.json(
    {
      error: "Missing required fields",
    },
    { status: 400 }
  );
}

const assessment =
  await prisma.assessment.create({
    data: {
      studentId,
      type: "career-assessment",
      answers: {},
      result: {
        score,
        topDomain,
      },
      score,
      recommendedDomains: [
        topDomain,
      ],
    },
  });

await prisma.roadmap.create({
  data: {
    studentId,
    domain: topDomain,
    title: `${topDomain} Career Roadmap`,
    description:
      `Personalized roadmap for ${topDomain}`,
    milestones: [
      "Learn Fundamentals",
      "Complete Projects",
      "Earn Certifications",
      "Build Portfolio",
      "Apply for Internships",
    ],
    duration: "6 Months",
  },
});

return NextResponse.json({
  success: true,
  assessment,
});


} catch (error) {
console.error(error);


return NextResponse.json(
  {
    error:
      "Failed to save assessment",
  },
  { status: 500 }
);


}
}
