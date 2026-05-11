import { motion } from "framer-motion";
import { FaSearch, FaMapPin, FaFilter, FaBolt, FaStar } from "react-icons/fa";
import { useState } from "react";

export default function SearchFilter() {
  const [evOnly, setEvOnly] = useState(false);
  return (
    <section className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="glass rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground">
            Smart Search
          </span>
          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Find your ride <span className="text-gradient">in seconds</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="neon-border glass-strong mt-12 rounded-3xl p-6 md:p-8"
        >
          <div className="grid gap-3 md:grid-cols-[2fr_1fr_1fr_auto]">
            <div className="glass flex items-center gap-3 rounded-xl px-4 py-3">
              <FaMapPin className="text-[color:var(--neon)]" />
              <input className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground" placeholder="Pickup location" />
            </div>
            <select className="glass appearance-none rounded-xl px-4 py-3 text-sm outline-none">
              <option>Any vehicle</option><option>Car</option><option>Bike</option><option>EV Scooter</option><option>Luxury</option>
            </select>
            <select className="glass appearance-none rounded-xl px-4 py-3 text-sm outline-none">
              <option>Any price</option><option>$0 — $30</option><option>$30 — $80</option><option>$80+</option>
            </select>
            <button className="btn-neon justify-center"><FaSearch /> Search</button>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2 text-sm">
            <span className="flex items-center gap-1 text-muted-foreground"><FaFilter /> Filters:</span>
            <Chip>Petrol</Chip><Chip>Diesel</Chip><Chip>Hybrid</Chip>
            <button
              onClick={() => setEvOnly(!evOnly)}
              className={`flex items-center gap-1 rounded-full border px-3 py-1.5 text-xs transition-all ${
                evOnly ? "border-[color:var(--neon)] bg-[color:var(--neon)]/10 text-[color:var(--neon)]" : "border-white/15 text-muted-foreground hover:bg-white/5"
              }`}
            >
              <FaBolt /> EV only
            </button>
            <Chip><FaStar className="inline" /> 4.5+</Chip>
            <Chip>Available now</Chip>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <button className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-muted-foreground transition-all hover:border-[color:var(--neon)]/60 hover:text-foreground">
      {children}
    </button>
  );
}
