import React from "react";
import PropTypes from "prop-types";

const Search = ({ search, setSearch }) => {
  return (
    <div className="inputBox">
      <input
        type="text"
        required="required"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <span>Filtre par Bateau / Evenement</span>
    </div>
  );
};
Search.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.string.isRequired,
};
export default Search;
