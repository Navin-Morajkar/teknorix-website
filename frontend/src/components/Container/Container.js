import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Style from "../ContainerLeft/ContainerLeft.module.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Button } from "antd";

const Container = ({ data }) => {
  const host = "http://13.233.214.226:1337";
  let containerImage = null;
  let link = null;

  if (data) {
    containerImage = data.attributes.image?.data;
    link = data.attributes?.link;
  }

  return (
    <div className={Style.flexContainer}>
      {data ? (
        <>
          <div className={Style.alignLeft}>
            {containerImage && (
              <Image
                src={host + containerImage.attributes.url}
                alt="My Image"
                width="200"
                height="200"
              />
            )}
            <h1>{data.attributes.title}</h1>
            <hr />
            <ReactMarkdown>{data.attributes.description}</ReactMarkdown>

            {link ? (
              <>
                <Button
                  href={ link }
                  type="primary"
                  style={{ background: "#ffc801", color: "#212529", fontWeight: "bold"}}
                  shape="round"
                  size="large">
                  Discover More
                </Button>
              </>
            ) : (
              <></>
            )}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Container;
