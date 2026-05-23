import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import { FaArrowRight, FaPlay, FaBolt } from "react-icons/fa";
import Car3D from "./Car3D";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const mv = useMotionValue(0);
  const display = useTransform(mv, (v) => Math.floor(v).toLocaleString() + suffix);
  useEffect(() => {
    const controls = { stop: () => {} };
    const start = performance.now();
    const dur = 1800;
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      mv.set(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => { cancelAnimationFrame(raf); controls.stop(); };
  }, [to, mv]);
  return <motion.span>{display}</motion.span>;
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden pt-32"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="absolute inset-0 grid-bg opacity-60" />
      {/* floating orbs */}
      <div className="pointer-events-none absolute -left-32 top-32 h-96 w-96 rounded-full bg-[color:var(--neon)] opacity-25 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-[color:var(--neon-2)] opacity-25 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-6 lg:grid-cols-[1.05fr_1fr]">
        <div className="relative z-10 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--neon)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--neon)]" />
            </span>
            <FaBolt className="text-[color:var(--neon)]" /> Now live in 24 Indian cities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-balance text-5xl font-bold leading-[1.05] md:text-7xl"
          >
            Drive the <span className="text-gradient">future</span>,<br />
            share the <span className="text-gradient">road.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            Voltride is India's next-generation automobile sharing platform. From Mumbai to Bengaluru — premium vehicles, instant booking, real-time GPS, UPI payments and AI recommendations — all in one cinematic app.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#showcase" className="btn-neon">Book a Ride <FaArrowRight /></a>
            <a href="#showcase" className="btn-ghost"><FaPlay /> Explore Vehicles</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-4"
          >
            {[
              { v: 50000, s: "+", label: "Active riders" },
              { v: 12000, s: "+", label: "Vehicles" },
              { v: 99, s: "%", label: "Uptime" },
            ].map((s) => (
              <div key={s.label} className="glass rounded-2xl px-4 py-3">
                <div className="text-2xl font-bold text-gradient">
                  <Counter to={s.v} suffix={s.s} />
                </div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 3D car */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[460px] md:h-[600px]"
        >
          <div className="absolute inset-0 -z-0 m-auto h-72 w-72 rounded-full bg-[image:var(--gradient-primary)] opacity-30 blur-[100px]" />
          <Car3D />
          <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-xs uppercase tracking-widest text-muted-foreground">
            Move your cursor · Live 3D
          </div>
        </motion.div>
      </div>
    </section>
  );
}
