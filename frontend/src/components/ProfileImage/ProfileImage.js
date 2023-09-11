import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Style from "../EmployeeImage/EmployeeImage.module.css"
import Router from 'next/router';

export default function ProfileImage({ data }) {

  const navigateToSpecificEntry = () => {
    // const specificLink = specificEntry.attributes.link;
    Router.push(specificLink); // Use Next.js router's push method
  };
    
  const host = "http://13.233.214.226:1337";
  const specificLink = data?.attributes?.link;
  let eImage = null;
  

  if (data) {
      eImage = data.attributes.photo?.data;
     
  }
  
  return (
      
      <div>
          {
              data ?
              <>
              
                  {eImage && (
                      <Image  className={Style.profileimg }
                      src={host + eImage.attributes.url} 
                      alt="profile image" 
                      width="300"
                      height="300"/>
                  )}   
                  
                  <h2>{data.attributes.name}</h2>  
        
     
                  <p>{data.attributes.designation}</p>
                  {specificLink && (<button className={Style.buttonGreen} onClick={navigateToSpecificEntry}>
                    LinkedIn
                  </button>)}
                  <p>{data.attributes.designation2}</p>   
                 
              
                              
              </>
              : <></> 

          }
      </div>        
  );    
}