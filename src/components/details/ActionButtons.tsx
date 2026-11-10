"use client";
import { Plus, Bookmark } from "lucide-react";
import { useFitLog } from "@/context/FitLogContext";
import type { Workout } from "@/types/workout";

export default function ActionButtons({ workout }: { workout: Workout }) {
  const { plan, addToPlan, saveForLater } = useFitLog();
  const planFull = plan.length >= 5 && !plan.some((p) => p.id === workout.id);

  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <button
        onClick={() => addToPlan(workout)}
        disabled={planFull}
        className="btn border-0 bg-[#ccff00] text-black disabled:opacity-50"
      >
        <Plus size={16} /> Add to today&apos;s plan
      </button>

      <button
        onClick={() => saveForLater(workout)}
        className="btn btn-outline border-white/30 text-white"
      >
        <Bookmark size={16} /> Save for later
      </button>
    </div>
  );
}
