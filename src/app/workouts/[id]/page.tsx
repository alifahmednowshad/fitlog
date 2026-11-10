import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Workout } from "@/types/workout";
import ActionButtons from "@/components/details/ActionButtons";

async function getWorkout(id: string): Promise<Workout | null> {
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const w = await getWorkout(id);

  if (!w) return { title: "Workout not found" };

  return { title: w.name, description: w.description };
}

export default async function WorkoutDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const w = await getWorkout(id);
  if (!w) notFound();

  const specs: [string, string | number | undefined][] = [
    ["Equipment", w.equipment],
    ["Difficulty", w.difficulty],
    ["Sets", w.sets],
    ["Reps", w.reps],
    ["Duration", `${w.duration} min`],
    ["Calories", `${w.caloriesBurned} kcal`],
    ["Rating", w.rating],
  ];

  return (
    <div className="mx-auto w-full max-w-360 px-5 py-10 sm:px-6 lg:px-10 lg:py-12 xl:px-14">
      <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-14">
        {/* LEFT: image */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[#292C33]">
          <Image
            src={w.image}
            alt={w.name}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* RIGHT: content */}
        <div>
          <h1 className="text-4xl uppercase text-white sm:text-5xl">
            {w.name}
          </h1>

          <p className="mt-3 text-base leading-relaxed text-[#9DA2AD] sm:text-lg">
            {w.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {w.muscleGroups.map((m) => (
              <span
                key={m}
                className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-bold text-black"
              >
                {m}
              </span>
            ))}
          </div>

          {/* Key specs */}
          <div className="mt-7 overflow-hidden rounded-2xl border border-[#292C33] bg-[#15171C]">
            {specs.map(([label, value]) => (
              <div
                key={label}
                className="flex items-center justify-between border-b border-[#292C33] px-5 py-4 last:border-b-0 sm:px-6"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-[#9DA2AD]">
                  {label}
                </span>
                <span className="text-sm font-medium text-white sm:text-base">
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* Instructions */}
          <h2 className="mt-9 font-[family-name:var(--font-inter)] text-base font-bold uppercase tracking-wide text-white">
            Instructions
          </h2>

          <ol className="mt-4 space-y-3.5 text-sm text-[#C5C9D2] sm:text-[15px]">
            {w.instructions?.map((step, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-[#9DA2AD]">{i + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>

          <ActionButtons workout={w} />
        </div>
      </div>
    </div>
  );
}
