import React from "react";
import { Link } from "react-router-dom";
import { getShortenedCrawl } from "../utilities/shortenedCrawl";
import { getSwapiUrlId } from "../utilities/swapiIdParse";
import type { MovieCardProps } from "../types/propTypes";

const MovieCard: React.FC<MovieCardProps> = ({ index, movie, onSelect }) => {
  const VITE_ROUTES_MOVIE = import.meta.env.VITE_ROUTES_MOVIE;

  return (
    <div key={index} className="filmCard">
      <Link to={`/${VITE_ROUTES_MOVIE}/${getSwapiUrlId(movie.url)}`} onClick={() => onSelect()}>
        <h3 className="movieTitle">
          <strong>{movie.title}</strong>
        </h3>
        <img src="/starwars.jpg" alt="" />
        <p>{getShortenedCrawl(movie)}</p>
      </Link>
    </div>
  );
};

export default MovieCard;
