import { motion } from "framer-motion";
import {
  FaCar, FaMapMarkedAlt, FaCalendarCheck, FaRobot, FaRoute,
  FaShieldAlt, FaBolt, FaSatelliteDish, FaUserCheck, FaChartLine,
} from "react-icons/fa";
import type { ReactNode } from "react";

const features: { icon: ReactNode; title: string; desc: string }[] = [
  { icon: <FaCar />, title: "Vehicle Sharing", desc: "Peer-to-peer access to thousands of vetted vehicles." },
  { icon: <FaMapMarkedAlt />, title: "Real-Time Tracking", desc: "Live telemetry and trip status, second by second." },
  { icon: <FaCalendarCheck />, title: "Online Booking", desc: "Reserve in 10 seconds with instant confirmation." },
  { icon: <FaRobot />, title: "AI Recommendations", desc: "Smart matches based on budget, route and history." },
  { icon: <FaRoute />, title: "GPS Navigation", desc: "Built-in routing with traffic-aware ETAs." },
  { icon: <FaShieldAlt />, title: "Secure Payments", desc: "End-to-end encrypted UPI, card and wallet flows." },
  { icon: <FaBolt />, title: "EV Charging", desc: "Find chargers along your route automatically." },
  { icon: <FaSatelliteDish />, title: "Live Availability", desc: "Inventory updates streamed in real time." },
  { icon: <FaUserCheck />, title: "User Verification", desc: "KYC + license verification for every driver." },
  { icon: <FaChartLine />, title: "Admin Analytics", desc: "Granular dashboards for owners and operators." },
];

export default function Features() {
  return (
    <section id="features" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="glass rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground">
            Features
          </span>
          <h2 className="mt-5 text-balance text-4xl font-bold md:text-5xl">
            A complete <span className="text-gradient">mobility stack</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Everything you need to share, book and operate vehicles — engineered for the next decade.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 5) * 0.07 }}
              whileHover={{ y: -6, rotateX: 4, rotateY: -4 }}
              style={{ transformStyle: "preserve-3d" }}
              className="neon-border glass group relative overflow-hidden rounded-2xl p-6"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[image:var(--gradient-primary)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
              <div className="text-2xl text-[color:var(--neon)]">{f.icon}</div>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
