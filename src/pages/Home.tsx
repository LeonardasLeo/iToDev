import React, { useEffect } from "react";
import "../styles/pages/Home.scss";
import type { Film } from "../types";
import { getSwapiUrlId } from "../utilities/swapi";
import { useGetAllMovies } from "../hooks/useGetAllMovies";
import { useGetCurrentMovie } from "../hooks/useGetCurrentMovie";
import MovieCard from "../components/HomeMovieCard";
import Header from "../components/Header";
import HomeLoadingSkeleton from "../components/HomeLoadingSkeleton";

const MoviesList: React.FC = () => {
  const { movies, error, loading, fetchMovies } = useGetAllMovies();
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

  if (loading) {
    return <HomeLoadingSkeleton />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="home-wrapper">
      <div className="content">
        <Header />
        <div className="home-movies-list">
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
