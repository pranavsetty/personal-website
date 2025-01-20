import { useParams } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import { useState } from "react";
import "yet-another-react-lightbox/styles.css";
import NavBar from "./components/NavBar";

function PhotoGallery() {
  const { country } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Import all images upfront
  const allImages = import.meta.glob('./assets/**/*.(jpg|jpeg|png|gif|HEIC)', { eager: true });

  // Filter images based on the `country` folder
  const imageUrls = Object.keys(allImages)
    .filter((path) => path.includes(`/assets/${country}/`))
    .map((path) => allImages[path].default);

  // Format images for lightbox
  const slides = imageUrls.map((src) => ({
    src: src,
  }));

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <>
    <NavBar />
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-4xl font-bold mt-10">{country}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
        {imageUrls.length > 0 ? (
          imageUrls.map((src, index) => (
            <div 
              key={index} 
              className="cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => openLightbox(index)}
            >
              <img
                src={src}
                alt={`${country} Photo ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          ))
        ) : (
          <p className="text-gray-500">No images found for {country}.</p>
        )}
      </div>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={photoIndex}
        slides={slides}
      />
      </div>
      </>
  );
}

export default PhotoGallery;