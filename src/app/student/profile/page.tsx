"use client";

import { useState } from "react";

export default function StudentProfilePage() {
const [institution, setInstitution] =
useState("");

const [degree, setDegree] =
useState("");

const [currentYear, setCurrentYear] =
useState("");

const [skills, setSkills] =
useState("");

const [careerGoal, setCareerGoal] =
useState("");

const [linkedinUrl, setLinkedinUrl] =
useState("");

const [githubUrl, setGithubUrl] =
useState("");

const [loading, setLoading] =
useState(false);

async function handleSubmit(
e: React.FormEvent<HTMLFormElement>
) {
e.preventDefault();


setLoading(true);

const response = await fetch(
  "/api/student/profile",
  {
    method: "POST",
    headers: {
      "Content-Type":
        "application/json",
    },
    body: JSON.stringify({
      studentId:
        "cmqq5qtfy000104l8043l150y",

      institution,
      degree,
      currentYear,

      skills: skills
        .split(",")
        .map((skill) =>
          skill.trim()
        ),

      careerGoal,
      linkedinUrl,
      githubUrl,
    }),
  }
);

const data =
  await response.json();

setLoading(false);

if (response.ok) {
  alert(
    "Profile Saved Successfully"
  );
} else {
  alert(
    data.error ||
      "Failed to save profile"
  );
}


}

return ( <main className="min-h-screen bg-slate-950 text-white"> <div className="mx-auto max-w-4xl p-8"> <h1 className="mb-8 text-5xl font-bold">
Student Profile </h1>


    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8"
    >
      <input
        type="text"
        placeholder="Institution"
        value={institution}
        onChange={(e) =>
          setInstitution(
            e.target.value
          )
        }
        className="w-full rounded-xl bg-slate-900 p-4"
      />

      <input
        type="text"
        placeholder="Degree"
        value={degree}
        onChange={(e) =>
          setDegree(
            e.target.value
          )
        }
        className="w-full rounded-xl bg-slate-900 p-4"
      />

      <input
        type="text"
        placeholder="Current Year"
        value={currentYear}
        onChange={(e) =>
          setCurrentYear(
            e.target.value
          )
        }
        className="w-full rounded-xl bg-slate-900 p-4"
      />

      <input
        type="text"
        placeholder="Skills (comma separated)"
        value={skills}
        onChange={(e) =>
          setSkills(
            e.target.value
          )
        }
        className="w-full rounded-xl bg-slate-900 p-4"
      />

      <input
        type="text"
        placeholder="Career Goal"
        value={careerGoal}
        onChange={(e) =>
          setCareerGoal(
            e.target.value
          )
        }
        className="w-full rounded-xl bg-slate-900 p-4"
      />

      <input
        type="url"
        placeholder="LinkedIn URL"
        value={linkedinUrl}
        onChange={(e) =>
          setLinkedinUrl(
            e.target.value
          )
        }
        className="w-full rounded-xl bg-slate-900 p-4"
      />

      <input
        type="url"
        placeholder="GitHub URL"
        value={githubUrl}
        onChange={(e) =>
          setGithubUrl(
            e.target.value
          )
        }
        className="w-full rounded-xl bg-slate-900 p-4"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-blue-600 py-4 font-semibold"
      >
        {loading
          ? "Saving..."
          : "Save Profile"}
      </button>
    </form>
  </div>
</main>


);
}
