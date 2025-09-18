import { useParams } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import "../../styles/pages/MovieDetails.scss";
import CharacterList from "../../components/CharacterList";
import { useGetAllCharacters } from "../../hooks/useGetAllCharacters";
import { useGetCurrentMovie } from "../../hooks/useGetCurrentMovie";
import { useEffect } from "react";
import DetailPageLoadingSkeleton from "../../components/DetailPageLoadingSkeleton";

const MovieDetails: React.FC = () => {
  const { id } = useParams();
  const { movieError, movieLoading, currentMovie, getCurrentMovie } = useGetCurrentMovie();
  const { characters, charLoading, charError, getCharacters } = useGetAllCharacters(id);

  useEffect(() => {
    if (!currentMovie) {
      getCurrentMovie(id);
    }
  }, [currentMovie, getCurrentMovie, id]);

  useEffect(() => {
    const hasValidCharacters = characters.some((char) => char && char.name);
    if (currentMovie && !hasValidCharacters) {
      getCharacters();
    }
  }, [characters.length, currentMovie, getCharacters]);

  if (charLoading || movieLoading) return <DetailPageLoadingSkeleton itemType="movie" />;

  if (charError) return <div>{charError}</div>;
  if (movieError || !currentMovie) return <div>{movieError}</div>;

  return (
    <div className="movie-details-wrapper">
      <div className="movie-container">
        <div className="movie-image">
          <img src="/starwars.jpg" alt="film poster" />
        </div>
        <div className="movie-info">
          <h1>{currentMovie.title}</h1>
          <p>
            <strong>Episode ID:</strong> {currentMovie.episode_id}
          </p>
          <p>{currentMovie.opening_crawl}</p>
          <p>
            <strong>Director:</strong> {currentMovie.director}
          </p>
          <p>
            <strong>Producer:</strong> {currentMovie.producer}
          </p>
          <p>
            <strong>Release Date:</strong> {currentMovie.release_date}
          </p>
        </div>
      </div>
      <CharacterList showSearchBar={true} searchPlaceholder="Search characters..." />
    </div>
  );
};

export default MovieDetails;
