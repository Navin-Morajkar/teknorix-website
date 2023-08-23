import React from 'react'
import Style from "../six_cards/six_cards.module.css"
import Image from 'next/image';
const six_cards = () => {
  return (
    <div className={Style.card}>

      <div className={Style.initialDetails}>
        <Image src="/images/icons.jpg" alt="My Image" width={200} height={200} /> 
        <h2>Carina</h2>  
        <div className={Style.flexContainer}>
          <hr className={Style.hr} /> 
        </div>
      </div>
      <div className={Style.details}>
        <p>Additional details that appear on hover.</p>
      </div>
    </div>
  )
}

export default six_cards
