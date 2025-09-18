import { create } from "zustand";
import type { Film, MovieStore } from "../types";
import { createJSONStorage, persist } from "zustand/middleware";

export const useMovieStore = create<MovieStore>()(
  persist<MovieStore>(
    (set) => ({
      movies: [],
      currentMovie: undefined,
      error: null,
      setMovies: (data: Film[]) => {
        set({ movies: data });
      },
      setCurrentMovie: (data: Film) => {
        set({ currentMovie: data });
      },
    }),
    {
      name: "movies",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
