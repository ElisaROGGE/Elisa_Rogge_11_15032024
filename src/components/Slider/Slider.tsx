import React, { useState } from "react";
import "./Slider.scss";

interface SliderProps {
  pictures: string[];
}

const Slider: React.FC<SliderProps> = ({ pictures }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % pictures.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + pictures.length) % pictures.length
    );
  };

  return (
    <div className="image-slider">
      {currentImageIndex > 0 && (
        <button className="slider-button prev" onClick={prevImage}>
          &#10094;
        </button>
      )}
      <img src={pictures[currentImageIndex]} alt="" />
      {currentImageIndex < pictures.length - 1 && (
        <button className="slider-button next" onClick={nextImage}>
          &#10095;
        </button>
      )}
    </div>
  );
};

export default Slider;
