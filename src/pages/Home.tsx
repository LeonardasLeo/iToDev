import React, { useEffect } from "react";
import "../styles/scss/Home.scss";
import type { Film } from "../types";
import { getSwapiUrlId } from "../utilities/swapiIdParse";
import { useGetAllMovies } from "../hooks/useGetAllMovies";
import { useGetCurrentMovie } from "../hooks/useGetCurrentMovie";
import MovieCard from "../components/MovieCard";

const MoviesList: React.FC = () => {
  const { movies, error, fetchMovies } = useGetAllMovies();
  const { getCurrentMovie } = useGetCurrentMovie();

  useEffect(() => {
    if (movies.length === 0) {
      fetchMovies();
    }
  }, [movies.length, fetchMovies]);

  const movieSelected = (movie: Film) => {
    const movieId = getSwapiUrlId(movie.url);
    getCurrentMovie(movieId);
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="wrapper">
      
      <div className="content">
        <div className="header">
          <h1 className="main-title">
            MAY THE FORCE <br /> BE WITH YOU
          </h1>
          <p>No, I am your father.</p>
          <p>I find your lack of faith disturbing.</p>
        </div>
        <div className="movie-list">
          
          {movies.map((movie: Film, index: number) => (
            <MovieCard
              movie={movie}
              index={index}
              onSelect={() => {
                movieSelected(movie);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
