import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      studentId,
      mentorId,
      scheduledAt,
      notes,
    } = body;

    if (
      !studentId ||
      !mentorId ||
      !scheduledAt
    ) {
      return NextResponse.json(
        {
          error:
            "studentId, mentorId and scheduledAt are required",
        },
        { status: 400 }
      );
    }

    const booking =
      await prisma.booking.create({
        data: {
          studentId,
          mentorId,
          scheduledAt: new Date(
            scheduledAt
          ),
          notes,
          status: "PENDING",
        },
      });

    return NextResponse.json({
      success: true,
      booking,
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

export async function GET() {
  try {
    const bookings =
      await prisma.booking.findMany({
        include: {
          student: true,
          mentor: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });

    return NextResponse.json(
      bookings
    );
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