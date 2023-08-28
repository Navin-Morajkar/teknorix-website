 
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Style from "../employee_image/employee_image.module.css"
import { useRouter } from 'next/router'; 

const profile_image = ({ entryId }) => {
  const router =useRouter();
  const [data, setHeaderData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchHeaderData() {
      try {
        const response = await fetch('http://13.233.214.226:1337/api/employees?populate=*'); 
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
    // const specificLink = specificEntry.attributes.link;
    router.push(specificLink); // Use Next.js router's push method
  };

  const specificEntry = data.find(entry => entry.id === entryId);
  const host = "http://13.233.214.226:1337";
  const specificLink = specificEntry.attributes?.link;

  // const headerImage = specificEntry.attributes.headerImage?.data;
  // const bodyImage = specificEntry.attributes.bodyImage?.data;
  const pImage = specificEntry.attributes.photo?.data;
  return (
    <div key={specificEntry.id} >

      <div >
      {pImage && (
          <Image className={Style.profileimg }
            src={host + pImage.attributes.url} 
            alt="profile image" 
            width="300"
            height="300"/>
        )}
        </div>
        <h2>{specificEntry.attributes.name}</h2>  
        
     
        <p>{specificEntry.attributes.designation}</p>
        {specificLink && (<button className={Style.buttonGreen} onClick={navigateToSpecificEntry}>
          LinkedIn
        </button>)}
        <p>{specificEntry.attributes.designation2}</p>
     
    </div>
  )
}

export default profile_image;