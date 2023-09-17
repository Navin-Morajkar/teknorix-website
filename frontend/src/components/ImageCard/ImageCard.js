import React from "react";
import styles from "../ImageCard/ImageCard.module.css"; // Import your CSS module here
import Image from "next/image";

const ImageCard = ({ data }) => {
  const host = "http://13.233.214.226:1337";
  let aImage = null;

  if (data) {
    aImage = data.attributes.image?.data;
  }

  return (
    <div className={styles.imageCard}>
      {data ? (
        <>
         
            {aImage && (
              <Image
                src={host + aImage.attributes.url}
                alt="Header Image"
                width={700}
                height={700}
                className={styles.backgroundImage}
              />
            )}
          
          <div className={styles.textContainer}>
            <div className={styles.cardText}>
            <h2>{data.attributes.title}</h2>
            <h3>{data.attributes.companyName}</h3>
            <p>{data.attributes.companyLocation}</p>
            <p>{data.attributes.number}</p>
            <p>{data.attributes.email}</p>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ImageCard;
