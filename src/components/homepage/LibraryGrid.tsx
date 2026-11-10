"use client";
import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Workout } from "@/types/workout";
import LibraryCard from "./LibrayCard";


type SortKey = "duration" | "caloriesBurned" | "rating";

export default function LibraryGrid({ workouts }: { workouts: Workout[] }) {
  const [sortBy, setSortBy] = useState<SortKey>("duration");

  const sorted = useMemo(() => {
    const copy = [...workouts];
    return sortBy === "duration"
      ? copy.sort((a, b) => a.duration - b.duration)
      : copy.sort((a, b) => b[sortBy] - a[sortBy]);
  }, [workouts, sortBy]);

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2>THE LIBRARY</h2>
          <p className="text-white/60">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <label className="relative">
          <span className="sr-only">Sort by</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortKey)}
            className="appearance-none rounded-lg border border-white/20 bg-[#15171c] py-2 pl-4 pr-10 text-sm font-semibold"
          >
            <option value="duration">Sort By: Duration</option>
            <option value="caloriesBurned">Sort By: Calories</option>
            <option value="rating">Sort By: Rating</option>
          </select>
          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
          />
        </label>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {sorted.map((w) => (
          <LibraryCard key={w.id} workout={w} />
        ))}
      </div>
    </>
  );
}
