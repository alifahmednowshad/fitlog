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

  if (!w) {
    return { title: "Workout not found" };
  }

  return {
    title: w.name,
    description: w.description,
  };
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
    <div className="container mx-auto grid gap-10 px-5 py-10 sm:px-6 lg:grid-cols-2 lg:px-14">
      <div className="relative aspect-square overflow-hidden rounded-2xl">
        <Image
          src={w.image}
          alt={w.name}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div>
        <h1 className="text-4xl uppercase sm:text-5xl">{w.name}</h1>
        <p className="mt-3 text-white/60">{w.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {w.muscleGroups.map((m) => (
            <span
              key={m}
              className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-bold uppercase text-black"
            >
              {m}
            </span>
          ))}
        </div>

        <div className="mt-6 rounded-xl border border-white/10 bg-[#15171c] p-5">
          {specs.map(([label, value]) => (
            <div
              key={label}
              className="flex justify-between border-b border-white/10 py-2 last:border-0"
            >
              <span className="text-xs font-bold uppercase text-white/50">
                {label}
              </span>
              <span className="font-semibold">{value}</span>
            </div>
          ))}
        </div>

        <h3 className="mt-8 uppercase">Instructions</h3>
        <ol className="mt-3 space-y-3">
          {w.instructions?.map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ccff00] text-xs font-bold text-black">
                {i + 1}
              </span>
              <span className="text-white/80">{step}</span>
            </li>
          ))}
        </ol>

        <ActionButtons workout={w} />
      </div>
    </div>
  );
}
