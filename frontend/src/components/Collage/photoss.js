import { useState, useEffect } from "react";

const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

// Helper function to generate image URLs from Strapi
const strapiImageLink = (url, width, height) =>
    `http://your-strapi-server.com${url}?w=${width}&h=${height}`;

export default function PhotoGallery() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Fetch data from Strapi
        fetch("http://13.233.214.226:1337/api/collages?fields[0]=title&fields[1]=slug&populate[Image][fields][0]=name&populate[Image][fields][1]=url&populate[Image][fields][2]=height&populate[Image][fields][3]=width")
            .then((response) => response.json())
            .then((data) => {
                const fetchedImages = data.map((collage) => {
                    const width = breakpoints[0];
                    const height = collage.attributes.Image.data.height;

                    return {
                        src: strapiImageLink(collage.attributes.Image.data.url, width, height),
                        width,
                        height,
                        srcSet: breakpoints.map((breakpoint) => {
                            const imgHeight = Math.round((height / width) * breakpoint);
                            return {
                                src: strapiImageLink(collage.attributes.Image.data.url, breakpoint, imgHeight),
                                width: breakpoint,
                                height: imgHeight,
                            };
                        }),
                    };
                });

                setImages(fetchedImages);
            })
            .catch((error) => {
                console.error("Error fetching images from Strapi: ", error);
            });
    }, []);

    return (
        <div>
            <h1>Image Gallery</h1>
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image.src}
                    width={image.width}
                    height={image.height}
                    alt={`Image ${index}`}
                    srcSet={image.srcSet.map((srcSetItem) => `${srcSetItem.src} ${srcSetItem.width}w`).join(", ")}
                />
            ))}
        </div>
    );
}
