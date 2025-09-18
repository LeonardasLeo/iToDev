import { vi } from "vitest";
import type { Character, Film } from "../../types";

export const mockMovie = {
  title: "A New Hope",
  episode_id: 4,
  opening_crawl: "It is a period of civil war...",
  director: "George Lucas",
  producer: "Gary Kurtz, Rick McCallum",
  release_date: "1977-05-25",
  characters: ["1", "4"],
  url: "https://swapi.dev/api/films/1/",
} as Film;

export const mockCharacters = [
  { name: "Luke Skywalker", url: "1" },
  { name: "Darth Vader", url: "4" },
] as Character[];

export const mockUseGetCurrentMovie = vi.fn();
export const mockUseGetAllCharacters = vi.fn();
