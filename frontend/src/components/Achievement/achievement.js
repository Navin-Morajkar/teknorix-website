import React, { useState, useEffect } from "react";
import Style from "../Achievement/achievement.module.css";

function Achievement({ data }) {

  const incrementers = [
    { initialValue: 0, incrementValue: 1, maxValue: 10 },
    { initialValue: 0, incrementValue: 2, maxValue: 20 },
    { initialValue: 0, incrementValue: 3, maxValue: 30 },
    { initialValue: 0, incrementValue: 3, maxValue: 30 },
    { initialValue: 0, incrementValue: 1, maxValue: 10 },
    { initialValue: 0, incrementValue: 2, maxValue: 20 },
    { initialValue: 0, incrementValue: 3, maxValue: 30 },
    { initialValue: 0, incrementValue: 3, maxValue: 30 }
  ];

  const AutoIncrementer = ({ initialValue, incrementValue, maxValue }) => {
    const [currentNumber, setCurrentNumber] = useState(initialValue);

    useEffect(() => {
      const interval = setInterval(() => {
        if (currentNumber < maxValue) {
          setCurrentNumber(currentNumber + incrementValue);
        }
      }, 100);

      return () => {
        clearInterval(interval);
      };
    }, [currentNumber, incrementValue, maxValue]);

    return (
      <span>
        {currentNumber === maxValue && (
          <img
            src="https://www.teknorix.com/wp-content/uploads/2019/01/Years-of-experience.svg"
            width={200}
            height={200}
          />
        )}
        <span className={Style.incrementor}>{currentNumber}+</span>
        <span>Years of business</span>
      </span>
    );
  };

  return (
    <div>
      <div className={Style.columnContainer}>
        <div className={Style.rowContainer}>
          {incrementers.slice(4).map((incrementer, index) => (
            <span key={index}>
              <AutoIncrementer
                initialValue={incrementer.initialValue}
                incrementValue={incrementer.incrementValue}
                maxValue={incrementer.maxValue}
              />
            </span>
          ))}
        </div>
        <div className={Style.rowContainer}>
          {incrementers.slice(4).map((incrementer, index) => (
            <span key={index}>
              <AutoIncrementer
                initialValue={incrementer.initialValue}
                incrementValue={incrementer.incrementValue}
                maxValue={incrementer.maxValue}
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Achievement;
