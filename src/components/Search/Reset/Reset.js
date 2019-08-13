import React, { useState, useEffect } from "react";

const Reset = ({ resetSearch }) => {
  return (
    <button onClick={resetSearch} className="button">
      Reset
    </button>
  );
};

export default Reset;
