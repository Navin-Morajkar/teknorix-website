import React from "react";
import Image from "next/image";
import Style from "../TechStack/TechStack.module.css";

export default function profileimg({ data }) {
  const host = "http://13.233.214.226:1337";
  let teckStackImage = null;
  if (data) {
    teckStackImage = data.attributes.Image?.data;
  }
  return (
    <div>
      {data ? (
        <>
          <div classNmame={Style.card}>
            {teckStackImage && (
              <Image
                src={host + teckStackImage.attributes.url}
                alt="container Image"
                width="200"
                height="200"
              />
            )}
            <h5> {data.attributes.Title}</h5>
            <hr />
            <div>
              <p>{data.attributes.Description}</p>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
