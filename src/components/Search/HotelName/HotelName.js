import React from "react";

const HotelName = props => {
  const { searchTerm, updateFilterSearch } = props;

  return (
    <div className="filter-container">
      <h3>Hotel Name</h3>

      <input
        value={searchTerm}
        onChange={e => updateFilterSearch(e.target.value)}
        type="text"
        className="input"
      />
    </div>
  );
};

export default HotelName;
