import React, { useEffect } from "react";
import Style from "../ImageCard/ImageCard.module.css"; // Import your CSS module here
import Image from "next/image";

export default function ImageCard({ data }) {
  const host = "http://13.233.214.226:1337";
  let aImage = null;

  if (data) {
    aImage = data.attributes.image?.data;
  }

  return (
    <div>
      {data ? (
        <>
          <div className={Style.imagecard}>
            <div className={Style.initialDetails}>
              {aImage && (
                <Image
                  src={host + aImage.attributes.url}
                  alt="Header Image"
                  width="700"
                  height="700"
                />
              )}
              <div className={Style.textContainer}>
                <div className={Style.cardText}>
                  <h2>{data.attributes.title}</h2>
                  <h3>{data.attributes.companyName}</h3>
                  <p>{data.attributes.companyLocation}</p>
                  <p>{data.attributes.number}</p>
                  <p>{data.attributes.email}</p>
                </div>
              </div>
              <h2>{data.attributes.name}</h2>
              <div className={Style.flexContainer}>
                <hr className={Style.hr} />
              </div>
            </div>
            <div className={Style.details}>
              <p>{data.attributes.overlayText}</p>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
