"use client";

import Image from "next/image";
import React, { useState } from "react";

const ImageWithFallback = (props: {
  src: string;
  alt: string;
  className: string;
}) => {
  const [imgSrc, setImgSrc] = useState(props.src);

  return (
    <Image
      width={300}
      height={450}
      {...props}
      src={imgSrc}
      onError={() => {
        setImgSrc(
          "https://cdn.vectorstock.com/i/500p/82/33/person-gray-photo-placeholder-woman-vector-24138233.jpg"
        );
      }}
      alt="donor image"
    />
  );
};

export default ImageWithFallback;
