import type { Film } from "../types";

export const getShortenedCrawl = (movie: Film) => {
  if (movie.opening_crawl.length > 128) {
    return movie.opening_crawl.slice(0, 128) + "...";
  } else {
    return movie.opening_crawl;
  }
};
