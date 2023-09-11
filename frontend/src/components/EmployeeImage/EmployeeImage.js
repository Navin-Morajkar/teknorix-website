import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Style from "../EmployeeImage/EmployeeImage.module.css"


export default function EmployeeImage({ data }) {
    
  const host = "http://13.233.214.226:1337";
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
                      width="270"
                      height="270"/>
                  )}   
                  
                  <h2>{data.attributes.name}</h2>  
        
     
                  <p>{data.attributes.designation}</p>
                  
                  <p>{data.attributes.designation2}</p>   
                    
              
                              
              </>
              : <></> 

          }
      </div>        
  );    
}