import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Plan",
  description: "Your daily workout plan and saved lifts.",
};

export default function MyPlanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
