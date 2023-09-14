import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Style from "../ContainerLeft/ContainerLeft.module.css"
import ReactMarkdown from 'react-markdown';
export default function ContainerRight({ data }) {
  const router = useRouter();
  const navigateToSpecificEntry = () => {
    const link = data.attributes.link;

    router.push(link); // Use Next.js router's push method
  };



  const host = "http://13.233.214.226:1337";
  let containerImage = null;
  let link=null;
  if (data) {
    containerImage = data.attributes.image?.data;
    link = data?.attributes?.link;


  }
  return (

    <div>
      {
        data ?
          <>
            <div className={Style.flexContainer}>
              <div className={Style.alignLeft}>
                {containerImage && (
                  <Image
                    src={host + containerImage.attributes.url}
                    alt="container Image"
                    width={1000}
                    height={1000} />
                )}

              </div>
              <div className={Style.alignRight}>
                <h1>{data.attributes.title} </h1>
                <hr />
                <ReactMarkdown>{data.attributes.description}</ReactMarkdown>
                {link  && <button className={Style.buttonGreen} onClick={navigateToSpecificEntry}>
                  Explore now
                </button>}
              </div>
            </div>
          </>
          : <></>

      }
    </div>
  );
}