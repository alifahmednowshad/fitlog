export interface Workout {
  id: number | string;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  duration: number;
  caloriesBurned: number;
  rating: number;
  description?: string;
  difficulty?: string;
  sets?: number;
  reps?: string;
  instructions?: string[];
}
