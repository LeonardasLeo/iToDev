import React from "react";
import type { Character } from "../types";
import { useCharacterStore } from "../store/useCharacterStore";
import ListInput from "./ListInput";
import ListCard from "./ListCard";
import "../styles/components/list.scss";
import type { CharacterListProps } from "../types/propTypes";
import { useGetList } from "../hooks/useGetList";
import { getUrl } from "../utilities/routing";
import { routes } from "../routes";

const CharacterList: React.FC<CharacterListProps> = ({ showSearchBar, searchPlaceholder }) => {
  const { setCurrentCharacter, characters } = useCharacterStore();
  const { filteredData, query, onChange } = useGetList(characters);

  return (
    <div className="list-wrapper">
      <h2 className="list-title">
        <strong>Characters</strong>
      </h2>
      {showSearchBar && (
        <ListInput query={query} onChange={onChange} searchPlaceholder={searchPlaceholder} />
      )}
      <div className="list">
        {filteredData.map((data: Character, index: number) => (
          <ListCard
            key={index}
            url={getUrl(routes.character, data.url)}
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
