import type { Film, Character, ApiResponse } from "../types";
import { SWAPI_ROUTES } from "./swapiRoutes";

const SWAPI_BASE_URL: string = import.meta.env.VITE_SWAPI_BASE_URL;

export const api = {
  async getAllMovie(): Promise<ApiResponse<Film[]>> {
    const res: Response = await fetch(`${SWAPI_BASE_URL}/${SWAPI_ROUTES.FILMS}`);
    if (!res.ok)
      return { error: `Error getting films. Error code: ${res.status} ${res.statusText}` };
    return { data: await res.json() };
  },
  async getSingleMovie(id: string): Promise<ApiResponse<Film>> {
    const res: Response = await fetch(`${SWAPI_BASE_URL}/${SWAPI_ROUTES.FILMS}/${Number(id)}`);
    if (!res.ok)
      return { error: `Error getting film. Error code: ${res.status} ${res.statusText}` };
    return { data: await res.json() };
  },
  async getCharacterByUrl(url: string): Promise<ApiResponse<Character>> {
    const res: Response = await fetch(url);
    if (!res.ok)
      return { error: `Error getting character. Error code: ${res.status} ${res.statusText}` };
    return { data: await res.json() };
  },
  async getCharacterById(id: string): Promise<ApiResponse<Character>> {
    const res: Response = await fetch(`${SWAPI_BASE_URL}/${SWAPI_ROUTES.CHARACTERS}/${Number(id)}`);
    if (!res.ok)
      return { error: `Error getting character. Error code: ${res.status} ${res.statusText}` };
    return { data: await res.json() };
  },
};
