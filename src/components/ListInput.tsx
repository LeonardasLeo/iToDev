import type { ListInputProps } from "../types/propTypes";
import '../styles/components/listInput.scss'

const ListInput: React.FC<ListInputProps> = ({
  searchPlaceholder,
  query,
  onChange,
}) => {
  return (
    <input
      className="list-search-input"
      type="text"
      name="search"
      placeholder={searchPlaceholder}
      value={query}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
    />
  );
};

export default ListInput;
