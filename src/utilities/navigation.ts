import { getSwapiUrlId } from "./swapi";

export const getUrl = (route: string, url: string) => {
  return `/${route}/${getSwapiUrlId(url)}`;
};
