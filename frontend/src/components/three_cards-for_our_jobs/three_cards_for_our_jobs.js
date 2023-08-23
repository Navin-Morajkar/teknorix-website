import React from 'react'
import Style from "../three_cards_for_our_jobs/three_cards_for_our_jobs.module.css" 
import Image from 'next/image';
const three_cards_for_our_jobs = () => {
  return (
    <div className={Style.card}>
   <div className={Style.initialDetails}>
   <Image src="/images/image1.jpg" alt="My Image" width={300} height={300} />
    </div>
    <div className={Style.details}>
      <p>Additional details that appear on hover.Additional details that appear on hover.Additional details that appear on hover.</p> 
      <button className={Style.buttonGreen}>Explore now</button>
    </div>
  </div>
  )
}

export default three_cards_for_our_jobs
