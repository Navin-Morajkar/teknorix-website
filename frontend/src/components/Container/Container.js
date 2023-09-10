import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; 
import Image from 'next/image'; 
import Style from "../ContainerLeft/ContainerLeft.module.css"

const Container = ({ data }) => {
  
  const host = "http://13.233.214.226:1337";
  let containerImage = null;

  if (data) {
    containerImage = data.attributes.image?.data;
  }  

  return (    
    <div className={Style.flexContainer}>

      {
        data ?
        <>
          <div className={Style.alignLeft}>
            {containerImage && (
              <Image 
                src={host + containerImage.attributes.url} 
                alt="My Image" 
                width="200"
                height="200" />
            )}
            <h1>{data.attributes.title}</h1>
            <hr />
            <p>{data.attributes.description}</p>
          
          </div>
        </>
        : <></>
      }
      
    </div>
  );
};

export default Container;