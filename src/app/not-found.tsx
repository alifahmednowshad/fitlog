import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <h1>404</h1>
      <p className="text-white/60">This page doesn&apos;t exist.</p>
      <Link href="/" className="btn border-0 bg-[#ccff00] text-black">
        Go to workouts
      </Link>
    </div>
  );
}
