import React, { useState } from 'react';

const Collage = () => {
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    // Add more image filenames here
  ];

  const [expandedImageIndex, setExpandedImageIndex] = useState(null);

  const expandImage = (index) => {
    setExpandedImageIndex(index);
  };

  const closeImage = () => {
    setExpandedImageIndex(null);
  };

  const nextImage = () => {
    if (expandedImageIndex !== null && expandedImageIndex < images.length - 1) {
      setExpandedImageIndex(expandedImageIndex + 1);
    }
  };

  return (
    <div className="collage">
      {images.map((image, index) => (
        <div key={index} className="collage-item">
          <img
            src={`/images/${image}`}
            alt={`Image ${index}`}
            onClick={() => expandImage(index)}
          />
        </div>
      ))}

      {expandedImageIndex !== null && (
        <div className="expanded-image">
          <img
            src={`/images/${images[expandedImageIndex]}`}
            alt={`Expanded Image ${expandedImageIndex}`}
          />
          <button onClick={closeImage}>Close</button>
          <button onClick={nextImage}>Next</button>
        </div>
      )}
    </div>
  );
};

export default Collage;
