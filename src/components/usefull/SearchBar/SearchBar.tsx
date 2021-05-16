import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import "./SearchBar.scss";

function SearchBar(props: any) {
  const { handleSearch } = props;
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Lait, oeufs, eau..."
        onChange={(e) => handleSearch(e.target.value)}
      />
      <IconButton className="search-icon">
        <SearchIcon />
      </IconButton>
    </div>
  );
}

export default SearchBar;
