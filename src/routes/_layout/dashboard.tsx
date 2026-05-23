import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { FaArrowUp, FaCar, FaUsers, FaDollarSign, FaRoute } from "react-icons/fa";

export const Route = createFileRoute("/_layout/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — Voltride" },
      { name: "description", content: "Real-time analytics, revenue, bookings and fleet performance." },
    ],
  }),
  component: Dashboard,
});

const revenue = [
  { d: "Mon", v: 1200 }, { d: "Tue", v: 1800 }, { d: "Wed", v: 1500 }, { d: "Thu", v: 2200 },
  { d: "Fri", v: 2800 }, { d: "Sat", v: 3400 }, { d: "Sun", v: 3000 },
];
const bookings = [
  { d: "Mon", v: 24 }, { d: "Tue", v: 38 }, { d: "Wed", v: 31 }, { d: "Thu", v: 42 },
  { d: "Fri", v: 56 }, { d: "Sat", v: 70 }, { d: "Sun", v: 64 },
];

function Dashboard() {
  return (
    <div className="relative min-h-screen px-6 pt-32" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold">Admin <span className="text-gradient">Analytics</span></h1>
            <p className="mt-2 text-sm text-muted-foreground">Live overview of your fleet performance.</p>
          </div>
          <div className="glass rounded-full px-4 py-2 text-xs text-muted-foreground">
            <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-[color:var(--neon)]" />
            Realtime · updated 2s ago
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat icon={<FaDollarSign />} label="Revenue" value="₹1,84,21,000" delta="+12.4%" />
          <Stat icon={<FaCar />} label="Active Vehicles" value="3,482" delta="+3.1%" />
          <Stat icon={<FaUsers />} label="Riders" value="58,914" delta="+8.7%" />
          <Stat icon={<FaRoute />} label="Trips Today" value="3,892" delta="+5.6%" />
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="neon-border glass-strong rounded-3xl p-6 lg:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold">Revenue this week</h3>
              <span className="text-xs text-[color:var(--neon)]">+18% vs last week</span>
            </div>
            <div className="h-72">
              <ResponsiveContainer>
                <AreaChart data={revenue}>
                  <defs>
                    <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#7aa8ff" stopOpacity={0.6} />
                      <stop offset="100%" stopColor="#7aa8ff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="rgba(255,255,255,0.06)" />
                  <XAxis dataKey="d" stroke="#9aa3b8" fontSize={12} />
                  <YAxis stroke="#9aa3b8" fontSize={12} />
                  <Tooltip contentStyle={{ background: "rgba(20,22,40,0.9)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12 }} />
                  <Area type="monotone" dataKey="v" stroke="#7aa8ff" strokeWidth={2.5} fill="url(#g1)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="neon-border glass-strong rounded-3xl p-6">
            <h3 className="mb-4 font-semibold">Bookings</h3>
            <div className="h-72">
              <ResponsiveContainer>
                <BarChart data={bookings}>
                  <CartesianGrid stroke="rgba(255,255,255,0.06)" />
                  <XAxis dataKey="d" stroke="#9aa3b8" fontSize={12} />
                  <YAxis stroke="#9aa3b8" fontSize={12} />
                  <Tooltip contentStyle={{ background: "rgba(20,22,40,0.9)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12 }} />
                  <Bar dataKey="v" fill="#c77dff" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <div className="neon-border glass-strong rounded-3xl p-6">
            <h3 className="mb-4 font-semibold">Popular vehicles</h3>
            <div className="space-y-3">
              {[
                { n: "Tesla Model 3", t: 1280 },
                { n: "BMW i8 Roadster", t: 980 },
                { n: "Royal Enfield 650", t: 740 },
                { n: "Volt EV Scooter", t: 620 },
              ].map((v, i) => (
                <div key={v.n} className="glass flex items-center justify-between rounded-xl p-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground">#{i + 1}</span>
                    <span className="font-medium">{v.n}</span>
                  </div>
                  <span className="text-sm text-[color:var(--neon)]">{v.t} trips</span>
                </div>
              ))}
            </div>
          </div>
          <div className="neon-border glass-strong rounded-3xl p-6">
            <h3 className="mb-4 font-semibold">Recent activity</h3>
            <div className="space-y-3 text-sm">
              {[
                "Aarav booked Tesla Model 3 · 2m ago",
                "Sofía completed trip · 5m ago",
                "Owner added BMW M4 · 11m ago",
                "Liam topped up wallet · 18m ago",
                "Maya rated 5★ · 24m ago",
              ].map((a) => (
                <div key={a} className="glass rounded-xl p-3">{a}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-20" />
      </div>
    </div>
  );
}

function Stat({ icon, label, value, delta }: { icon: React.ReactNode; label: string; value: string; delta: string }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="neon-border glass-strong relative overflow-hidden rounded-3xl p-5">
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[image:var(--gradient-primary)] opacity-20 blur-2xl" />
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
        <span className="text-[color:var(--neon)]">{icon}</span>
      </div>
      <div className="mt-3 text-2xl font-bold text-gradient">{value}</div>
      <div className="mt-1 flex items-center gap-1 text-xs text-emerald-400"><FaArrowUp /> {delta}</div>
    </motion.div>
  );
}
