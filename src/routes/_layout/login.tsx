import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FaGoogle, FaApple, FaGithub, FaBolt } from "react-icons/fa";

export const Route = createFileRoute("/_layout/login")({
  head: () => ({
    meta: [
      { title: "Sign in — Voltride" },
      { name: "description", content: "Sign in to your Voltride account to book rides and manage your fleet." },
    ],
  }),
  component: Login,
});

function Login() {
  return (
    <div className="relative min-h-screen overflow-hidden pt-24" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-10 px-6 lg:grid-cols-2">
        {/* Left visual */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative hidden lg:block"
        >
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[color:var(--neon)] opacity-30 blur-[100px]" />
          <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-[color:var(--neon-2)] opacity-30 blur-[100px]" />
          <h1 className="text-5xl font-bold leading-tight">
            Welcome back to <br /><span className="text-gradient">Voltride</span>
          </h1>
          <p className="mt-5 max-w-md text-muted-foreground">
            Continue where you left off — your trips, your fleet, your dashboard.
          </p>
          <div className="mt-10 grid max-w-sm grid-cols-2 gap-3">
            {[
              { v: "12k+", l: "Vehicles" },
              { v: "50k+", l: "Riders" },
              { v: "24", l: "Cities" },
              { v: "99%", l: "Uptime" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl p-4">
                <div className="text-xl font-bold text-gradient">{s.v}</div>
                <div className="text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="neon-border glass-strong mx-auto w-full max-w-md rounded-3xl p-8"
        >
          <div className="flex items-center gap-2 text-xs text-[color:var(--neon)]">
            <FaBolt /> SECURE LOGIN
          </div>
          <h2 className="mt-2 text-3xl font-bold">Sign in</h2>
          <p className="mt-1 text-sm text-muted-foreground">Use your email or a social account.</p>

          <form className="mt-6 space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input className="input" type="email" placeholder="Email" />
            <input className="input" type="password" placeholder="Password" />
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-muted-foreground">
                <input type="checkbox" className="accent-[color:var(--neon)]" /> Remember me
              </label>
              <a href="#" className="text-[color:var(--neon)]">Forgot password?</a>
            </div>
            <button className="btn-neon mt-2 w-full justify-center">Sign in</button>
          </form>

          <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
            <div className="h-px flex-1 bg-white/10" /> OR <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <SocialBtn icon={<FaGoogle />} label="Google" />
            <SocialBtn icon={<FaApple />} label="Apple" />
            <SocialBtn icon={<FaGithub />} label="GitHub" />
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            New here? <Link to="/login" className="text-[color:var(--neon)]">Create account</Link>
          </p>
        </motion.div>
      </div>
      <style>{`.input{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:.75rem;padding:.85rem 1rem;font-size:.9rem;outline:none;width:100%;color:inherit}.input:focus{border-color:oklch(.78 .2 230)}`}</style>
    </div>
  );
}

function SocialBtn({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="glass flex items-center justify-center gap-2 rounded-xl py-3 text-sm transition-all hover:bg-white/10">
      {icon}<span className="hidden sm:inline">{label}</span>
    </button>
  );
}
