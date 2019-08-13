import React, { useState, useEffect } from "react";
import HotelName from "./HotelName/HotelName";
import Price from "./Price/Price";
import Reset from "./Reset/Reset";

const Filters = ({ sort, updateSort, filterHotels }) => {
  const [searchTerm, updateSearch] = useState("");

  const updateFilterSearch = searchTerm => {
    updateSearch(searchTerm);
    filterHotels(searchTerm);
  };

  return (
    <div>
      <div className="filters">
        <HotelName
          updateFilterSearch={updateFilterSearch}
          searchTerm={searchTerm}
        />
        <Price sort={sort} updateSort={updateSort} />
        {/* <Reset resetSearch={resetSearch} /> */}
      </div>
    </div>
  );
};

export default Filters;
