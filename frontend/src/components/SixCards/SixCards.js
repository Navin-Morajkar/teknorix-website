import React from "react";
import Image from "next/image";

export default function SixCards({ data }) {
  const host = "http://13.233.214.226:1337";
  let aImage = null;

  if (data) {
    aImage = data.attributes.image?.data;
  }

  return (
    <div>
      {data ? (
        <>
          <div className="w-80 h-60 md:w-96 md:h-72 border bg-white transition duration-300 transform hover:bg-blue-300 relative flex flex-col items-center justify-center">
            {aImage && (
              <Image
                src={host + aImage.attributes.url}
                alt="Header Image"
                width={80}
                height={80}
                className="rounded-full"
              />
            )}
            <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
              {data.attributes.name}
            </h2>
            <div className="flex items-center">
              <hr className="bg-blue-500 h-2 w-16" />
            </div>
            <div className="absolute inset-0 w-full h-full bg-blue-200 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center">
              <p className="text-gray-700">{data.attributes.overlayText}</p>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
