import React, { useState, useEffect } from "react";

const Price = ({ sort, updateSort }) => {
  return (
    <div>
      Price
      <select
        name="Sort Price"
        value={sort}
        onChange={e => updateSort(e.target.value)}
        className="select"
      >
        <option value="Recommended">Recommended</option>
        <option value="Ascending">Price low-to-high</option>
        <option value="Descending">Price high-to-low</option>
      </select>
    </div>
  );
};

export default Price;
