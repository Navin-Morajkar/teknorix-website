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
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {collageImages.map((image, i) => (
              <div
                key={i}
                className="w-full h-64 sm:h-80 md:h-96 lg:h-80 xl:h-64 relative cursor-pointer"
                onClick={() => setIndex(i)}
              >
                <img
                  src={image.src}
                  alt={`Collage ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
  
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
