import React, { useState, useEffect } from 'react'; 
import { useRouter } from 'next/router';
import Styles from "../OurJobs/OurJobs.module.css";

import Image from "next/image";
const our_jobs = ({entryId}) => {  
  const router = useRouter(); // Use Next.js router for React
  const [data, setHeaderData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchHeaderData() {
      try {
        const response = await fetch('http://13.233.214.226:1337/api/our-Works?populate=*'); 
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
  
  const navigateToSpecificEntry = () => {
    const specificLink = specificEntry.attributes.link;
    router.push(specificLink); // Use Next.js router's push method
  };

  const specificEntry = data.find(entry => entry.id === entryId);
  console.log(specificEntry);
  // const headerImageUrl =  specificEntry.attributes.headerImage.data.attributes.url;
  
  const host = "http://13.233.214.226:1337";


  
  const ourJobImage = specificEntry.attributes.image.data[0]; 

  return (
 
      <div key={specificEntry.id} className={Styles.card}>
        <div className={Styles.initialDetails}>
        {ourJobImage && (
          <Image 
          src={host + ourJobImage.attributes.url} 
            alt="container Image" 
            width="248"
            height="190"/>
        )}
          <h3 className={Styles.title}>{specificEntry.attributes.title}</h3>
        </div>
        <div className={Styles.details}>
          <p>
          {specificEntry.attributes.title}
          </p>
          <button className={Styles.arrowButton} onClick={navigateToSpecificEntry}>+</button>
        </div>
      </div>
   
  );
};

export default our_jobs;
