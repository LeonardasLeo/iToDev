import React from "react";
import { Link } from "react-router-dom";
import { getShortenedCrawl } from "../utilities/movie";
import type { MovieCardProps } from "../types/propTypes";
import { getUrl } from "../utilities/routing";
import "../styles/components/homeMovieCard.scss";

const MovieCard: React.FC<MovieCardProps> = ({ index, movie, onSelect }) => {
  const VITE_ROUTES_MOVIE = import.meta.env.VITE_ROUTES_MOVIE;

  return (
    <div key={index} className="home-movie-card">
      <Link to={getUrl(VITE_ROUTES_MOVIE, movie.url)} onClick={() => onSelect()}>
        <h3 className="movieTitle">
          <strong>{movie.title}</strong>
        </h3>
        <img src="/starwars.jpg" alt="movie list image" />
        <p>{getShortenedCrawl(movie)}</p>
      </Link>
    </div>
  );
};

export default MovieCard;
