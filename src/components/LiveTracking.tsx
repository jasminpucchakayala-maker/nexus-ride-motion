import { motion } from "framer-motion";
import { FaMapMarkedAlt, FaCar, FaLocationArrow } from "react-icons/fa";

export default function LiveTracking() {
  return (
    <section className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="glass rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground">
              Live GPS
            </span>
            <h2 className="mt-5 text-4xl font-bold md:text-5xl">
              See every ride <span className="text-gradient">in real time</span>
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Live vehicle positions, animated route lines and a nearby finder — all on a single beautiful map.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Stat label="Live vehicles" value="12,450" />
              <Stat label="Trips today" value="3,892" />
              <Stat label="Avg. ETA" value="4m 12s" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="neon-border glass relative h-[460px] overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0 grid-bg" />
            {/* fake map lines */}
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 460">
              <defs>
                <linearGradient id="lg" x1="0" x2="1">
                  <stop offset="0%" stopColor="#7aa8ff" />
                  <stop offset="100%" stopColor="#c77dff" />
                </linearGradient>
              </defs>
              <motion.path
                d="M40,400 C150,300 200,250 300,260 S500,140 560,60"
                stroke="url(#lg)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
              />
              <motion.path
                d="M80,80 C180,160 240,200 340,180 S520,360 580,420"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="1.5"
                strokeDasharray="6 8"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.4 }}
              />
            </svg>
            {/* pins */}
            {[
              { x: "20%", y: "78%", c: "var(--neon)", label: "Mumbai" },
              { x: "55%", y: "55%", c: "var(--neon-2)", label: "Bengaluru" },
              { x: "78%", y: "30%", c: "var(--neon)", label: "Delhi NCR" },
              { x: "40%", y: "20%", c: "var(--neon-2)", label: "Hyderabad" },
            ].map((p, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                style={{ left: p.x, top: p.y, color: `oklch(var(--${p.c}))` }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
              >
                <div className="relative flex flex-col items-center">
                  <div className="absolute inset-0 -z-10 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current opacity-30 blur-xl" />
                  <FaCar className="text-2xl text-[color:var(--neon)]" />
                  <span className="mt-1 rounded-full bg-black/40 px-2 py-0.5 text-[10px] uppercase tracking-wider text-white/80 backdrop-blur">{p.label}</span>
                </div>
              </motion.div>
            ))}
            <div className="absolute right-4 top-4 glass-strong rounded-2xl p-3 text-xs">
              <div className="flex items-center gap-2 text-muted-foreground"><FaLocationArrow /> Nearby</div>
              <div className="mt-1 font-semibold">8 vehicles · 1.2 km</div>
            </div>
            <div className="absolute bottom-4 left-4 flex items-center gap-2 glass-strong rounded-full px-3 py-2 text-xs">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[color:var(--neon)]" />
              Live tracking
            </div>
            <div className="absolute right-4 bottom-4 flex h-12 w-12 items-center justify-center rounded-full bg-[image:var(--gradient-primary)] text-white shadow-[var(--shadow-neon)]">
              <FaMapMarkedAlt />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass rounded-xl px-4 py-3">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="mt-1 text-lg font-bold text-gradient">{value}</div>
    </div>
  );
}
