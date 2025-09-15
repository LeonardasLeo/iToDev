import type { ListInputProps } from "../types/propTypes";

const ListInput: React.FC<ListInputProps> = ({
  searchPlaceholder,
  query,
  onChange,
}) => {
  return (
    <input
      className="listSearchInput"
      type="text"
      placeholder={searchPlaceholder}
      value={query}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e);
      }}
    />
  );
};

export default ListInput;
