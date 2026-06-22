"use client";

import { useState } from "react";

export default function SignupPage() {
const [loading, setLoading] = useState(false);

const handleSubmit = async (
e: React.FormEvent<HTMLFormElement>
) => {
e.preventDefault();


setLoading(true);

const formData = new FormData(e.currentTarget);

const payload = {
  name: formData.get("name"),
  email: formData.get("email"),
  password: formData.get("password"),
  role: formData.get("role"),
};

const response = await fetch(
  "/api/auth/register",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }
);

const data = await response.json();

if (response.ok) {
  alert("Account created successfully!");
  
} else {
  alert(data.error || "Something went wrong");
}

setLoading(false);


};

return ( <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center"> <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8"> <h1 className="text-4xl font-bold text-center">
Create Account </h1>


    <p className="mt-3 text-center text-slate-400">
      Join FuturePath today
    </p>

    <form
      onSubmit={handleSubmit}
      className="mt-8 space-y-4"
    >
      <input
        name="name"
        type="text"
        placeholder="Full Name"
        required
        className="w-full rounded-xl bg-slate-900 p-3"
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="w-full rounded-xl bg-slate-900 p-3"
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        required
        className="w-full rounded-xl bg-slate-900 p-3"
      />

      <select
        name="role"
        className="w-full rounded-xl bg-slate-900 p-3"
      >
        <option value="STUDENT">
          STUDENT
        </option>

        <option value="MENTOR">
          MENTOR
        </option>
      </select>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-blue-600 py-3 font-semibold"
      >
        {loading
          ? "Creating Account..."
          : "Create Account"}
      </button>
    </form>
  </div>
</main>


);
}
