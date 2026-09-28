import Image from "next/image";
import Link from "next/link";
import banner from "../../assets/banner.png";

export default function Banner() {
  return (
    <section className="bg-[#0b0c0f]">
      <div className="container mx-auto px-5 py-10 sm:px-6 lg:px-14">
        <div className="relative min-h-92.5 overflow-hidden rounded-xl border border-white/10 bg-[#15171d]">
          {/* Content */}
          <div className="relative z-10 flex h-full min-h-92.5 items-center">
            <div className="w-full px-7 py-12 sm:px-10 lg:max-w-2xl lg:px-12 xl:px-11">
              {/* Eyebrow */}
              <p className="mb-5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#bfff00] sm:text-xs">
                Workout Library
              </p>

              {/* Heading */}
              <h1 className="max-w-150 text-4xl font-black uppercase leading-[0.9] tracking-[-0.035em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Train With Intent. Log
                <br />
                Every Set.
              </h1>

              {/* Description */}
              <p className="mt-5 max-w-105 text-xs leading-5 text-[#9b9da5] sm:text-sm sm:leading-6">
                FitLog is a dark, no-nonsense gym companion: pick a lift, lock
                it into today&apos;s plan, and watch the week&apos;s work add
                up.
              </p>

              {/* CTA */}
              <Link
                href="#library"
                className="btn mt-6 h-9 min-h-0 rounded-md border-0 bg-[#bfff00] px-5 text-[10px] font-extrabold uppercase tracking-[0.02em] text-[#080909] shadow-none hover:bg-[#bfff00] sm:h-10 sm:px-6 sm:text-xs"
              >
                Browse Workouts
              </Link>
            </div>
          </div>

          {/* Workout Illustration */}
          <div className="pointer-events-none absolute bottom-0 right-3 h-[90%] w-[42%] sm:right-6 sm:w-[38%] lg:right-8 lg:w-[34%] xl:right-12 xl:w-[31%]">
            <Image
              src={banner}
              alt="Workout illustration"
              fill
              priority
              className="object-contain object-bottom"
              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 38vw, 31vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
