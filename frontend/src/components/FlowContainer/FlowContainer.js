import React from 'react';
import Image from 'next/image';

export default function FlowContainer({ data }) {
  const host = "http://13.233.214.226:1337";
  let flowImage = null;

  if (data) {
    flowImage = data.attributes.image?.data;
  }

  return (
    <div className="mt-4">
      <div className="md:flex">
        <div className="md:w-1/3 md:mr-4">
          {flowImage && (
            <Image
              src={host + flowImage.attributes.url}
              alt="Flow Image"
              width={200}
              height={200}
              className="mx-auto mb-4 rounded-full"
            />
          )}
        </div>
        <div className="md:w-2/3 mt-4 md:mt-0">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            {data.attributes.title}
          </h1>
          <hr className="bg-blue-500 h-2 w-16 mt-2 mb-4" />
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-[#656C8A]">
            {data.attributes.description}
          </p>
        </div>
      </div>
    </div>
  );
}
