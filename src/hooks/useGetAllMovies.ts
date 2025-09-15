import { useState } from "react";
import { api } from "../api/api";
import { useMovieStore } from "../store/useMoviesStore";

//Add loading state and error handling

export const useGetAllMovies = () => {
  const { movies, setMovies } = useMovieStore();
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = async () => {
    const { data, error } = await api.getAllMovie();

    if (error) {
      setError(error);
      return;
    }

    if (data) {
      setMovies(data);
    }
  };

  return { movies, error, fetchMovies };
};
