import type { Workout } from "@/types/workout";
import Image from "next/image";
import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";

const LibraryCard = ({
  workout,
  eager = false,
}: {
  workout: Workout;
  eager?: boolean;
}) => {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group block overflow-hidden rounded-2xl border border-[#23262D] bg-[#14161B] transition-colors hover:border-[#ccff00]/50"
    >
      <div className="relative h-48 w-full">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          loading={eager ? "eager" : "lazy"}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#ccff00] px-3 py-1 text-[11px] font-bold uppercase leading-none tracking-wide text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        <h3 className="mt-4 text-xl uppercase leading-tight text-white">
          {workout.name}
        </h3>

        <p className="mt-1 text-xs text-[#8A8F9A]">{workout.equipment}</p>

        <div className="my-4 h-px w-full bg-[#23262D]" />

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#8A8F9A]">
          <span className="flex items-center gap-1.5">
            <Clock3 size={14} />
            {workout.duration} min
          </span>
          <span className="flex items-center gap-1.5">
            <Flame size={14} fill="currentColor" />
            {workout.caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1.5">
            <Star size={14} />
            {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default LibraryCard;
