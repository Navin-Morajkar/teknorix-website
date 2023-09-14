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
    const [collageImages, setCollageImages] = useState([]);
    const host = "http://13.233.214.226:1337";

    useEffect(() => {
        // Fetch images from Strapi
        fetch("http://13.233.214.226:1337/api/collages?fields[0]=title&fields[1]=slug&populate[Image][fields][0]=name&populate[Image][fields][1]=url&populate[Image][fields][2]=height&populate[Image][fields][3]=width&pagination[start]=0&pagination[limit]=100")
            .then((response) => response.json())
            .then((data) => {
                var _images = data.data.map((item) => {
                    return({ src: host + item.attributes.Image.data.attributes.url, width:item.attributes.Image.data.attributes.width, height: item.attributes.Image.data.attributes.height, id: item.attributes.Image.data.attributes.url})
                })
                setCollageImages([..._images])
            })
            .catch((error) => {
                console.error("Error fetching images from Strapi: ", error);
            });
    }, []);

    

    return (
        <>
            <PhotoAlbum
                photos={collageImages}
                layout="rows"
                targetRowHeight={350}
                onClick={({ index }) => setIndex(index)}
            />

            <Lightbox
                slides={collageImages}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
        </>
    );
}
