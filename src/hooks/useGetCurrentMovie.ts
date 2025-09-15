import { useState } from "react";
import { api } from "../api/api";
import { useMovieStore } from "../store/useMoviesStore";

export const useGetCurrentMovie = () => {
  const { currentMovie, setCurrentMovie } = useMovieStore();
  const [movieLoading, setMovieLoading] = useState<boolean>(false);
  const [movieError, setMovieError] = useState<string | null>(null);

  const getCurrentMovie = async (id: string | undefined) => {
    if (!id) {
      setMovieError("No ID provided");
      setMovieLoading(false);
      return;
    }
    
    setMovieLoading(true);

    const fetchMovie = async () => {
      const { data, error } = await api.getSingleMovie(id);
      if (error) {
        setMovieError(error);
        setMovieLoading(false);
        return;
      }
      if (data) {
        setCurrentMovie(data);
        setMovieLoading(false);
      }
    };
    fetchMovie();

    setMovieLoading(false);
  };

  return { movieLoading, movieError, currentMovie, getCurrentMovie };
};
