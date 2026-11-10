"use client";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import type { Workout } from "@/types/workout";

export type PlanItem = Workout & { done?: boolean };

type Ctx = {
  plan: PlanItem[];
  saved: Workout[];
  loaded: boolean;
  addToPlan: (w: Workout) => void;
  saveForLater: (w: Workout) => void;
  removeFromPlan: (id: Workout["id"]) => void;
  removeFromSaved: (id: Workout["id"]) => void;
  markDone: (id: Workout["id"]) => void;
};

const FitLogContext = createContext<Ctx | null>(null);

export function FitLogProvider({ children }: { children: React.ReactNode }) {
  const [plan, setPlan] = useState<PlanItem[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      setPlan(JSON.parse(localStorage.getItem("fitlog-plan") || "[]"));
      setSaved(JSON.parse(localStorage.getItem("fitlog-saved") || "[]"));
    } catch {}
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem("fitlog-plan", JSON.stringify(plan));
    localStorage.setItem("fitlog-saved", JSON.stringify(saved));
  }, [plan, saved, loaded]);

  const addToPlan = (w: Workout) => {
    if (plan.some((p) => p.id === w.id))
      return toast.error("Already in today's plan");
    if (plan.length >= 5) return toast.error("Plan is full (max 5 lifts)");
    setPlan([...plan, w]);
    toast.success("Added to today's plan");
  };

  const saveForLater = (w: Workout) => {
    if (saved.some((s) => s.id === w.id)) return toast.error("Already saved");
    setSaved([...saved, w]);
    toast.success("Saved for later");
  };

  const removeFromPlan = (id: Workout["id"]) => {
    setPlan(plan.filter((p) => p.id !== id));
    toast("Removed from today's plan");
  };

  const removeFromSaved = (id: Workout["id"]) => {
    setSaved(saved.filter((s) => s.id !== id));
    toast("Removed from saved");
  };

  const markDone = (id: Workout["id"]) => {
    setPlan(plan.map((p) => (p.id === id ? { ...p, done: true } : p)));
    toast.success("Marked as done");
  };

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        loaded,
        addToPlan,
        saveForLater,
        removeFromPlan,
        removeFromSaved,
        markDone,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
}

export const useFitLog = () => {
  const ctx = useContext(FitLogContext);
  if (!ctx) throw new Error("useFitLog must be used inside FitLogProvider");
  return ctx;
};
