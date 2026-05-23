import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaCalendarAlt, FaMapPin, FaCheckCircle, FaCreditCard, FaWallet, FaMobileAlt } from "react-icons/fa";

export const Route = createFileRoute("/_layout/booking")({
  head: () => ({
    meta: [
      { title: "Book a Ride — Voltride" },
      { name: "description", content: "Reserve a premium vehicle in seconds with live availability and secure payments." },
      { property: "og:title", content: "Book your Voltride" },
      { property: "og:description", content: "Reserve in 10 seconds with instant confirmation." },
    ],
  }),
  component: BookingPage,
});

function BookingPage() {
  const [step, setStep] = useState(1);
  const [pay, setPay] = useState<"upi" | "card" | "wallet">("upi");
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div className="relative min-h-screen px-6 pt-32" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="relative mx-auto max-w-5xl">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Reserve your <span className="text-gradient">ride</span></h1>
          <p className="mt-3 text-muted-foreground">Premium vehicles, instant confirmation.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-[1fr_360px]">
          {/* Form */}
          <div className="neon-border glass-strong rounded-3xl p-6 md:p-8">
            <div className="mb-6 flex items-center gap-2">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex flex-1 items-center gap-2">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm ${
                    step >= s ? "bg-[image:var(--gradient-primary)] text-white" : "bg-white/10 text-muted-foreground"
                  }`}>{s}</div>
                  {s < 3 && <div className={`h-px flex-1 ${step > s ? "bg-[color:var(--neon)]" : "bg-white/10"}`} />}
                </div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h3 className="text-xl font-bold">Trip details</h3>
                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    <Field icon={<FaMapPin />} label="Pickup"><input className="input" placeholder="Bandra West, Mumbai" /></Field>
                    <Field icon={<FaMapPin />} label="Drop-off"><input className="input" placeholder="CSMI Airport T2" /></Field>
                    <Field icon={<FaCalendarAlt />} label="Pickup time"><input type="datetime-local" className="input" /></Field>
                    <Field icon={<FaCalendarAlt />} label="Return"><input type="datetime-local" className="input" /></Field>
                  </div>
                </motion.div>
              )}
              {step === 2 && (
                <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h3 className="text-xl font-bold">Choose vehicle</h3>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {["Tata Nexon EV Max", "Mahindra Thar Roxx", "Royal Enfield Classic 350", "Ather 450X EV Scooter"].map((n, i) => (
                      <label key={n} className="glass flex cursor-pointer items-center justify-between rounded-2xl p-4 hover:bg-white/10">
                        <div>
                          <div className="font-semibold">{n}</div>
                          <div className="text-xs text-muted-foreground">Available now</div>
                        </div>
                        <input type="radio" name="veh" defaultChecked={i === 0} className="accent-[color:var(--neon)]" />
                      </label>
                    ))}
                  </div>
                </motion.div>
              )}
              {step === 3 && (
                <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h3 className="text-xl font-bold">Payment</h3>
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    <PayBtn active={pay === "upi"} onClick={() => setPay("upi")} icon={<FaMobileAlt />} label="UPI" />
                    <PayBtn active={pay === "card"} onClick={() => setPay("card")} icon={<FaCreditCard />} label="Card" />
                    <PayBtn active={pay === "wallet"} onClick={() => setPay("wallet")} icon={<FaWallet />} label="Wallet" />
                  </div>
                  <div className="mt-5 grid gap-3">
                    {pay === "upi" && <input className="input" placeholder="name@upi" />}
                    {pay === "card" && (
                      <>
                        <input className="input" placeholder="Card number" />
                        <div className="grid grid-cols-2 gap-3">
                          <input className="input" placeholder="MM / YY" />
                          <input className="input" placeholder="CVC" />
                        </div>
                      </>
                    )}
                    {pay === "wallet" && (
                      <div className="glass rounded-xl p-4 text-sm">Voltride Wallet · Balance <b className="text-gradient">₹12,480</b></div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-8 flex justify-between">
              <button onClick={() => setStep(Math.max(1, step - 1))} className="btn-ghost">Back</button>
              {step < 3 ? (
                <button onClick={() => setStep(step + 1)} className="btn-neon">Continue</button>
              ) : (
                <button onClick={() => setConfirmed(true)} className="btn-neon">Confirm Booking</button>
              )}
            </div>
          </div>

          {/* Summary */}
          <aside className="neon-border glass rounded-3xl p-6 h-fit sticky top-28">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Booking Summary</div>
            <div className="mt-3 text-lg font-semibold">Tata Nexon EV Max</div>
            <div className="mt-1 flex items-center gap-1 text-xs text-[color:var(--neon)]"><FaCheckCircle /> Live availability</div>
            <div className="mt-5 space-y-2 text-sm">
              <Row label="Base fare" value="₹1,999" />
              <Row label="Insurance" value="₹249" />
              <Row label="GST (18%)" value="₹405" />
              <div className="my-3 border-t border-white/10" />
              <Row label={<b>Total</b>} value={<b className="text-gradient text-lg">₹2,653</b>} />
            </div>
          </aside>
        </div>
      </div>

      <AnimatePresence>
        {confirmed && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={() => setConfirmed(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="neon-border glass-strong mx-4 max-w-sm rounded-3xl p-8 text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[image:var(--gradient-primary)] text-3xl text-white shadow-[var(--shadow-neon)]">
                <FaCheckCircle />
              </div>
              <h3 className="mt-5 text-2xl font-bold">Booking confirmed!</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Your Tesla Model 3 is reserved. Driver details sent to your phone.
              </p>
              <button className="btn-neon mt-6 w-full justify-center" onClick={() => setConfirmed(false)}>Done</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`.input{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:.75rem;padding:.75rem 1rem;font-size:.875rem;outline:none;width:100%;color:inherit}.input:focus{border-color:oklch(.78 .2 230)}`}</style>
    </div>
  );
}

function Field({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center gap-1.5 text-xs text-muted-foreground">{icon} {label}</span>
      {children}
    </label>
  );
}
function Row({ label, value }: { label: React.ReactNode; value: React.ReactNode }) {
  return <div className="flex items-center justify-between"><span className="text-muted-foreground">{label}</span><span>{value}</span></div>;
}
function PayBtn({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: React.ReactNode; label: string }) {
  return (
    <button onClick={onClick} className={`glass flex flex-col items-center gap-1 rounded-2xl p-4 text-sm transition-all ${active ? "ring-1 ring-[color:var(--neon)] bg-white/10" : "hover:bg-white/5"}`}>
      <span className="text-xl text-[color:var(--neon)]">{icon}</span>{label}
    </button>
  );
}
