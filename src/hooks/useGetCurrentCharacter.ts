import { useState } from "react";
import { api } from "../api/api";
import { useCharacterStore } from "../store/useCharacterStore";

export const useGetCurrentCharacter = () => {
  const [charLoading, setCharLoading] = useState<boolean>(false);
  const [charError, setCharError] = useState<string | null>(null);
  const { currentCharacter, setCurrentCharacter } = useCharacterStore();

  const getCurrentCharacter = async (id: string | undefined) => {
    if (!id) {
      setCharLoading(false);
      setCharError("Error getting character ID");
      return;
    }

    const fetchCharacter = async () => {
      setCharLoading(true);
      const { data, error } = await api.getCharacterById(id);

      if (error) {
        setCharError(error);
      }

      if (data) {
        setCurrentCharacter(data);
      }

      setCharLoading(false);
    };
    fetchCharacter();
  };

  return { charLoading, charError, currentCharacter, getCurrentCharacter };
};
