import React from "react";
import Image from "next/image";
import { useContext, useEffect, useState } from 'react';
import { MyContext } from '../MyContext';

const HeaderImage = () => {
  const { headerImageLink } = useContext(MyContext);
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    setWidth(window.innerWidth);
  });
  
  return (
    <>
      <Image
        src={headerImageLink}
        alt="My Image"
        width={width}
        height={650}
      />
    </>
  );
};

export default HeaderImage;
