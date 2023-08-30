import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Style from "../employee_image/employee_image.module.css"

const employee_image = ({ entryId }) => {
  
  const [data, setHeaderData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchHeaderData() {
      try {
        const response = await fetch('http://13.233.214.226:1337/api/employees?populate=*&pagination[start]=0&pagination[limit]=100'); 
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
  
  // const headerImage = specificEntry.attributes.headerImage?.data;
  // const bodyImage = specificEntry.attributes.bodyImage?.data;
  const eImage = specificEntry.attributes.photo?.data;
  return (
    <div key={specificEntry.id} >

      <div >
      {eImage && (
          <Image className={Style.profileimg }
            src={host + eImage.attributes.url} 
            alt="profile image" 
            width="285"
            height="285"/>
        )}
        </div>
        <h2>{specificEntry.attributes.name}</h2>  
        
     
        <p>{specificEntry.attributes.designation}</p>
       
        <p>{specificEntry.attributes.designation2}</p>
     
    </div>
  )
}

export default employee_image;