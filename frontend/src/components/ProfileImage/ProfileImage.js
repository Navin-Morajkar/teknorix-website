import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  
  LinkedinOutlined
  
} from "@ant-design/icons";
export default function ProfileImage({ data }) {
  const host = "http://13.233.214.226:1337";
  const specificLink = data?.attributes?.link;
  let eImage = null;

  if (data) {
    eImage = data.attributes.image?.data;
  }

  return (
    <div className="text-center mt-4">
      {eImage && (
        <Image
          className="mx-auto mb-4 rounded-full"
          src={host + eImage.attributes.url}
          alt="profile image"
          width={250}
          height={250}
        />
      )}
      <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">{data.attributes.name}</h2>
      <p className="text-sm md:text-base lg:text-lg xl:text-xl text-[#656C8A]">
        {data.attributes.designation}
      </p>
      {specificLink && (
        <Link href={specificLink} className="mt-4 px-4 py-2 text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out">
        <LinkedinOutlined />  LinkedIn
        </Link>
      )}
      <p className="text-sm md:text-base lg:text-lg xl:text-xl text-[#656C8A]">
        {data.attributes.designation2}
      </p>
    </div>
  );
}
