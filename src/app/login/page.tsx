export default function LoginPage() {
return ( <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white flex items-center justify-center px-6"> <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"> <div className="text-center"> <h1 className="text-4xl font-bold">
Welcome Back </h1>


      <p className="mt-3 text-slate-400">
        Login to your FuturePath account
      </p>
    </div>

    <form className="mt-8 space-y-4">
      <input
        type="email"
        placeholder="Email Address"
        className="w-full rounded-xl bg-slate-900 p-4 outline-none"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full rounded-xl bg-slate-900 p-4 outline-none"
      />

      <button
        type="submit"
        className="w-full rounded-xl bg-blue-600 py-4 font-semibold transition hover:bg-blue-700"
      >
        Login
      </button>
    </form>

    <div className="mt-6 text-center text-sm text-slate-400">
      Don't have an account?
      <a
        href="/signup"
        className="ml-2 text-blue-400"
      >
        Sign Up
      </a>
    </div>
  </div>
</main>


);
}
