import React from "react";
import Image from "next/image";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Button } from "antd";

const Container = ({ data }) => {
  const host = "http://13.233.214.226:1337";
  let containerImage = null;
  let link = null;

  if (data) {
    containerImage = data.attributes.image?.data;
    link = data.attributes?.link;
  }

  return (
    <div className="mt-4 sm:flex sm:justify-between sm:p-4 md:p-8 lg:p-12 xl:p-20">
      {data ? (
        <div className="sm:w-4/3 sm:mr-auto sm:ml-4">
          {containerImage && (
            <Image
              src={host + containerImage.attributes.url}
              alt="My Image"
              width={100} // Increase the width of the image
              height={100} // Increase the height of the image
            />
          )}
          <h1 className="font-bold text-sm sm:text-2xl md:text-3xl lg:text-4xl">
          
            {data.attributes.title}
          </h1>
          <hr className="bg-blue-500 h-1 w-12 mt-2 mb-4" />

          <ReactMarkdown>{data.attributes.description}</ReactMarkdown>

          {link && (
            <Button
              href={link}
              type="primary"
              className="bg-yellow-400 text-gray-800 font-bold rounded-full px-6 py-2 mt-4 hover:bg-green-400"
            >
              Discover More
            </Button>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Container;
