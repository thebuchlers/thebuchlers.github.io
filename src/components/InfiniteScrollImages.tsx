import React from "react";
import Marquee from "react-fast-marquee";

interface InfiniteScrollImagesProps {
  images: string[];
  speed?: number;
}

const InfiniteScrollImages: React.FC<InfiniteScrollImagesProps> = ({
  images,
  speed = 50,
}) => {
  return (
    <Marquee gradient={false} speed={speed} pauseOnHover={false} loop={0}>
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          style={{
            height: "70vh",
            marginRight: "14px",
            borderRadius: "10px",
            objectFit: "cover",
          }}
          alt={`scroll-img-${i}`}
        />
      ))}
    </Marquee>
  );
};

export default InfiniteScrollImages;
