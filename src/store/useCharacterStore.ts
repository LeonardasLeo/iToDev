import { create } from "zustand";
import type { Character, CharacterStore, Film } from "../types";
import { createJSONStorage, persist } from "zustand/middleware";

export const useCharacterStore = create<CharacterStore>()(
  persist<CharacterStore>(
    (set) => ({
      characters: [],
      currentCharacter: undefined,
      relatedFilms: [],
      loading: false,
      error: null,
      setCharacters: (data: Character[]) => {
        set({ characters: data, loading: false });
      },
      setCurrentCharacter: (data: Character) => {
        set({ currentCharacter: data, loading: false });
      },
      setRelatedFilms: (data: Film[]) => {
        set({ relatedFilms: data, loading: false });
      },
    }),
    {
      name: "characters",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
