import { Link } from "@tanstack/react-router";
import { FaTwitter, FaInstagram, FaGithub, FaApple, FaGooglePlay } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 px-6 pb-10 pt-16">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-[image:var(--gradient-primary)] shadow-[var(--shadow-neon)]" />
            <span className="font-display text-lg font-bold">VOLT<span className="text-gradient">RIDE</span></span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            The future of automobile sharing — premium vehicles, instant access, zero hassle.
          </p>
          <div className="mt-5 flex gap-3 text-xl text-muted-foreground">
            <a href="#" className="hover:text-foreground"><FaTwitter /></a>
            <a href="#" className="hover:text-foreground"><FaInstagram /></a>
            <a href="#" className="hover:text-foreground"><FaGithub /></a>
          </div>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Platform</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/vehicles" className="hover:text-foreground">Vehicles</Link></li>
            <li><Link to="/booking" className="hover:text-foreground">Booking</Link></li>
            <li><Link to="/dashboard" className="hover:text-foreground">Dashboard</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-foreground">About</a></li>
            <li><a href="#" className="hover:text-foreground">Careers</a></li>
            <li><a href="#" className="hover:text-foreground">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Newsletter</h4>
          <form className="glass flex items-center gap-2 rounded-full p-1.5">
            <input
              type="email"
              placeholder="you@email.com"
              className="flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground"
            />
            <button className="btn-neon !px-4 !py-2 text-sm" type="button">Subscribe</button>
          </form>
          <div className="mt-5 flex gap-2">
            <a href="#" className="btn-ghost !py-2 text-xs"><FaApple /> App Store</a>
            <a href="#" className="btn-ghost !py-2 text-xs"><FaGooglePlay /> Play</a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Voltride Mobility India Pvt. Ltd. · Made in Bengaluru 🇮🇳
      </div>
    </footer>
  );
}
