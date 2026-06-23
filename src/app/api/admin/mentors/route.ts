import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
const mentors =
await prisma.mentor.findMany({
include: {
user: true,
},
orderBy: {
createdAt: "desc",
},
});

return NextResponse.json(
mentors
);
}
