import React, { useState } from "react";

const defaultImage =
  "https://d2fugp2urx2h4c.cloudfront.net/house-placeholder.jpg";

const ImageContainer = ({ src, alt }) => {
  const [image, updateImage] = useState(src);

  const onError = () => {
    updateImage(defaultImage);
  };

  return <img className="image" src={image} alt={alt} onError={onError} />;
};

export default ImageContainer;
