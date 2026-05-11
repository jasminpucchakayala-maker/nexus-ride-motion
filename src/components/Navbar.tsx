import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { to: "/", label: "Home" },
  { to: "/vehicles", label: "Vehicles" },
  { to: "/booking", label: "Booking" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/login", label: "Login" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 z-50 w-[min(1200px,94%)] -translate-x-1/2"
    >
      <div className="glass-strong flex items-center justify-between rounded-full px-5 py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-[image:var(--gradient-primary)] shadow-[var(--shadow-neon)]" />
          <span className="font-display text-lg font-bold tracking-tight">
            VOLT<span className="text-gradient">RIDE</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              activeProps={{ className: "rounded-full px-4 py-2 text-sm text-foreground bg-white/10" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Link to="/booking" className="btn-neon text-sm">Book a Ride</Link>
        </div>
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass mt-2 rounded-2xl p-3 md:hidden"
          >
            <div className="flex flex-col">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm hover:bg-white/5"
                >
                  {l.label}
                </Link>
              ))}
              <Link to="/booking" onClick={() => setOpen(false)} className="btn-neon mt-2 justify-center text-sm">
                Book a Ride
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
