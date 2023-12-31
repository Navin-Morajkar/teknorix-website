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

    if (headerImage) {
      setHeaderImageLink(host + headerImage.attributes.url);
    }
  }

  return (
    <div>
      {data ? (
        <div className="bg-blue-400 text-white p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-center">
            {data.attributes.title}
          </h1>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl md:w-full text-center">
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
          {bodyImage && (
            <div className="mt-4">
              <Image
                src={host + bodyImage.attributes.url}
                alt="Body Image"
                width={560}
                height={560}
              />
            </div>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
