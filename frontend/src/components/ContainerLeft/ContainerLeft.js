import React, { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import Style from '../ContainerLeft/ContainerLeft.module.css';

export default function ContainerLeft({ data }) {
  const router = useRouter();

  const navigateToSpecificEntry = () => {
    const link = data?.attributes?.link; // Add conditional checks
    if (link) {
      router.push(link); // Use Next.js router's push method
    }
  };

  const host = 'http://13.233.214.226:1337';
  let containerImage = null;
  let details = null;
  let link = null;
  let headertitle=null;

  if (data) {
    containerImage = data?.attributes?.image?.data;
    details = data?.attributes?.details;
    link = data?.attributes?.link;
    headertitle = data.attributes?.title
  }

  //cons
  return (

    <div>
      {data ? (
        <div className={Style.flexContainer}>
          <div className={Style.alignLeft}>
            {headertitle && (
              <>
                <h1>{data.attributes?.title}</h1>
                <hr />
              </>
            )}


            {details && <ReactMarkdown>{details}</ReactMarkdown>}
            <ReactMarkdown>{data.attributes?.description}</ReactMarkdown>

            {link && <button className={Style.buttonGreen} onClick={navigateToSpecificEntry}>

              Explore now
            </button>}
          </div>
          <div className={Style.alignRight}>
            {containerImage && (
              <Image
                src={host + containerImage?.attributes.url}
                alt=" Image"
                width={1000}
                height={1000}
              />
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );

}



