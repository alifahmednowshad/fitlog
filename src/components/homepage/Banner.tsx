import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import banner from "../../assets/banner.png";

export default function Banner() {
  return (
    <section className="mx-auto w-full max-w-360 px-5 pt-10 sm:px-6">
      <div className="grid items-center gap-8 overflow-hidden rounded-2xl border border-[#23262D] bg-[#14161B] px-6 py-10 sm:px-10 lg:grid-cols-[1.5fr_1fr] lg:px-14 lg:py-14">
        {/* Text */}
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#ccff00]">
            Workout Library
          </p>

          <h1 className="mt-6 max-w-xl text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-[64px]">
            Train with intent. Log every set.
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-[#9DA2AD]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <Link
            href="#library"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#ccff00] px-6 py-3 text-xs font-extrabold uppercase tracking-wide text-black transition-transform hover:scale-[1.03]"
          >
            Browse Workouts
            <ArrowDown size={14} />
          </Link>
        </div>

        {/* Illustration */}
        <div className="relative mx-auto h-60 w-full max-w-xs sm:h-72 lg:h-80">
          <Image
            src={banner}
            alt="Workout illustration"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 1024px) 60vw, 30vw"
          />
        </div>
      </div>
    </section>
  );
}
