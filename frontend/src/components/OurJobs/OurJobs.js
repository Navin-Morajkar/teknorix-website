import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Styles from "../OurJobs/OurJobs.module.css";
import { ArrowRightOutlined } from "@ant-design/icons";
import Image from "next/image";
export default function our_jobs({ data }) {
  const router = useRouter(); // Use Next.js router for React

  const host = "http://13.233.214.226:1337";
  let ourJobImage = null;

  if (data) {
    ourJobImage = data.attributes.image?.data;
  }

  const navigateToSpecificEntry = () => {
    const specificLink = specificEntry.attributes.link;
    router.push(specificLink); // Use Next.js router's push method
  };

  return (
    <div>
      {data ? (
        <>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 ">
            <div className="relative w-80 h-80 bg-white border border-gray-300 transition-transform duration-300 transform flex flex-col items-center justify-center group">
              {ourJobImage && (
                <Image
                  src={host + ourJobImage.attributes.url}
                  alt="container Image"
                  width="348"
                  height="290"
                />
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-opacity-70 bg-black text-white py-3 px-4 cursor-pointer flex items-center justify-center group opacity-100 group-hover:opacity-0 transition-opacity duration-300 ">
                <h3 className="">{data.attributes.title}</h3>
              </div>
              <div className="absolute inset-0 bg-green-500  opacity-0 hover:opacity-70 transition-opacity duration-300 ease-in-out flex items-center justify-center">
                <p>{data.attributes.title}</p>

                <button
                  className="absolute bottom-4 right-4 w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center transform scale-0 transition-transform duration-300 group-hover:scale-100"
                  onClick={navigateToSpecificEntry}
                >
                  <ArrowRightOutlined />
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
