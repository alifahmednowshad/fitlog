import type { Workout } from "@/types/workout";
import LibraryCard from "./LibrayCard";


const getLibrary = async (): Promise<Workout[]> => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!response.ok) {
    throw new Error("Failed to fetch library data");
  }

  return response.json();
};

const Library = async () => {
  const libraryData = await getLibrary();

  return (
    <section
      id="library"
      className="mx-auto w-full max-w-360 scroll-mt-20 px-5 pb-16 pt-6 sm:px-6"
    >
      <h2 className="text-3xl uppercase text-white sm:text-[32px]">
        The Library
      </h2>
      <p className="mt-1 text-sm text-[#9DA2AD]">
        Twelve lifts covering every major muscle group.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {libraryData.map((workout, index) => (
          <LibraryCard key={workout.id} workout={workout} eager={index < 3} />
        ))}
      </div>
    </section>
  );
};

export default Library;
