"use client";

import { useState } from "react";

export default function LoginPage() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);

async function handleSubmit(
e: React.FormEvent<HTMLFormElement>
) {
e.preventDefault();


setLoading(true);

const response = await fetch(
  "/api/auth/login",
  {
    method: "POST",
    headers: {
      "Content-Type":
        "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }
);

const data = await response.json();

setLoading(false);

if (response.ok) {
  alert(
    `Login Success! Role: ${data.user.role}`
  );
} else {
  alert(
    data.error || "Login failed"
  );
}


}

return ( <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white flex items-center justify-center px-6"> <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"> <div className="text-center"> <h1 className="text-4xl font-bold">
Welcome Back </h1>


      <p className="mt-3 text-slate-400">
        Login to your FuturePath account
      </p>
    </div>

    <form
      onSubmit={handleSubmit}
      className="mt-8 space-y-4"
    >
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
        className="w-full rounded-xl bg-slate-900 p-4"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
        className="w-full rounded-xl bg-slate-900 p-4"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-blue-600 py-4 font-semibold"
      >
        {loading
          ? "Logging In..."
          : "Login"}
      </button>
    </form>
  </div>
</main>


);
}
