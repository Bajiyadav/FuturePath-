import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
try {
const body = await request.json();


const {
  mentorId,
  status,
} = body;

if (!mentorId || !status) {
  return NextResponse.json(
    {
      error: "mentorId and status are required",
    },
    { status: 400 }
  );
}

const mentor =
  await prisma.mentor.update({
    where: {
      id: mentorId,
    },
    data: {
      status,
    },
  });

return NextResponse.json({
  success: true,
  mentor,
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
