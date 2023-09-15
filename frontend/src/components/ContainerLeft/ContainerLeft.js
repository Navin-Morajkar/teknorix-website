import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';

export default function ContainerLeft({ data }) {
  const router = useRouter();

  const navigateToSpecificEntry = () => {
    const link = data?.attributes?.link;
    if (link) {
      router.push(link);
    }
  };

  const host = 'http://13.233.214.226:1337';
  let containerImage = null;
  let details = null;
  let link = null;
  let headertitle = null;

  if (data) {
    containerImage = data?.attributes?.image?.data;
    details = data?.attributes?.details;
    link = data?.attributes?.link;
    headertitle = data.attributes?.title;
  }

  return (
    <div>
      {data ? (
        <div className="mt-4 sm:flex sm:justify-between sm:p-4 md:p-8 lg:p-12 xl:p-20">
          <div className="sm:w-3/5 sm:mr-auto sm:ml-4">
            {headertitle && (
              <>
                <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                  {data.attributes?.title}
                </h1>
                <hr className="bg-blue-500 h-1 w-16 mt-2 mb-4" />
              </>
            )}

            {details && (
              <ReactMarkdown className="lg:text-xl">
                {details}
              </ReactMarkdown>
            )}

            <ReactMarkdown className="lg:text-xl">
              {data.attributes?.description}
            </ReactMarkdown>

            {link && (
              <button
                className="bg-green-500 text-white font-bold rounded-full px-6 py-2 mt-4 hover:bg-green-700"
                onClick={navigateToSpecificEntry}
              >
                Explore now
              </button>
            )}
          </div>
          <div className="sm:w-2/5 sm:ml-4">
            {containerImage && (
              <Image
                src={host + containerImage?.attributes.url}
                alt="Image"
                width={800}
                height={700}
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
