import { Workout } from "@/types/workout";
import LibraryCard from "./LibrayCard";


const getLibrary = async (): Promise<Workout[]> => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!response.ok) {
    throw new Error("Failed to fetch library data");
  }

  const data: Workout[] = await response.json();

  console.log("Library Data:", data);

  return data;
};

const Library = async () => {
  const libraryData = await getLibrary();

  return (
    <div className="container mx-auto px-5 py-10 sm:px-6 lg:px-14">
      <h2>THE LIBRARY</h2>

      <p>Twelve lifts covering every major muscle group.</p>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {libraryData.map((workout: Workout) => (
          <LibraryCard key={workout.id} workout={workout} />
        ))}
      </div>
    </div>
  );
};

export default Library;
