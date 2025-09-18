import React from "react";
import { Link } from "react-router-dom";
import { getShortenedCrawl } from "../utilities/movie";
import type { MovieCardProps } from "../types/propTypes";
import { getUrl } from "../utilities/routing";
import "../styles/components/homeMovieCard.scss";
import { routes } from "../routes";

const MovieCard: React.FC<MovieCardProps> = ({ index, movie, onSelect }) => {

  return (
    <div key={index} className="home-movie-card">
      <Link to={getUrl(routes.movie, movie.url)} onClick={() => onSelect()}>
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
