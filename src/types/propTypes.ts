import type { Character, Film } from ".";

export type RelatedListProps = {
  data: Character[] | Film[];
  setData: (data: Character[] | Film[]) => void;
};

export type CardProps = {
  index: number;
  data: Character | Film;
  url: string;
  onClick: () => void;
};

export type CharacterListProps = {
  showSearchBar?: boolean;
  searchPlaceholder?: string;
};

export type MovieListProps = {
  showSearchBar?: boolean;
  searchPlaceholder?: string;
};

export type ListInputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  query: string;
  searchPlaceholder?: string;
};

export type ListCardProps = {
  data: Character | Film;
  url: string;
  displayName: string;
  selectItem: (data: Film | Character) => void;
  imageSrc: string;
};

export type MovieCardProps = {
  index: number;
  movie: Film;
  onSelect: () => void;
};

export type LoadingSkeletonProps = {
  itemType: "character" | "movie";
}
