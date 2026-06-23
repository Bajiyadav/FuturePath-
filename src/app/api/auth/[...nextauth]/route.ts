import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Authentication coming in Phase 2",
  });
}

export async function POST() {
  return NextResponse.json({
    message: "Authentication coming in Phase 2",
  });
}