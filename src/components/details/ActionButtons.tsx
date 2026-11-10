"use client";

import { Bookmark, CalendarPlus } from "lucide-react";
import { useFitLog } from "@/context/FitLogContext";
import type { Workout } from "@/types/workout";

export default function ActionButtons({ workout }: { workout: Workout }) {
  const { plan, addToPlan, saveForLater } = useFitLog();
  const planFull = plan.length >= 5 && !plan.some((p) => p.id === workout.id);

  return (
    <div className="mt-9 flex flex-wrap gap-3">
      <button
        onClick={() => addToPlan(workout)}
        disabled={planFull}
        className="flex items-center gap-2 rounded-xl bg-[#ccff00] px-5 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
      >
        <CalendarPlus size={16} />
        Add to today&apos;s plan
      </button>

      <button
        onClick={() => saveForLater(workout)}
        className="flex items-center gap-2 rounded-xl border border-[#3A3E47] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
      >
        <Bookmark size={16} />
        Save for later
      </button>
    </div>
  );
}
