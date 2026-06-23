import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
try {
const body = await request.json();


const {
  studentId,
  institution,
  degree,
  currentYear,
  skills,
  careerGoal,
  linkedinUrl,
  githubUrl,
} = body;

if (!studentId) {
  return NextResponse.json(
    {
      error: "studentId is required",
    },
    { status: 400 }
  );
}

const student =
  await prisma.student.update({
    where: {
      id: studentId,
    },
    data: {
      institution,
      degree,
      currentYear,
      skills,
      careerGoal,
      linkedinUrl,
      githubUrl,
    },
  });

return NextResponse.json({
  success: true,
  student,
});


} catch (error) {
console.error(error);


return NextResponse.json(
  {
    error: "Internal Server Error",
  },
  { status: 500 }
);


}
}
