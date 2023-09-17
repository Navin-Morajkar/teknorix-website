import Image from 'next/image';
import { Button } from 'antd';
import React, { useState, useEffect } from 'react';

const Expertise = ({ entryId }) => {
  const [data, setHeaderData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchHeaderData() {
      try {
        const response = await fetch('http://13.233.214.226:1337/api/services?populate=*');
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
    <div key={specificEntry.id} className="md:flex md:justify-between mt-4">
      <div className="md:w-1/2 md:mr-auto md:ml-4">
        {containerImage && (
          <Image
            src={host + containerImage.attributes.url}
            alt="My Image"
            width={200}
            height={200}
          />
        )}
      </div>
      <div className="md:w-1/2 md:ml-auto md:mr-4 md:mt-4">
        <h1 className="font-bold text-2xl mb-4">{specificEntry.attributes.title}</h1>
        <hr className="bg-blue-500 absolute -mt-2 w-24 h-2 font-bold" />
        <p className="text-base leading-8">{specificEntry.attributes.description}</p>
        <Button className="buttonGreen mt-4">Learn More</Button>
      </div>
    </div>
  );
}

export default Expertise;
