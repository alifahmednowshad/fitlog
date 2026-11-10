import { Workout } from "@/types/workout";
import LibraryGrid from "./LibraryGrid";


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
      className="container mx-auto scroll-mt-20 px-5 py-10 sm:px-6 lg:px-14"
    >
      <LibraryGrid workouts={libraryData} />
    </section>
  );
};

export default Library;
