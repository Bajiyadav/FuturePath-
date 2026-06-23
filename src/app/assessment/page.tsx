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

async function handleSubmit() {
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


const data = await response.json();

if (response.ok) {
  alert(
    `Top Domain: ${data.topDomain}`
  );
} else {
  alert(
    data.error ||
      "Assessment failed"
  );
}


}

return ( <main className="min-h-screen bg-slate-950 text-white p-8"> <div className="mx-auto max-w-4xl"> <h1 className="mb-8 text-5xl font-bold">
Career Assessment </h1>


    <div className="space-y-8">
      {questions.map(
        (question, index) => (
          <div
            key={index}
            className="rounded-3xl bg-white/5 p-6"
          >
            <p className="mb-4 text-xl">
              {question}
            </p>

            <input
              type="range"
              min="1"
              max="5"
              value={
                answers[index]
              }
              onChange={(e) => {
                const copy = [
                  ...answers,
                ];

                copy[index] =
                  Number(
                    e.target.value
                  );

                setAnswers(
                  copy
                );
              }}
              className="w-full"
            />
          </div>
        )
      )}

      <button
        onClick={
          handleSubmit
        }
        className="w-full rounded-xl bg-blue-600 py-4 font-semibold"
      >
        Submit Assessment
      </button>
    </div>
  </div>
</main>


);
}
