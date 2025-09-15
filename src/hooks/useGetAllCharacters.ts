import { useState } from "react";
import { api } from "../api/api";
import { useCharacterStore } from "../store/useCharacterStore";
import { useMovieStore } from "../store/useMoviesStore";
import type { ApiResponse, Character } from "../types";
import { getSwapiUrlId } from "../utilities/swapiIdParse";

export const useGetAllCharacters = (id?: string) => {
  const [charLoading, setCharLoading] = useState<boolean>(false);
  const [charError, setCharError] = useState<string | null>(null);
  const { characters, setCharacters } = useCharacterStore();
  const { currentMovie } = useMovieStore();

  const getCharacters = async (): Promise<void> => {
    // fetch and set characters based on current movie
    if (!id) {
      setCharError("No ID provided");
      setCharLoading(false);
      return;
    }
    if (!currentMovie) return;

    setCharLoading(true);

    const characterPromises: Promise<ApiResponse<Character>>[] = currentMovie.characters.map(
      (charUrl) => {
        const charId: string = getSwapiUrlId(charUrl);
        return api.getCharacterById(charId);
      }
    );

    const result: ApiResponse<Character>[] = await Promise.all(characterPromises);
    const successfulChars: Character[] = result
      .filter((res) => !res.error && res.data)
      .map((res) => res.data!);

    setCharacters(successfulChars);
    setCharLoading(false);
  };

  return { charLoading, characters, charError, getCharacters };
};
