"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";
import { useFitLog } from "@/context/FitLogContext";

const display = "font-[family-name:var(--font-oswald)]";

export default function Navbar() {
  const { plan, saved } = useFitLog();
  const planCount = plan.length;
  const savedCount = saved.length;

  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isWorkoutActive = pathname === "/";
  const isPlanActive = pathname === "/my-plan";

  const closeMobileMenu = () => setMobileOpen(false);

  const linkClass = (active: boolean) =>
    `rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
      active
        ? "bg-[#ccff00]/10 text-[#ccff00]"
        : "text-white/60 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0f1115]/95 backdrop-blur-md">
      <nav className="mx-auto grid h-16 w-full max-w-360 grid-cols-[1fr_auto] items-center px-5 sm:px-6 md:grid-cols-[1fr_auto_1fr] lg:px-10 xl:px-14">
        {/* LOGO */}
        <Link
          href="/"
          onClick={closeMobileMenu}
          className="flex shrink-0 items-center gap-2 justify-self-start"
          aria-label="FitLog Home"
        >
          <Image src={logo} alt="" className="h-7 w-auto" />
          <span
            className={`${display} text-2xl font-bold tracking-wide text-white`}
          >
            FITLOG
          </span>
        </Link>

        {/* CENTER LINKS */}
        <div className="hidden items-center gap-1 md:flex">
          <Link href="/" className={linkClass(isWorkoutActive)}>
            Workouts
          </Link>
          <Link href="/my-plan" className={linkClass(isPlanActive)}>
            My Plan
          </Link>
        </div>

        {/* COUNTERS */}
        <div className="hidden items-center gap-5 justify-self-end md:flex">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-sm text-white"
            aria-label={`Today's plan: ${planCount} exercises`}
          >
            Plan
            <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#ccff00] px-1.5 text-xs font-bold text-black">
              {planCount}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-sm text-white/60 hover:text-white"
            aria-label={`Saved workouts: ${savedCount}`}
          >
            Saved
            <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-white/30 px-1.5 text-xs font-bold text-white">
              {savedCount}
            </span>
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center justify-self-end rounded-lg border border-white/15 text-white transition-colors hover:border-[#ccff00] hover:text-[#ccff00] md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#0f1115] md:hidden">
          <div className="mx-auto flex max-w-360 flex-col px-5 py-4 sm:px-6">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className={`border-b border-white/10 py-4 text-sm font-medium ${
                isWorkoutActive ? "text-[#ccff00]" : "text-white/70"
              }`}
            >
              Workouts
            </Link>

            <Link
              href="/my-plan"
              onClick={closeMobileMenu}
              className={`border-b border-white/10 py-4 text-sm font-medium ${
                isPlanActive ? "text-[#ccff00]" : "text-white/70"
              }`}
            >
              My Plan
            </Link>

            <div className="flex gap-6 pt-4">
              <Link
                href="/my-plan"
                onClick={closeMobileMenu}
                className="flex items-center gap-2 text-sm text-white"
              >
                Plan
                <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#ccff00] px-1.5 text-xs font-bold text-black">
                  {planCount}
                </span>
              </Link>

              <Link
                href="/my-plan"
                onClick={closeMobileMenu}
                className="flex items-center gap-2 text-sm text-white/70"
              >
                Saved
                <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-white/30 px-1.5 text-xs font-bold text-white">
                  {savedCount}
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
