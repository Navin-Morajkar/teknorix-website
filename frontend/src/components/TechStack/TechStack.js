import React from 'react' 
import Image from 'next/image';
import Style from "../TechStack/TechStack.module.css"

const profileimg = () => {
  return (
    <div classNmame={Style.card} >
    <Image src ="/images/image1.jpg" alt="My Image" width={300} height={300} />
    <h5> "ASP.NET"</h5>
    <hr />
    <div >
    <p>An open-source server-side web application framework to produce dynamic software applications.</p>
    </div>
   
    </div>

    
  )
}

export default profileimg;