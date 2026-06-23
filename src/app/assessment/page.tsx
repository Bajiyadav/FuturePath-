"use client";

import { useState } from "react";

const questions = [
"Do you enjoy solving security-related problems?",
"Do you like working with data and analytics?",
"Do you enjoy building websites and applications?",
"Are you interested in cloud technologies?",
"Do you enjoy automation and scripting?",
];

export default function AssessmentPage() {
const [answers, setAnswers] = useState<number[]>(
Array(questions.length).fill(3)
);

const [loading, setLoading] =
useState(false);

async function handleSubmit() {
try {
setLoading(true);


  const response = await fetch(
    "/api/assessment",
    {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        answers,
      }),
    }
  );

  const data =
    await response.json();

  if (!response.ok) {
    alert(
      data.error ||
        "Assessment failed"
    );
    return;
  }

  await fetch(
    "/api/assessment/save",
    {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        studentId:
          "cmqq5qtfy000104l8043l150y",
        score: data.score,
        topDomain:
          data.topDomain,
      }),
    }
  );

  alert(
    `Assessment Completed!


Career Score: ${data.score}

Recommended Domain:
${data.topDomain}`
);
} catch (error) {
console.error(error);


  alert(
    "Something went wrong"
  );
} finally {
  setLoading(false);
}


}

return ( <main className="min-h-screen bg-slate-950 text-white p-8"> <div className="mx-auto max-w-4xl"> <h1 className="mb-4 text-5xl font-bold">
Career Assessment </h1>


    <p className="mb-10 text-slate-400">
      Complete this assessment to
      discover your ideal career
      path and generate a roadmap.
    </p>

    <div className="space-y-8">
      {questions.map(
        (question, index) => (
          <div
            key={index}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <p className="mb-4 text-xl">
              {question}
            </p>

            <div className="flex items-center gap-4">
              <span>1</span>

              <input
                type="range"
                min="1"
                max="5"
                value={
                  answers[index]
                }
                onChange={(e) => {
                  const updated =
                    [...answers];

                  updated[index] =
                    Number(
                      e.target
                        .value
                    );

                  setAnswers(
                    updated
                  );
                }}
                className="w-full"
              />

              <span>5</span>
            </div>

            <p className="mt-2 text-sm text-slate-400">
              Selected:{" "}
              {answers[index]}
            </p>
          </div>
        )
      )}

      <button
        onClick={
          handleSubmit
        }
        disabled={loading}
        className="w-full rounded-xl bg-blue-600 py-4 font-semibold hover:bg-blue-700 disabled:opacity-50"
      >
        {loading
          ? "Processing..."
          : "Submit Assessment"}
      </button>
    </div>
  </div>
</main>


);
}
