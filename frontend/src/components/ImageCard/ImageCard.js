import React from "react";
import Image from "next/image";
import { EnvironmentOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons";
import styles from "../ImageCard/ImageCard.module.css";

const ImageCard = ({ data }) => {
  const host = "http://13.233.214.226:1337";
  let aImage = null;

  if (data) {
    aImage = data.attributes.image?.data;
  }

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {data ? (
        <>
          {aImage && (
            <Image
              src={host + aImage.attributes.url}
              alt="Header Image"
              layout="fill"
              objectFit="cover"
            />
          )}

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
            <div className="text-center">
              <h2 className="text-2xl font-bold">{data.attributes.title}</h2>
              <h3 className="text-lg">{data.attributes.companyName}</h3>
              <p>
                <EnvironmentOutlined className="mr-2" />
                {data.attributes.companyLocation}
              </p>
              <p>
                <PhoneOutlined className="mr-2" />
                {data.attributes.number}
              </p>
              <p>
                <MailOutlined className="mr-2" />
                {data.attributes.email}
              </p>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ImageCard;
