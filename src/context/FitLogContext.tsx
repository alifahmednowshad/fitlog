// "use client";

// import {
//   createContext,
//   useContext,
//   useEffect,
//   useState,
//   type ReactNode,
// } from "react";

// type Workout = {
//   id: string | number;
//   name: string;
//   category: string[];
//   equipment: string;
//   duration: number;
//   calories: number;
//   rating: number;
//   image: string;
//   description?: string;
//   difficulty?: string;
//   sets?: number;
//   reps?: number;
//   instructions?: string[];
// };

// interface FitLogContextType {
//   workouts: Workout[];
//   plan: Workout[];
//   saved: Workout[];
//   loading: boolean;
// }

// const FitLogContext = createContext<FitLogContextType | undefined>(undefined);

// export function FitLogProvider({ children }: { children: ReactNode }) {
//   const [workouts, setWorkouts] = useState<Workout[]>([]);
//   const [plan] = useState<Workout[]>([]);
//   const [saved] = useState<Workout[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchWorkouts() {
//       try {
//         const response = await fetch("https://api.abcz.workers.dev/api/fitlog");

//         if (!response.ok) {
//           throw new Error("Failed to fetch workouts");
//         }

//         const data = await response.json();

//         setWorkouts(data);
//       } catch (error) {
//         console.error("Failed to fetch workouts:", error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchWorkouts();
//   }, []);

//   return (
//     <FitLogContext.Provider
//       value={{
//         workouts,
//         plan,
//         saved,
//         loading,
//       }}
//     >
//       {children}
//     </FitLogContext.Provider>
//   );
// }

// export function useFitLog() {
//   const context = useContext(FitLogContext);

//   if (!context) {
//     throw new Error("useFitLog must be used inside FitLogProvider");
//   }

//   return context;
// }
