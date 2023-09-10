import React, { useEffect } from 'react';
import Style from "../SixCards/SixCards.module.css" 
import Image from 'next/image';

export default function SixCards({ data }) {
    
    const host = "http://13.233.214.226:1337";
    let aImage = null;
    

    if (data) {
        aImage = data.attributes.image?.data;
    
    }
    
    return (
        
        <div>
            {
                data ?
                <>
                <div  className={Style.card}>

                    <div className={Style.initialDetails}>
                    {aImage && (
                        <Image 
                        src={host + aImage.attributes.url} 
                        alt="Header Image" 
                        width="700"
                        height="700"/>
                    )}              
                      <h2>{data.attributes.name}</h2>  
                      <div className={Style.flexContainer}>
                        <hr className={Style.hr} /> 
                      </div>
                    </div>
                    <div className={Style.details}>
                      <p>{data.attributes.overlayText}</p>
                    </div>     
                    </div>          
                </>
                : <></> 

            }
        </div>        
    );    
}