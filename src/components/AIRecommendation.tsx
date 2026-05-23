import { motion } from "framer-motion";
import { FaRobot, FaArrowRight } from "react-icons/fa";

const recs = [
  { name: "Tata Nexon EV", reason: "Matches your ₹2,500/day budget in Mumbai", tag: "EV · 5 seats", price: 1999 },
  { name: "Mahindra Thar Roxx", reason: "Loved by users on Bengaluru–Mysuru route", tag: "SUV · 4 seats", price: 4499 },
  { name: "Royal Enfield Classic 350", reason: "Great for solo weekend trips to Lonavala", tag: "Bike · Cruiser", price: 899 },
];

export default function AIRecommendation() {
  return (
    <section className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground">
            <FaRobot /> AI Assistant
          </span>
          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Your <span className="text-gradient">copilot</span> for every trip
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Recommendations powered by your preferences, history, route and budget.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {recs.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="neon-border glass-strong relative overflow-hidden rounded-2xl p-6"
            >
              <div className="absolute -top-12 right-0 h-32 w-32 rounded-full bg-[image:var(--gradient-primary)] opacity-25 blur-3xl" />
              <div className="flex items-center gap-2 text-xs text-[color:var(--neon)]">
                <FaRobot /> AI Pick #{i + 1}
              </div>
              <h3 className="mt-3 text-xl font-bold">{r.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{r.tag}</p>
              <p className="mt-4 text-sm">{r.reason}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-lg font-bold text-gradient">${r.price}/day</span>
                <button className="btn-ghost !py-2 text-xs">Book <FaArrowRight /></button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
