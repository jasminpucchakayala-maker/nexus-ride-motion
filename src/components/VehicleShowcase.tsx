import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Car3D from "./Car3D";

const vehicles = [
  { id: "tata", name: "Tata Nexon EV Max", category: "Electric SUV", price: 249, range: "453 km", speed: "0-100 / 8.9s", color: "#7aa8ff" },
  { id: "bike", name: "Royal Enfield Classic 350", category: "Cruiser Bike", price: 89, range: "350 km", speed: "0-60 / 5.2s", color: "#c77dff" },
  { id: "scoot", name: "Ather 450X EV Scooter", category: "EV Scooter", price: 49, range: "146 km", speed: "Top 90 km/h", color: "#5ce1e6" },
  { id: "lambo", name: "Mahindra Thar Roxx", category: "Luxury SUV", price: 599, range: "520 km", speed: "0-100 / 9.0s", color: "#ff7a59" },
];

const swatches = ["#7aa8ff", "#c77dff", "#5ce1e6", "#ff7a59", "#a3ff8c", "#ffffff"];

export default function VehicleShowcase() {
  const [active, setActive] = useState(0);
  const [color, setColor] = useState(vehicles[0].color);
  const v = vehicles[active];

  return (
    <section id="showcase" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="glass rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground">
            3D Showroom
          </span>
          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Step into the <span className="text-gradient">showroom</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Explore vehicles in stunning 3D. Rotate, recolor, and inspect the specs.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* 3D viewer */}
          <div className="neon-border glass relative h-[460px] overflow-hidden rounded-3xl md:h-[560px]">
            <div className="absolute inset-0 grid-bg opacity-50" />
            <Car3D color={color} />
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full glass-strong px-3 py-2">
              {swatches.map((s) => (
                <button
                  key={s}
                  onClick={() => setColor(s)}
                  className="h-6 w-6 rounded-full border border-white/30 transition-transform hover:scale-110"
                  style={{ background: s, boxShadow: color === s ? `0 0 0 2px ${s}` : "none" }}
                  aria-label={`color ${s}`}
                />
              ))}
            </div>
          </div>

          {/* Specs panel */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-3">
              {vehicles.map((veh, i) => (
                <button
                  key={veh.id}
                  onClick={() => { setActive(i); setColor(veh.color); }}
                  className={`glass rounded-2xl p-4 text-left transition-all ${
                    i === active ? "neon-border ring-1 ring-[color:var(--neon)]" : "hover:bg-white/5"
                  }`}
                >
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{veh.category}</div>
                  <div className="mt-1 font-semibold">{veh.name}</div>
                  <div className="mt-2 text-sm text-[color:var(--neon)]">₹{veh.price}/hr</div>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="glass-strong rounded-3xl p-6"
              >
                <h3 className="text-2xl font-bold">{v.name}</h3>
                <p className="text-sm text-muted-foreground">{v.category}</p>
                <div className="mt-5 grid grid-cols-3 gap-4">
                  <Spec label="Price" value={`₹${v.price}/hr`} />
                  <Spec label="Range" value={v.range} />
                  <Spec label="Performance" value={v.speed} />
                </div>
                <button className="btn-neon mt-6 w-full justify-center">Reserve Now</button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass rounded-xl p-3">
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-1 text-sm font-semibold">{value}</div>
    </div>
  );
}
