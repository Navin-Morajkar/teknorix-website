import React, { useState, useEffect } from 'react';
import Image from 'next/image'; 
import Style from "../container_left/container_left.module.css"
const container_right = ({entryId}) => {  
  
  const [data, setHeaderData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchHeaderData() {
      try {
        const response = await fetch('http://13.233.214.226:1337/api/flows?populate=*'); 
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

  const flowImage = specificEntry.attributes.image?.data;
  return (
    <div  key={specificEntry.id} className={Style.flexContainer}>
      <div className={Style.alignLeft}> 
      {flowImage && (
          <Image 
            src={host + flowImage.attributes.url} 
            alt="container Image" 
            width="248"
            height="190"/>
        )}
      
      </div> 
      <div className={Style.alignRight}>
      <h1>{specificEntry.attributes.title} </h1>   
        <hr/>
        <p>{specificEntry.attributes.description}</p>
      </div>
    </div>
  )
}

export default container_right
