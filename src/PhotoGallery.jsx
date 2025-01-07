import { useParams } from "react-router-dom";

function PhotoGallery() {
  const { country } = useParams();

  // Import all images upfront
  const allImages = import.meta.glob('./assets/**/*.(jpg|jpeg|png|gif)', { eager: true });

  // Filter images based on the `country` folder
  const imageUrls = Object.keys(allImages)
    .filter((path) => path.includes(`/assets/${country}/`))
    .map((path) => allImages[path].default);

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-4xl font-bold mt-10">{country} - Photo Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
        {imageUrls.length > 0 ? (
          imageUrls.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`${country} Photo ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          ))
        ) : (
          <p className="text-gray-500">No images found for {country}.</p>
        )}
      </div>
    </div>
  );
}

export default PhotoGallery;
