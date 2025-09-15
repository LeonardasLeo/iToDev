import { create } from "zustand";
import type { Film, MovieStore } from "../types";
import { createJSONStorage, persist } from "zustand/middleware";

export const useMovieStore = create<MovieStore>()(
  persist<MovieStore>(
    (set) => ({
      movies: [],
      currentMovie: undefined,
      loading: false,
      error: null,
      setMovies: (data: Film[]) => {
        set({ movies: data, loading: false });
      },
      setCurrentMovie: (data: Film) => {
        set({ currentMovie: data, loading: false });
      },
    }),
    {
      name: "movies",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
