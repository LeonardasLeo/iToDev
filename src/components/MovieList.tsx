import type { Film } from "../types";
import { useMovieStore } from "../store/useMoviesStore";
import "../styles/scss/List.scss";
import ListInput from "./ListInput";
import ListCard from "./ListCard";
import type { MovieListProps } from "../types/propTypes";
import { useGetList } from "../hooks/useGetList";
import { getSwapiUrlId } from "../utilities/swapiIdParse";
import { useCharacterStore } from "../store/useCharacterStore";

const MovieList: React.FC<MovieListProps> = ({ showSearchBar, searchPlaceholder }) => {
  const VITE_ROUTES_MOVIE = import.meta.env.VITE_ROUTES_MOVIE;
  const { setCurrentMovie } = useMovieStore();
  const { relatedFilms } = useCharacterStore();
  const { query, onChange, filteredData } = useGetList(relatedFilms);

  const getUrl = (url: string) => {
    return `/${VITE_ROUTES_MOVIE}/${getSwapiUrlId(url)}`;
  };

  console.log(filteredData);

  return (
    <div className="listWrapper">
      <h3>
        <strong>Related Films:</strong>
      </h3>
      {showSearchBar && (
        <ListInput query={query} onChange={onChange} searchPlaceholder={searchPlaceholder} />
      )}
      <div className="list">
        {filteredData.map((data: Film, index: number) => (
          <ListCard
            key={index}
            url={getUrl(data.url)}
            data={data}
            displayName={data.title}
            selectItem={() => setCurrentMovie(data)}
            imageSrc="/starwars.jpg"
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
