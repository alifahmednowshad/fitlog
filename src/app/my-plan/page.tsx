"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Check, ChevronDown, Clock3, Flame, Star, X } from "lucide-react";
import { useFitLog, type PlanItem } from "@/context/FitLogContext";

type SortKey = "duration" | "caloriesBurned" | "rating";

const display = "font-[family-name:var(--font-oswald)]";

export default function MyPlanPage() {
  const { plan, saved, loaded, removeFromPlan, removeFromSaved, markDone } =
    useFitLog();
  const [tab, setTab] = useState<"plan" | "saved">("plan");
  const [sortBy, setSortBy] = useState<SortKey>("duration");

  const minutes = plan.reduce((sum, w) => sum + w.duration, 0);
  const calories = plan.reduce((sum, w) => sum + w.caloriesBurned, 0);

  const list = useMemo(() => {
    const base: PlanItem[] = tab === "plan" ? plan : saved;
    const copy = [...base];
    return sortBy === "duration"
      ? copy.sort((a, b) => a.duration - b.duration)
      : copy.sort((a, b) => b[sortBy] - a[sortBy]);
  }, [tab, plan, saved, sortBy]);

  const metrics = [
    { label: "Exercises", value: plan.length, accent: true },
    { label: "Minutes", value: minutes, accent: false },
    { label: "Calories", value: calories, accent: false },
  ];

  return (
    <div className="mx-auto w-full max-w-360 px-5 py-10 sm:px-8 lg:px-12">
      {/* Title */}
      <h1 className="text-4xl uppercase text-white sm:text-5xl">My Plan</h1>
      <p className="mt-1 text-sm text-[#9DA2AD] sm:text-base">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      {/* Metrics panel */}
      <div className="mt-8 grid grid-cols-3 divide-x divide-[#292C33] rounded-2xl border border-[#292C33] bg-[#15171C]">
        {metrics.map((m) => (
          <div key={m.label} className="px-4 py-5 sm:px-6 sm:py-6">
            <p className="text-xs text-[#9DA2AD] sm:text-sm">{m.label}</p>
            <p
              className={`${display} mt-2 text-3xl font-bold sm:text-5xl ${
                m.accent ? "text-[#ccff00]" : "text-white"
              }`}
            >
              {m.value}
            </p>
          </div>
        ))}
      </div>

      {/* Tabs + Sort */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <div className="inline-flex rounded-xl border border-[#292C33] bg-[#15171C] p-1">
          {(["plan", "saved"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-lg px-5 py-2 text-sm transition-colors ${
                tab === t
                  ? "bg-[#23262D] font-bold text-white"
                  : "text-[#9DA2AD] hover:text-white"
              }`}
            >
              {t === "plan" ? "Today’s Plan" : "Saved"}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm text-[#9DA2AD]">Sort By</span>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortKey)}
              className="appearance-none rounded-lg border border-[#292C33] bg-[#15171C] py-2 pl-3 pr-9 text-sm text-white outline-none focus:border-[#ccff00]"
            >
              <option value="duration">Duration</option>
              <option value="caloriesBurned">Calories</option>
              <option value="rating">Rating</option>
            </select>
            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#9DA2AD]"
            />
          </div>
        </div>
      </div>

      {/* List */}
      <div className="mt-6 space-y-4">
        {!loaded ? (
          <p className="py-10 text-center text-[#9DA2AD]">Loading workouts…</p>
        ) : list.length === 0 ? (
          <div className="rounded-2xl border border-[#292C33] bg-[#15171C] px-6 py-14 text-center">
            <h2 className="text-2xl uppercase text-white sm:text-3xl">
              Nothing here yet
            </h2>
            <p className="mt-2 text-[#9DA2AD]">
              Browse the library and add a lift to get today moving.
            </p>
            <Link
              href="/"
              className="mt-6 inline-flex items-center rounded-full bg-[#ccff00] px-6 py-2.5 text-sm font-bold text-black transition-transform hover:scale-[1.03]"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          list.map((w) => {
            const isDone = Boolean(w.done);

            return (
              <div
                key={w.id}
                className="flex flex-col gap-4 rounded-2xl border border-[#292C33] bg-[#15171C] p-4 sm:flex-row sm:items-center"
              >
                {/* Left: image + info */}
                <div className="flex flex-1 items-center gap-4">
                  <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-xl sm:h-20 sm:w-36">
                    <Image
                      src={w.image}
                      alt={w.name}
                      fill
                      className="object-cover"
                      sizes="144px"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3
                      className={`truncate text-lg uppercase text-white sm:text-xl ${
                        isDone ? "line-through opacity-60" : ""
                      }`}
                    >
                      {w.name}
                    </h3>
                    <p className="mt-0.5 text-sm font-semibold text-[#9DA2AD]">
                      {w.equipment}
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#C5C9D2] sm:text-sm">
                      <span className="flex items-center gap-1.5">
                        <Clock3 size={14} className="text-[#ccff00]" />
                        {w.duration} min
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Flame
                          size={14}
                          className="text-[#ccff00]"
                          fill="currentColor"
                        />
                        {w.caloriesBurned} kcal
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Star size={14} className="text-[#ccff00]" />
                        {w.rating}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: actions */}
                <div className="flex items-center justify-end gap-3">
                  <Link
                    href={`/workouts/${w.id}`}
                    className="rounded-full border border-[#3A3E47] px-5 py-2 text-sm text-white transition-colors hover:bg-white/5"
                  >
                    View Details
                  </Link>

                  {tab === "plan" && (
                    <button
                      onClick={() => markDone(w.id)}
                      disabled={isDone}
                      className="flex items-center gap-1.5 rounded-full bg-[#ccff00] px-4 py-2 text-sm font-bold text-black transition-transform hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
                    >
                      <Check size={15} />
                      {isDone ? "Done" : "Mark as Done"}
                    </button>
                  )}

                  <button
                    onClick={() =>
                      tab === "plan"
                        ? removeFromPlan(w.id)
                        : removeFromSaved(w.id)
                    }
                    className="p-2 text-[#8A8F9A] transition-colors hover:text-white"
                    aria-label={`Remove ${w.name}`}
                  >
                    <X size={18} />
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
