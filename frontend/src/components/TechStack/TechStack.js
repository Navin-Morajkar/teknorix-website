import React from "react";
import Image from "next/image";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Button } from "antd";

const TechStack = ({ data }) => {
  const host = "http://13.233.214.226:1337";
  let techStackImage = null;
  let title = null;
  let description = null;
  

  if (data) {
    techStackImage = data.attributes.Image?.data;
    title = data.attributes.Title;
    description = data.attributes.Description;
   
  }

  return (
    <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
      {data ? (
        <div className="bg-white p-4 rounded-lg ">
          {techStackImage && (
            <Image
              src={host + techStackImage.attributes.url}
              alt="Tech Stack Image"
              width={100} // Increase the width of the image
              height={100} // Increase the height of the image
            />
          )}
          <div className="mt-1">
            <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
              {title}
            </h1>
            <hr className="bg-green-400 h-1 w-14 mt-2 mb-2" /> {/* Reduce hr width and height */}
            <div className="prose lg:text-xl">
              <p>{description}</p>
            </div>
         
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TechStack;
