import { useState } from "react";
import { api } from "../api/api";
import { useCharacterStore } from "../store/useCharacterStore";
import type { ApiResponse, Film } from "../types";
import { getSwapiUrlId } from "../utilities/swapiIdParse";

export const useGetRelatedFilms = () => {
  const { currentCharacter, setRelatedFilms, relatedFilms } = useCharacterStore();
  const [moviesLoading, setMoviesLoading] = useState<boolean>(false);
  const [movieError, setMovieError] = useState<string | null>(null);

  const getRelatedFilms = async () => {
    if (!currentCharacter) return;

    setMoviesLoading(true);

    const moviePromises: Promise<ApiResponse<Film>>[] = currentCharacter.films.map((filmUrl) => {
      const filmId: string = getSwapiUrlId(filmUrl);
      return api.getSingleMovie(filmId);
    });

    const result: ApiResponse<Film>[] = await Promise.all(moviePromises);
    const succesfulMovies: Film[] = result
      .filter((res) => {
        if (res.error) {
          setMovieError(res.error);
          console.error(res.error);
          return false;
        }
        return res.data;
      })
      .map((res) => res.data!);

    setRelatedFilms(succesfulMovies);
    setMoviesLoading(false);
  };

  return { relatedFilms, getRelatedFilms, moviesLoading, movieError };
};
