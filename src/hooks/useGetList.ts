import { useEffect, useMemo, useState } from "react";
import { debounce } from "lodash";
import type { Character, Film } from "../types";

export const useGetList = <T extends Film | Character>(data: T[]) => {
  const [filteredData, setFilteredData] = useState<T[]>(data);
  const [query, setQuery] = useState<string>("");
  const [debouncedQuery, setDebouncedQuery] = useState<string>(query);

  // Handle input change with debounce
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    updateDebouncedQuery(e.target.value);
  };

  // Debounce function every 1 second
  const updateDebouncedQuery = useMemo(
    () =>
      debounce((value: string) => {
        setDebouncedQuery(value);
      }, 1000),
    []
  );

  //Filter data based on debounced query
  const getFilteredData = useMemo(() => {
    return data.filter((obj) => {
      if ("name" in obj) {
        const objNameLower = obj.name.toLowerCase();
        const queryLower = debouncedQuery.toLowerCase();
        return objNameLower.includes(queryLower);
      } else {
        const objNameLower = obj.title.toLowerCase();
        const queryLower = debouncedQuery.toLowerCase();
        return objNameLower.includes(queryLower);
      }
    });
  }, [data, debouncedQuery]);

  // Update filtered data when debounced query or data changes
  useEffect(() => {
    setFilteredData(getFilteredData);
  }, [debouncedQuery, data, getFilteredData]);

  return { filteredData, query, onChange };
};
