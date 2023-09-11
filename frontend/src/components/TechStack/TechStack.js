import React from 'react' 
import Image from 'next/image';
import Style from "../TechStack/TechStack.module.css"

export default function profileimg ({ data }) {   
  const host = "http://13.233.214.226:1337"; 
  let teckStackImage = null; 
  if (data) {
    teckStackImage = data.attributes.image?.data;
    
}
  return ( 
    <div>
    {
        data ?
        <> 
    <div classNmame={Style.card} >
    {teckStackImage && (
          <Image 
            src={host + teckStackImage.attributes.url} 
            alt="container Image" 
            width="300"
            height="300"/>
        )}
    <h5> {data.attributes.title}</h5>
    <hr />
    <div >
    <p>{data.attributes.description}</p>
    </div>
   
    </div>

    </>
                : <></> 

            }
        </div>        
    );    
}
