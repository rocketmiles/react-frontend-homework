import React, { useState } from "react";

import defaultImage from "./house-placeholder.jpg";

const Image = ({ src, alt }) => {
  const [image, updateImage] = useState(src);

  const onError = () => {
    updateImage(defaultImage);
  };

  return <img className="image" src={image} alt={alt} onError={onError} />;
};

export default Image;
