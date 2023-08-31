import React, { useState, useEffect } from 'react';
import './slidingquotes.module.css';

const ImageSlider = () => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      document.getElementById('radio' + counter).checked = true;
      setCounter((prevCounter) => (prevCounter >= 4 ? 1 : prevCounter + 1));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [counter]);

  return (
    <div className="slider">
      <div className="slides">
        <input type="radio" name="radio-btn" id="radio1" />
        <input type="radio" name="radio-btn" id="radio2" />
        <input type="radio" name="radio-btn" id="radio3" />
        <input type="radio" name="radio-btn" id="radio4" />

        <div className="slide first">
          <img src="1.jpg" alt="" />
        </div>
        <div className="slide">
          <img src="2.jpg" alt="" />
        </div>
        <div className="slide">
          <img src="3.jpg" alt="" />
        </div>
        <div className="slide">
          <img src="4.jpg" alt="" />
        </div>

        <div className="navigation-auto">
          <div className="auto-btn1"></div>
          <div className="auto-btn2"></div>
          <div className="auto-btn3"></div>
          <div className="auto-btn4"></div>
        </div>
      </div>

      <div className="navigation-manual">
        <label htmlFor="radio1" className="manual-btn"></label>
        <label htmlFor="radio2" className="manual-btn"></label>
        <label htmlFor="radio3" className="manual-btn"></label>
        <label htmlFor="radio4" className="manual-btn"></label>
      </div>
    </div>
  );
};

export default ImageSlider;
