"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import logo from "../../assets/logo.png"

type IconProps = {
  size?: number;
  strokeWidth?: number;
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
};

const Menu = ({ size = 21, strokeWidth = 2, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M3 6h18" />
    <path d="M3 12h18" />
    <path d="M3 18h18" />
  </svg>
);

const X = ({ size = 21, strokeWidth = 2, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

interface NavbarProps {
  planCount?: number;
  savedCount?: number;
}

export default function Navbar({ planCount = 0, savedCount = 0 }: NavbarProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isWorkoutActive = pathname === "/";
  const isPlanActive = pathname === "/my-plan";

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0b0b0b]/95 backdrop-blur-md">
      <nav className="mx-auto flex h-18 w-full max-w-360 items-center justify-between px-5 sm:px-6 lg:px-10 xl:px-14">
        {/* ==================== LOGO ==================== */}
        <Link
          href="/"
          onClick={closeMobileMenu}
          className="group flex shrink-0 items-center gap-2"
          aria-label="FitLog Home"
        >
          
          <Image src={logo} alt="" />
          <span className="text-xl font-black tracking-[-0.04em] text-white sm:text-2xl">
            FIT<span className="text-[#ccff00]">LOG</span>
          </span>
        </Link>

        {/* ==================== DESKTOP NAV ==================== */}
        <div className="hidden items-center gap-1 md:flex">
          <Link
            href="/"
            className={`relative px-4 py-2 text-sm font-bold uppercase tracking-[0.08em] transition-colors ${
              isWorkoutActive
                ? "text-[#ccff00]"
                : "text-white/60 hover:text-white"
            }`}
          >
            Workout
            {isWorkoutActive && (
              <span className="absolute -bottom-5 left-1/2 h-0.75 w-6 -translate-x-1/2 bg-[#ccff00]" />
            )}
          </Link>

          <Link
            href="/my-plan"
            className={`relative px-4 py-2 text-sm font-bold uppercase tracking-[0.08em] transition-colors ${
              isPlanActive ? "text-[#ccff00]" : "text-white/60 hover:text-white"
            }`}
          >
            My Plan
            {isPlanActive && (
              <span className="absolute -bottom-5 left-1/2 h-0.75 w-6 -translate-x-1/2 bg-[#ccff00]" />
            )}
          </Link>
        </div>

        {/* ==================== DESKTOP COUNTERS ==================== */}
        <div className="hidden items-center gap-2 sm:flex">
          <Link
            href="/my-plan"
            className="group flex items-center gap-2 rounded-full bg-[#ccff00] px-3 py-1.5 text-[#0b0b0b] transition-transform hover:scale-[1.03]"
            aria-label={`Today's plan: ${planCount} exercises`}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.12em]">
              Plan
            </span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#0b0b0b] px-1.5 text-[11px] font-black text-[#ccff00]">
              {planCount}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="group flex items-center gap-2 rounded-full border border-white/30 px-3 py-1.5 text-white transition-colors hover:border-[#ccff00] hover:text-[#ccff00]"
            aria-label={`Saved workouts: ${savedCount}`}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.12em]">
              Saved
            </span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-white/10 px-1.5 text-[11px] font-black">
              {savedCount}
            </span>
          </Link>
        </div>

        {/* ==================== MOBILE MENU BUTTON ==================== */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white transition-colors hover:border-[#ccff00] hover:text-[#ccff00] md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X size={21} aria-hidden="true" />
          ) : (
            <Menu size={21} aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* ==================== MOBILE MENU ==================== */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#0b0b0b] md:hidden">
          <div className="mx-auto flex max-w-360 flex-col px-5 py-4 sm:px-6">
            {/* Navigation */}
            <Link
              href="/"
              onClick={closeMobileMenu}
              className={`border-b border-white/10 py-4 text-sm font-black uppercase tracking-[0.08em] ${
                isWorkoutActive ? "text-[#ccff00]" : "text-white/70"
              }`}
            >
              Workout
            </Link>

            <Link
              href="/my-plan"
              onClick={closeMobileMenu}
              className={`border-b border-white/10 py-4 text-sm font-black uppercase tracking-[0.08em] ${
                isPlanActive ? "text-[#ccff00]" : "text-white/70"
              }`}
            >
              My Plan
            </Link>

            {/* Counters */}
            <div className="flex gap-2 pt-4">
              <Link
                href="/my-plan"
                onClick={closeMobileMenu}
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#ccff00] px-4 py-2.5 text-[#0b0b0b]"
              >
                <span className="text-xs font-black uppercase tracking-widest">
                  Plan
                </span>

                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#0b0b0b] px-1.5 text-[11px] font-black text-[#ccff00]">
                  {planCount}
                </span>
              </Link>

              <Link
                href="/my-plan"
                onClick={closeMobileMenu}
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/30 px-4 py-2.5 text-white"
              >
                <span className="text-xs font-black uppercase tracking-widest">
                  Saved
                </span>

                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-white/10 px-1.5 text-[11px] font-black">
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
