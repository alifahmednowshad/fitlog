"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock3, Flame, Star, Check, X } from "lucide-react";
import { useFitLog, type PlanItem } from "@/context/FitLogContext";

export default function MyPlanPage() {
  const { plan, saved, loaded, removeFromPlan, removeFromSaved, markDone } =
    useFitLog();
  const [tab, setTab] = useState<"plan" | "saved">("plan");

  const list = tab === "plan" ? plan : saved;
  const minutes = plan.reduce((s, w) => s + w.duration, 0);
  const calories = plan.reduce((s, w) => s + w.caloriesBurned, 0);

  return (
    <div className="container mx-auto px-5 py-10 sm:px-6 lg:px-14">
      <h1 className="uppercase">My Plan</h1>
      <p className="mt-2 text-white/60">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="mt-8 grid grid-cols-3 gap-3">
        {[
          ["Exercises", plan.length],
          ["Minutes", minutes],
          ["Calories", calories],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-xl border border-white/10 bg-[#15171c] p-4"
          >
            <p className="text-xs uppercase text-white/50">{label}</p>
            <p className="text-3xl font-bold text-[#ccff00]">{value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex gap-2">
        {(["plan", "saved"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`rounded-full px-5 py-2 text-sm font-bold uppercase ${
              tab === t
                ? "bg-[#ccff00] text-black"
                : "border border-white/20 text-white/70"
            }`}
          >
            {t === "plan" ? "Today's Plan" : "Saved"}
          </button>
        ))}
      </div>

      <div className="mt-6 space-y-4">
        {!loaded ? (
          <p className="text-white/60">Loading workouts…</p>
        ) : list.length === 0 ? (
          <div className="rounded-xl border border-dashed border-white/20 p-10 text-center">
            <h2 className="uppercase">Nothing here yet</h2>
            <p className="mt-2 text-white/60">
              Browse the library and add a lift to get today moving.
            </p>
            <Link
              href="/"
              className="btn mt-5 border-0 bg-[#ccff00] text-black"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          list.map((w) => {
            const isDone = (w as PlanItem).done;
            return (
              <div
                key={w.id}
                className="flex flex-col gap-4 rounded-xl border border-white/10 bg-[#15171c] p-4 sm:flex-row sm:items-center"
              >
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={w.image}
                    alt={w.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="uppercase">{w.name}</h3>
                  <p className="text-sm text-white/50">{w.equipment}</p>
                  <div className="mt-2 flex flex-wrap gap-4 text-sm text-white/70">
                    <span className="flex items-center gap-1">
                      <Clock3 size={14} /> {w.duration} min
                    </span>
                    <span className="flex items-center gap-1">
                      <Flame size={14} /> {w.caloriesBurned} kcal
                    </span>
                    <span className="flex items-center gap-1">
                      <Star size={14} /> {w.rating}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <Link
                    href={`/workouts/${w.id}`}
                    className="btn btn-sm btn-outline border-white/30 text-white"
                  >
                    View Details
                  </Link>

                  {tab === "plan" && (
                    <button
                      onClick={() => markDone(w.id)}
                      disabled={isDone}
                      className="btn btn-sm border-0 bg-[#ccff00] text-black disabled:opacity-50"
                    >
                      <Check size={14} /> {isDone ? "Done" : "Mark as Done"}
                    </button>
                  )}

                  <button
                    onClick={() =>
                      tab === "plan"
                        ? removeFromPlan(w.id)
                        : removeFromSaved(w.id)
                    }
                    className="btn btn-sm btn-square btn-ghost text-white"
                    aria-label="Remove"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
