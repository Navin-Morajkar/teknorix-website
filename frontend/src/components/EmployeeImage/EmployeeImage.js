import React from 'react';
import Image from 'next/image';

export default function EmployeeImage({ data }) {
  const host = "http://13.233.214.226:1337";

  if (!data) {
    return null;
  }

  const eImage = data.attributes.image?.data;

  return (
    <div className="text-center mt-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"> {/* Responsive width */}
      {eImage && (
        <Image
          className="mx-auto mb-4 rounded-full"
          src={host + eImage.attributes.url}
          alt="profile image"
          width={200}
          height={200}
        />
      )}
      <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">{data.attributes.name}</h2>
      <p className="text-sm md:text-base lg:text-lg xl:text-xl text-[#656C8A]">{data.attributes.designation}</p>
      <p className="text-sm md:text-base lg:text-lg xl:text-xl text-[#656C8A]">{data.attributes.designation2}</p>
    </div>
  );
}
