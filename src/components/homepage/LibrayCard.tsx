import type { Workout } from "@/types/workout";
import Image from "next/image";
import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";

const LibraryCard = ({ workout }: { workout: Workout }) => {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group block overflow-hidden rounded-2xl border border-[#292C33] bg-[#15171C] transition-colors hover:border-[#C8FF00]/60"
    >
      <div className="relative h-56 w-full sm:h-[315px]">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="p-5 sm:p-8 xl:p-10">
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#C8FF00] px-3 py-1.5 text-xs font-bold uppercase leading-none text-black sm:px-5 sm:py-2 sm:text-base xl:text-[18px]"
            >
              {muscle}
            </span>
          ))}
        </div>

        <h3 className="mt-5 text-2xl font-extrabold uppercase leading-none tracking-tight text-white sm:mt-7 sm:text-3xl xl:text-[32px]">
          {workout.name}
        </h3>

        <p className="mt-3 text-base text-[#9DA2AD] sm:mt-4 xl:text-[20px]">
          {workout.equipment}
        </p>

        <div className="my-5 h-px w-full bg-[#292C33] sm:my-7" />

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#A5AAB5] sm:gap-x-7 sm:text-base xl:text-[19px]">
          <div className="flex items-center gap-2">
            <Clock3 className="h-5 w-5 sm:h-6 sm:w-6" />
            <span>{workout.duration} min</span>
          </div>

          <div className="flex items-center gap-2">
            <Flame className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" />
            <span>{workout.caloriesBurned} kcal</span>
          </div>

          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 sm:h-6 sm:w-6" />
            <span>{workout.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LibraryCard;
