import React, { useState, useEffect } from 'react';
import Style from '../Header/Header.module.css';
import Image from 'next/image';

const Header = ({ entryId }) => {
  const [data, setHeaderData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchHeaderData() {
      try {
        const response = await fetch('http://13.233.214.226:1337/api/headers?populate=*'); 
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

  const headerImage = specificEntry.attributes.headerImage?.data;
  const bodyImage = specificEntry.attributes.bodyImage?.data;
  
  return (
    <div>
      {headerImage && (
          <Image 
            src={host + headerImage.attributes.url} 
            alt="Header Image" 
            width="1500"
            height="1000"/>
        )}


      
      <div key={specificEntry.id} className={Style.header}>
      <div style={{ marginLeft: '20%', paddingLeft: '2%' }}>
        <h1>{specificEntry.attributes.title}</h1>
        <p>{specificEntry.attributes.description}</p>
        </div>
        {bodyImage && (
          <Image 
            src={host + bodyImage.attributes.url} 
            alt="Body Image" 
            width="1000"
            height="400"/>
        )}
        
        
        
      </div>
      
    </div>
  );
}

export default Header;