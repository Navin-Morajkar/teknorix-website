import React, { useState, useEffect } from 'react';
import Style from "../SixCards/SixCards.module.css" 

import Image from 'next/image';
const six_cards = ({entryId}) => { 
    
  const [data, setHeaderData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchHeaderData() {
      try {
        const response = await fetch('http://13.233.214.226:1337/api/advantages?populate=*'); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setHeaderData(jsonData.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchHeaderData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const specificEntry = data.find(entry => entry.id === entryId);
  // const headerImageUrl =  specificEntry.attributes.headerImage.data.attributes.url;
 
  const host = "http://13.233.214.226:1337";

  const cardImage = specificEntry.attributes.image?.data;
  return (
    <div key={specificEntry.id} className={Style.card}>

      <div className={Style.initialDetails}>
      {cardImage && (
          <Image 
            src={host + cardImage.attributes.url} 
            alt="card Image" 
            width="80"
            height="80"/>
        )}
        <h2>{specificEntry.attributes.name}</h2>  
        <div className={Style.flexContainer}>
          <hr className={Style.hr} /> 
        </div>
      </div>
      <div className={Style.details}>
        <p>{specificEntry.attributes.overlayText}</p>
      </div>
    </div>
  )
}

export default six_cards
