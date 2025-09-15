export function getSwapiUrlId(url: string): string {
  const parts = url.split("/").filter(Boolean);
  return parts[parts.length - 1];
}
