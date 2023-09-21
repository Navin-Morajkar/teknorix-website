import React from "react";
import Image from "next/image";
import { useContext, useEffect, useState } from 'react';
import { MyContext } from '../MyContext';
import Styles from './HeaderImage.module.css'

const HeaderImage = () => {
  const { headerImageLink } = useContext(MyContext);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  
  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  });
  
  return (
    <div >
      <Image
        src={headerImageLink}
        alt="My Image"
        width={width}
        height={200}
        className="h-auto"
        // fill
        // priority
      />
    </div>
  );
};

export default HeaderImage;
