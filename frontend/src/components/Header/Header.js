import React from "react";
import Style from "../Header/Header.module.css";
import Image from "next/image";
import { Button } from "antd";

export default function Header({ data }) {
  const host = "http://13.233.214.226:1337";
  let headerImage = null;
  let bodyImage = null;
  let pageLink=null;

  if (data) {
    headerImage = data.attributes.headerImage?.data;
    bodyImage = data.attributes.bodyImage?.data;
    pageLink=data.attributes?.Link
  }
  console.log(pageLink)

  return (
    <div>
      {data ? (
        <>
          {headerImage && (
            <Image
              src={host + headerImage.attributes.url}
              alt="Header Image"
              width="1700"
              height="1000"
            />
          )}

          <div className={Style.header}>
            <div style={{ marginLeft: "20%", paddingLeft: "2%" }}>
              <h1>{data.attributes.title}</h1>
              <p>{data.attributes.description}</p>
              
              {pageLink && (
                <Button
                  href={pageLink}
                  type="primary"
                  styles={{ backgroudColor: "#4d94e4;" }}
                  shape="round"
                  size="large">
                  Read More
                </Button>
              )}
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
