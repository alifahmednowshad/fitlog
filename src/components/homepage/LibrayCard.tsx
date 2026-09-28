import type { Workout } from "@/types/workout";
import Image from "next/image";
import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";

const LibraryCard = ({ workout }: { workout: Workout }) => {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group block overflow-hidden rounded-2xl border border-[#292C33] bg-[#15171C]"
    >
      <div className="relative h-[315px] w-full">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="px-10 pb-10 pt-10">
        <div className="flex flex-wrap gap-3">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#C8FF00] px-5 py-2 text-[18px] font-bold uppercase leading-none text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        <h3 className="mt-7 text-[32px] font-extrabold uppercase leading-none tracking-tight text-white">
          {workout.name}
        </h3>

        <p className="mt-4 text-[20px] text-[#9DA2AD]">{workout.equipment}</p>

        <div className="my-7 h-px w-full bg-[#292C33]" />

        <div className="flex items-center gap-7 text-[19px] text-[#A5AAB5]">
          <div className="flex items-center gap-2">
            <Clock3 size={24} />
            <span>{workout.duration} min</span>
          </div>

          <div className="flex items-center gap-2">
            <Flame size={24} fill="currentColor" />
            <span>{workout.caloriesBurned} kcal</span>
          </div>

          <div className="flex items-center gap-2">
            <Star size={25} />
            <span>{workout.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LibraryCard;
