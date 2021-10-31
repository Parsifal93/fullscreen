import React, { useState } from "react";
import "../../../styles/index.css";
import slide1 from "../../../img/slide1.jpg";
import slide2 from "../../../img/slide2.jpg";
import slide3 from "../../../img/slide3.jpg";

const arrayImages = [slide1, slide2, slide3];

export default function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const increment = () => {
    setActiveIndex((prev) => (prev + 1) % arrayImages.length);
  };
  const decrement = () => {
    setActiveIndex(
      (prev) => (prev - 1 + arrayImages.length) % arrayImages.length
    );
  };

  function handleStatusChage() {
    if (intervalId === null) {
      const interval = setInterval(() => {
        setActiveIndex((prevSlide) => (prevSlide + 1) % arrayImages.length);
        setIntervalId(interval);
      }, 1000);
    } else {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  }
function fullScreen() {
  const elem = document.getElementById("Fimg");
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  }
}
const arayJSX = arrayImages.map((arrayImages) => arrayImages *3);

  return (
    <div className="slider">
      <div className="slider-img slider-img-prev"></div>
      <div className="slider-img" key={activeIndex}>
        <button onClick={decrement}>Back</button>
        <button onClick={handleStatusChage}>Auto</button>
       <div id ="Fimg"><img style={{display: 'block'}}  src={arrayImages[activeIndex]} alt=""  width="800px"/></div>
        <button onClick={increment}>Next</button>
        <button onClick={fullScreen}>fullScreen</button>
      </div>
      <div className="slider-img slider-img-next"></div>
    </div>
  );
}
