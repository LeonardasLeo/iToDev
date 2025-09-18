import { useState } from "react";
import { api } from "../api/api";
import { useMovieStore } from "../store/useMoviesStore";

//Add loading state and error handling

export const useGetAllMovies = () => {
  const { movies, setMovies } = useMovieStore();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchMovies = async () => {
    setLoading(true);

    const { data, error } = await api.getAllMovie();

    if (error) {
      setError(error);
      return;
    }

    if (data) {
      setMovies(data);
    }

    setLoading(false);
  };

  return { movies, error, fetchMovies, loading };
};
