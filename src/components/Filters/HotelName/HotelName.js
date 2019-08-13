import React, { useState, useEffect } from "react";

const HotelName = ({ searchTerm, updateFilterSearch }) => {
  return (
    <div>
      Hotel name
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
