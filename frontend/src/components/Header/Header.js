import React, { useEffect } from 'react';
import Style from '../Header/Header.module.css';
import Image from 'next/image';

export default function Header({ data }) {
    
    const host = "http://13.233.214.226:1337";
    let headerImage = null;
    let bodyImage = null;

    if (data) {
        headerImage = data.attributes.headerImage?.data;
        bodyImage = data.attributes.bodyImage?.data;
    }
    
    return (
        
        <div>
            {
                data ?
                <>
                    {headerImage && (
                        <Image 
                        src={host + headerImage.attributes.url} 
                        alt="Header Image" 
                        width="1700"
                        height="1000"/>
                    )}              
                
                    <div className={Style.header}>
                        <div style={{ marginLeft: '20%', paddingLeft: '2%' }}>
                            <h1>{data.attributes.title}</h1>
                            <p>{data.attributes.description}</p>
                        </div>

                        {bodyImage && (
                            <Image 
                            src={host + bodyImage.attributes.url} 
                            alt="Body Image" 
                            width="1000"
                            height="400"/>
                        )}
                    </div>                
                </>
                : <></> 

            }
        </div>        
    );    
}