import React from "react";
import { useContext } from "react";
import { MyContext } from "../MyContext";
import Image from "next/image";
import { Button } from "antd";

export default function Header({ data }) {
  const { setHeaderImageLink } = useContext(MyContext);

  const host = "http://13.233.214.226:1337";
  let headerImage = null;
  let bodyImage = null;
  let pageLink = null;

  if (data) {
    headerImage = data.attributes.headerImage?.data;
    bodyImage = data.attributes.bodyImage?.data;
    pageLink = data.attributes?.Link;
  }

  if (headerImage) {
    setHeaderImageLink(host + headerImage.attributes.url);
  }

  return (
    <div>
      {data ? (
        <div className="bg-blue-400 text-white p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20">
          <div className="md:flex items-center">
            <div className="md:w-7/8 md:pl-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
                {data.attributes.title}
              </h1>
              <p className="font-bold md:w-full">
                {data.attributes.description}
              </p>
              {pageLink && (
                <Button
                  href={pageLink}
                  type="primary"
                  className="bg-blue-700 rounded-full px-6 py-2 mt-4 text-white"
                >
                  Read More
                </Button>
              )}
            </div>
            {bodyImage && (
              <div className="md:w-1/2 md:pl-4">
                <Image
                  src={host + bodyImage.attributes.url}
                  alt="Body Image"
                  width={1000}
                  height={400}
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
