import React from "react";
import Style from "../Header/Header.module.css";
import Image from "next/image";
import { useContext } from "react";
import { MyContext } from "../MyContext";

export default function Header({ data }) {
  const { setHeaderImageLink } = useContext(MyContext);

  const host = "http://13.233.214.226:1337";
  let headerImage = null;
  let bodyImage = null;

  if (data) {
    headerImage = data.attributes.headerImage?.data;
    bodyImage = data.attributes.bodyImage?.data;
  }
  if (headerImage) {
    setHeaderImageLink(host + headerImage.attributes.url);
  }

  return (
    <div>
      {data ? (
        <>
          <div className={Style.header}>
            <div style={{ marginLeft: "20%", paddingLeft: "2%" }}>
              <h1>{data.attributes.title}</h1>
              <p>{data.attributes.description}</p>
            </div>

            {bodyImage && (
              <Image
                src={host + bodyImage.attributes.url}
                alt="Body Image"
                width="1000"
                height="400"
              />
            )}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
