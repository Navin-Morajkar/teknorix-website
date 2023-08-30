import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; 
import Image from 'next/image'; 
import Style from "../container_left/container_left.module.css"

const Container = ({ entryId }) => {
  

  const [data, setHeaderData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchHeaderData() {
      try {
        const response = await fetch('http://13.233.214.226:1337/api/qualities?populate=*'); 
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

  const host = "http://13.233.214.226:1337";

  const containerImage = specificEntry.attributes.image?.data;
  

  return (
    <div key={specificEntry.id} className={Style.flexContainer}>
      <div className={Style.alignLeft}>
      {containerImage && (
        <Image 
            src={host + containerImage.attributes.url} 
            alt="My Image" 
            width="200"
            height="200" />
        )}
        <h1>{specificEntry.attributes.title}</h1>
        <hr />
        <p>{specificEntry.attributes.description}</p>
       
      </div>
    </div>
  );
};

export default Container;