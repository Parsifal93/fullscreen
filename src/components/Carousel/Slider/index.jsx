import React, { useEffect, useState } from "react";
import "../../../styles/index.css";
import slide1 from "../../../img/slide1.jpg";
import slide2 from "../../../img/slide2.jpg";
import slide3 from "../../../img/slide3.jpg";


const arrayImages = [
  <img key={slide1} src={slide1} width="800px" alt="stars" />,
  <img key={slide2} src={slide2} width="800px" alt="stars" />,
  <img key={slide3} src={slide3} width="800px" alt="stars" />,
];

export default function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setActiveIndex((prevSlide) => (prevSlide + 1) % arrayImages.length);

      console.log(activeIndex);
    }, 5000);

    return () => clearInterval(intervalID);
  }, [activeIndex]);

  return (
    <div className="slider">
      <div className="slider-img slider-img-prev"></div>
      <div className="slider-img" key={activeIndex}>
        {arrayImages[activeIndex]}
      </div>
      <div className="slider-img slider-img-next"></div>
      <splitSliders />
    </div>
  );
}
