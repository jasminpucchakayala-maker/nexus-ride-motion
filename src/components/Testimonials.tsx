import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const reviews = [
  { name: "Aarav Mehta", role: "Frequent Traveller", avatar: "https://i.pravatar.cc/100?img=12", text: "Voltride changed how I move around the city. The 3D booking flow alone is worth it.", stars: 5 },
  { name: "Sofía García", role: "Designer", avatar: "https://i.pravatar.cc/100?img=47", text: "Beautiful UI, fast bookings, premium cars. It feels like the future of mobility.", stars: 5 },
  { name: "Liam Chen", role: "Founder", avatar: "https://i.pravatar.cc/100?img=33", text: "The AI recommendations actually nail what I want every single time. Insane.", stars: 5 },
  { name: "Maya Patel", role: "Photographer", avatar: "https://i.pravatar.cc/100?img=5", text: "Finally a sharing app that respects design. The whole experience is cinematic.", stars: 5 },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="glass rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground">
            Loved by riders
          </span>
          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            People are <span className="text-gradient">obsessed</span>
          </h2>
        </div>

        <div className="relative mt-14 overflow-hidden">
          <motion.div
            className="flex gap-5"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...reviews, ...reviews].map((r, i) => (
              <div key={i} className="neon-border glass-strong w-[340px] shrink-0 rounded-2xl p-6">
                <FaQuoteLeft className="text-[color:var(--neon)]" />
                <p className="mt-4 text-sm leading-relaxed">{r.text}</p>
                <div className="mt-5 flex items-center gap-3">
                  <img src={r.avatar} alt={r.name} className="h-10 w-10 rounded-full border border-white/20" />
                  <div>
                    <div className="text-sm font-semibold">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.role}</div>
                  </div>
                  <div className="ml-auto flex text-xs text-[color:var(--neon)]">
                    {Array.from({ length: r.stars }).map((_, j) => <FaStar key={j} />)}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
