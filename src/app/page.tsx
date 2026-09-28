

import Banner from "@/components/homepage/Banner";
import Library from "@/components/homepage/Library";
// import { useFitLog } from "@/context/FitLogContext";

export default function page() {
  // const { workouts, loading } = useFitLog();

  // if (loading) {
  //   return (
  //     <main className="min-h-screen bg-[#0b0c0f]">
  //       <div className="container mx-auto px-5 py-20 text-center sm:px-6 lg:px-14">
  //         <p className="text-sm text-white/50">Loading workouts...</p>
  //       </div>
  //     </main>
  //   );
  // }

  return (
    <>
      <Banner />
      <Library/>
    </>
  );
}
