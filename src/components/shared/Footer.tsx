import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.png";


export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0b0b]">
      <div className="container mx-auto flex flex-col items-center justify-between gap-5 px-5 py-8 sm:px-6 md:flex-row lg:px-14">
        {/* Logo & Brand */}
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="FitLog Home"
        >
          <Image src={logo} alt="" />
          <span className="text-xl font-black tracking-[-0.04em] text-white sm:text-2xl">
            FIT<span className="text-[#ccff00]">LOG</span>
          </span>
        </Link>

        {/* Copyright */}
        <p className="text-center text-xs font-medium tracking-wide text-white/50 md:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}
