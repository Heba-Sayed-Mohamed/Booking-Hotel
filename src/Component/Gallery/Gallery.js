import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import GalleryImg1 from "../../assets/imges/gallery/g1.gif";
import GalleryImg3 from "../../assets/imges/gallery/g2.gif";
import GalleryImg4 from "../../assets/imges/gallery/g3.gif";
import GalleryImg6 from "../../assets/imges/gallery/g4.gif";
import GalleryImg7 from "../../assets/imges/gallery/g5.gif";

const Gallery = () => {
  const [open, setOpen] = useState(false); 

  const images = [
    { src: GalleryImg1 },
    { src: GalleryImg3  },
    { src: GalleryImg6 },
    { src: GalleryImg4 },
    { src: GalleryImg7  },
    { src: GalleryImg6  },
    
  ];

  return (
    <div>
      <div className="gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.desc || `Image ${index + 1}`}
            style={{ width: "150px", margin: "10px", cursor: "pointer" }}
            onClick={() => setOpen(true)} 
          />
        ))}
      </div>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)} 
          slides={images.map((image) => ({
            src: image.src,
            alt: image.desc,
            title: image.sub,
          }))}
        />
      )}
    </div>
  );
};

export default Gallery;