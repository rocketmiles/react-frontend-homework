import React, { useState, useEffect } from "react";

const HotelName = ({ searchTerm, updateFilterSearch }) => {
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
