import { NextResponse } from "next/server";

export async function POST(request: Request) {
try {
const body = await request.json();


const { answers } = body;

const totalScore = answers.reduce(
  (sum: number, value: number) =>
    sum + value,
  0
);

let topDomain =
  "Web Development";

if (totalScore >= 22) {
  topDomain =
    "Cybersecurity";
} else if (
  totalScore >= 18
) {
  topDomain =
    "Cloud Computing";
} else if (
  totalScore >= 14
) {
  topDomain =
    "Data Science";
}

return NextResponse.json({
  success: true,
  score: totalScore,
  topDomain,
});


} catch (error) {
console.error(error);


return NextResponse.json(
  {
    error:
      "Assessment failed",
  },
  { status: 500 }
);


}
}
