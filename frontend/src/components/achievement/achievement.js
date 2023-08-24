import React, { useState, useEffect } from 'react';
import Image from 'next/image';
const achievement = () => { 
    const [currentNumber1, setCurrentNumber1] = useState(0);
  const [currentNumber2, setCurrentNumber2] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentNumber1 < 10) {
        setCurrentNumber1(currentNumber1 + 1);
      }

      if (currentNumber2 < 20) {
        setCurrentNumber2(currentNumber2 + 2);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [currentNumber1, currentNumber2]);

  return (
    <div>
    <Image src="/images/image1.jpg" alt="My Image" width={70} height={70} />
    <span>{currentNumber1}</span>
      <p>Year in business</p>
    </div>
  );
}

export default achievement

