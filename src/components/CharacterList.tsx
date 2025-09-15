import React from "react";
import type { Character } from "../types";
import { useCharacterStore } from "../store/useCharacterStore";
import { getSwapiUrlId } from "../utilities/swapiIdParse";
import ListInput from "./ListInput";
import ListCard from "./ListCard";
import "../styles/scss/List.scss";
import type { CharacterListProps } from "../types/propTypes";
import { useGetList } from "../hooks/useGetList";

const CharacterList: React.FC<CharacterListProps> = ({
  showSearchBar,
  searchPlaceholder,
}) => {
  const VITE_ROUTES_CHARACTER = import.meta.env.VITE_ROUTES_CHARACTER;
  const { setCurrentCharacter, characters } = useCharacterStore();
  const { filteredData, query, onChange } = useGetList(characters);

  const getUrl = (url: string) => {
    return `/${VITE_ROUTES_CHARACTER}/${getSwapiUrlId(url)}`;
  };

  return (
    <div className="listWrapper">
      <h3>
        <strong>Characters</strong>
      </h3>
      {showSearchBar && (
        <ListInput
          query={query}
          onChange={onChange}
          searchPlaceholder={searchPlaceholder}
        />
      )}
      <div className="list">
        {filteredData.map((data: Character, index: number) => (
          <ListCard
            key={index}
            url={getUrl(data.url)}
            data={data}
            displayName={data.name}
            selectItem={() => setCurrentCharacter(data)}
            imageSrc="/character.jpg"
          />
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
