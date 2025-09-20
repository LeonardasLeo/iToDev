import React, { useEffect } from "react";
import "../styles/pages/Home.scss";
import type { Film } from "../types";
import { useGetAllMovies } from "../hooks/useGetAllMovies";
import MovieCard from "../components/HomeMovieCard";
import Header from "../components/Header";
import HomeLoadingSkeleton from "../components/HomeLoadingSkeleton";
import { useMovieStore } from "../store/useMoviesStore";

const MoviesList: React.FC = () => {
  const { movies, error, loading, fetchMovies } = useGetAllMovies();
  const { setCurrentMovie } = useMovieStore();

  useEffect(() => {
    if (movies.length === 0) {
      fetchMovies();
    }
  }, [movies.length, fetchMovies]);

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
            <MovieCard movie={movie} index={index} onSelect={() => setCurrentMovie(movie)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
