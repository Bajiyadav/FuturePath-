import { NextResponse } from "next/server";

export async function GET() {
return NextResponse.json({
message: "Auth route working",
});
}

export async function POST() {
return NextResponse.json({
message: "Auth route working",
});
}
