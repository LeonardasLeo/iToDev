import type { Film } from "../types";
import { useMovieStore } from "../store/useMoviesStore";
import "../styles/components/list.scss";
import ListInput from "./ListInput";
import ListCard from "./ListCard";
import type { MovieListProps } from "../types/propTypes";
import { useGetList } from "../hooks/useGetList";
import { useCharacterStore } from "../store/useCharacterStore";
import { getUrl } from "../utilities/routing";

const MovieList: React.FC<MovieListProps> = ({ showSearchBar, searchPlaceholder }) => {
  const VITE_ROUTES_MOVIE = import.meta.env.VITE_ROUTES_MOVIE;
  const { setCurrentMovie } = useMovieStore();
  const { relatedFilms } = useCharacterStore();
  const { query, onChange, filteredData } = useGetList(relatedFilms);

  return (
    <div className="list-wrapper">
      <p className="list-title">
        <strong>Related Films:</strong>
      </p>
      {showSearchBar && (
        <ListInput query={query} onChange={onChange} searchPlaceholder={searchPlaceholder} />
      )}
      <div className="list">
        {filteredData.map((data: Film, index: number) => (
          <ListCard
            key={index}
            url={getUrl(VITE_ROUTES_MOVIE, data.url)}
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
