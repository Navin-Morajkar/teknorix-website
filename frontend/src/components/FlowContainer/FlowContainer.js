import React, { useEffect } from 'react';
import Style from "../ContainerLeft/ContainerLeft.module.css"
import Image from 'next/image';

export default function FlowContainer({ data }) {
    
    const host = "http://13.233.214.226:1337";
    let flowImage = null;
    

    if (data) {
        flowImage = data.attributes.image?.data;
    
    }
    
    return (
        
        <div>
            {
                data ?
                <>
                <div  className={Style.flexContainer}>
                    <div className={Style.alignLeft}> 
                    {flowImage && (
                        <Image 
                        src={host + flowImage.attributes.url} 
                        alt="Flow Image" 
                        width="500"
                        height="500"/>
                    )}              
                    </div> 
                      <div className={Style.alignRight}>
                      <h1>{data.attributes.title} </h1>   
                        <hr/>
                        <p>{data.attributes.description}</p>
                      </div>
                    </div>     
                </>
                : <></> 

            }
        </div>        
    );    
}