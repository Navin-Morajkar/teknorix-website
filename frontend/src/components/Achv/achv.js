import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Button } from "antd";

const Achv = ({ data }) => {
  const host = "http://13.233.214.226:1337";
  let AImage = null;
  let title = null;
  let description = null;
  let keepcount = null;

  if (data) {
    AImage = data.attributes.image?.data;
    title = data.attributes.Title;
    keepcount = data.attributes.count;
  }

  const [count, setCount] = useState(0); // Initialize count state to 0
  const countRef = useRef(null);

  useEffect(() => {
    // Create an Intersection Observer to start the animation when the component is in view
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start the counting animation
          let start = 0;
          const step = keepcount / 100; // Adjust the step value for smoother animation

          const updateCount = () => {
            if (start < keepcount) {
              setCount(Math.floor(start)); // Use Math.floor to display integer values
              start += step;
              requestAnimationFrame(updateCount);
            } else {
              setCount(keepcount);
            }
          };

          requestAnimationFrame(updateCount);

          // Stop observing once animation starts
          observer.unobserve(countRef.current);
        }
      });
    }, options);

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [keepcount]);

  return (
    <div className="w-full sm:w-1/2 lg:w-1/4 p-2" ref={countRef}>
      {data ? (
        <div className="bg-white p-4 rounded-lg ">
          {AImage && (
            <Image
              src={host + AImage.attributes.url}
              alt="Tech Stack Image"
              width={100}
              height={100}
            />
          )}
          <div className="mt-1">
            <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
              {title}
            </h1>
            <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
              {count}
            </h1>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Achv;
