import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function BlogPreview({ data }) {
  const host = "http://13.233.214.226:1337";
  
  return (
    <div>
      {data && data.attributes.title && data.attributes.image ? (
        <>
          <div className="blog-post">
            <Image
              src={host + data.attributes.image.data.attributes.url}
              alt="image"
              width={300}
              height={300}
            />
            <Link href={`/blog/${data.attributes.slug}`}>{data.attributes.title}</Link>
          </div>
        </>
      ) : (
        <>
          <p>Error</p>
        </>
      )}
    </div>
  );
}
