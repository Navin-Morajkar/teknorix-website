import React from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image'; 
import Style from "../container_left/container_left.module.css"
const container_right = () => {  
  const router = useRouter();
  const handleClick = () => {
    router.push('/page2');
  };
  return (
    <div  className={Style.flexContainer}>
      <div className={Style.alignLeft}> 
      <Image src="/images/image2.png" alt="My Image" width={500} height={500} />
      
      </div> 
      <div className={Style.alignRight}>
      <h1>Jobsoid </h1>   
        <hr/>
        <p>Our cloud based SaaS offering which helps organizations of all sizes to streamline their recruitment process 
          right from advertising a job opening to making a successful hire. Jobsoid is an intelligent system to effectively 
          manage advertising, sourcing, communication and collaboration on a single recruitment platform. Jobsoid mobile apps
           available for Android and iOS enable recruiters  to manage their recruitment while on the move.</p>
           <button className={Style.buttonGreen}  onClick={handleClick}>Explore now</button>
      </div>
    </div>
  )
}

export default container_right
