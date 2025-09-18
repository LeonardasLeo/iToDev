export type Film = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  url: string;
};

export type Character = {
  json(): Character | PromiseLike<Character>;
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
};

export type CharacterStore = {
  characters: Character[] | [];
  currentCharacter: Character | undefined;
  relatedFilms: Film[] | [];
  error: string | null;
  setCharacters: (data: Character[]) => void;
  setCurrentCharacter: (data: Character) => void;
  setRelatedFilms: (data: Film[]) => void;
};

export type MovieStore = {
  movies: Film[] | [];
  currentMovie: Film | undefined;
  error: string | null;
  setMovies: (data: Film[]) => void;
  setCurrentMovie: (data: Film) => void;
};

export type ApiResponse<T> = {
  data?: T;
  error?: string;
};
