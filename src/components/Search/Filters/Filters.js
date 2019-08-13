import React from "react";
import "./Filters.style.scss";
import HotelName from "../HotelName/HotelName";
import Price from "../Price/Price";
import Reset from "../Reset/Reset";

const Filters = ({
  sort,
  updateSort,
  searchTerm,
  filterHotels,
  updateSearch,
  updateFilteredHotels
}) => {
  const updateFilterSearch = searchTerm => {
    updateSearch(searchTerm);
    filterHotels(searchTerm);
  };

  const resetSearch = () => {
    updateSearch("");
    updateSort("Recommended");
    updateFilteredHotels([]);
  };

  return (
    <div>
      <div className="filters-container">
        <div className="filters-bg"></div>
        <div className="filters-overlay"></div>
        <div className="filters">
          <h1>The best hotels Chicago has to offer.</h1>
          <div className="filters-options">
            <HotelName
              updateFilterSearch={updateFilterSearch}
              searchTerm={searchTerm}
            />
            <Price sort={sort} updateSort={updateSort} />
          </div>
          <div className="filters-reset">
            <Reset resetSearch={resetSearch} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
