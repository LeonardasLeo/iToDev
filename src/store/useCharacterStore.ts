import { create } from "zustand";
import type { Character, CharacterStore, Film } from "../types";
import { createJSONStorage, persist } from "zustand/middleware";

export const useCharacterStore = create<CharacterStore>()(
  persist<CharacterStore>(
    (set) => ({
      characters: [],
      currentCharacter: undefined,
      relatedFilms: [],
      error: null,
      setCharacters: (data: Character[]) => {
        set({ characters: data });
      },
      setCurrentCharacter: (data: Character) => {
        set({ currentCharacter: data });
      },
      setRelatedFilms: (data: Film[]) => {
        set({ relatedFilms: data });
      },
    }),
    {
      name: "characters",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
