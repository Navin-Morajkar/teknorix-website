import { useState, useEffect } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function Collage() {
    const [index, setIndex] = useState(-1);
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Fetch images from Strapi
        fetch("http://13.233.214.226:1337/api/collages?fields[0]=title&fields[1]=slug&populate[Image][fields][0]=name&populate[Image][fields][1]=url&populate[Image][fields][2]=height&populate[Image][fields][3]=width")
            .then((response) => response.json())
            .then((data) => {
                console.log("Fetched data:", data); // Log the fetched data to inspect its structure

                const fetchedImages = data.map((collage) => {
                    const width = 3840; // Set your desired width
                    const height = collage.attributes.Image.data.height;

                    console.log("Image data:", collage.attributes.Image.data); // Log the image data to check its structure

                    return {
                        src: `http://13.233.214.226:1337${collage.attributes.Image.data.url}?w=${width}&h=${height}`,
                        width,
                        height,

                    };
                });

                console.log("Fetched images:", fetchedImages); // Log the generated image objects

                setImages(fetchedImages);
            })
            .catch((error) => {
                console.error("Error fetching images from Strapi: ", error);
            });
    }, []);

    return (
        <>
            <PhotoAlbum
                photos={images}
                layout="rows"
                targetRowHeight={150}
                onClick={({ index }) => setIndex(index)}
            />

            <Lightbox
                slides={images}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
        </>
    );
}
