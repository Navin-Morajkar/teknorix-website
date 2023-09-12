import React from 'react';
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

  if (data) {
    containerImage = data?.attributes?.image?.data;
    details = data?.attributes?.details;
  }

  //console.log(containerImage[0].attributes.url);

  return (
    <div>
      {data ? (
        <div className={Style.flexContainer}>
          <div className={Style.alignLeft}>
            <h1>{data.attributes?.title}</h1>
            <hr />
            {details && <ReactMarkdown>{details}</ReactMarkdown>}
            <p>{data.attributes?.description}</p>
            <button className={Style.buttonGreen} onClick={navigateToSpecificEntry}>
              Explore now
            </button>
          </div>
          <div className={Style.alignRight}>
            {containerImage && (
              <Image
                src={host + containerImage.attributes.url}
                alt=" Image"
                width={3400}
                height={3400}
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