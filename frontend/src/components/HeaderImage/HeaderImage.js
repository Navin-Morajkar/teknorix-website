import React from "react";
import Image from "next/image";
import { useContext } from 'react';
import { MyContext } from '../MyContext';

const HeaderImage = () => {
  const { headerImageLink } = useContext(MyContext);
  return (
    <>
      <Image
        src={headerImageLink}
        alt="My Image"
        width={1470}
        height={650}
      />
    </>
  );
};

export default HeaderImage;
