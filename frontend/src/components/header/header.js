import React, { useState, useEffect } from 'react';
import Style from '../header/header.module.css';
import Image from 'next/image';

const Header = ({ entryId }) => {
  const [data, setHeaderData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchHeaderData() {
      try {
        const response = await fetch('http://13.233.214.226:1337/api/headers'); 
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
  const headerImageUrl =  specificEntry.attributes.headerImage.data.attributes.url;

  return (
    <div>
      <div key={specificEntry.id} className={Style.header}>
        <h1>{specificEntry.attributes.title}</h1>
        <p>{specificEntry.attributes.description}</p>
        {/* <Image src={headerImageUrl} alt="Header Image"></Image> */}
        
      </div>
    </div>
  );
}

export default Header;