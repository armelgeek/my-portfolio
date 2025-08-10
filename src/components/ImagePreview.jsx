import { memo, useState, useEffect } from 'react';
import { Slide } from 'react-slideshow-image';

const ImagePreview = memo(({ projectId, imageCount = 6 }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Charger dynamiquement les images basées sur l'ID du projet et le nombre d'images
    const loadImages = async () => {
      const imageList = [];
      
      for (let i = 1; i <= imageCount; i++) {
        try {
          // Import dynamique de l'image
          const imageModule = await import(`../assets/img/${projectId}/${i}.png`);
          imageList.push(imageModule.default);
        } catch (error) {
          // Si l'image n'existe pas, essayer avec .jpg
          try {
            const imageModule = await import(`../assets/img/${projectId}/${i}.jpg`);
            imageList.push(imageModule.default);
          } catch (jpgError) {
            console.warn(`Image ${i} not found for project ${projectId}`);
          }
        }
      }
      
      setImages(imageList);
    };

    if (projectId && imageCount > 0) {
      loadImages();
    }
  }, [projectId, imageCount]);

  const responsiveSettings = [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ];

  if (images.length === 0) {
    return (
      <div className='flex items-center justify-center w-full h-full'>
        <p className="text-lg text-gray-400">Chargement des images...</p>
      </div>
    );
  }

  return (
    <Slide 
      slidesToScroll={2} 
      slidesToShow={2} 
      indicators={false} 
      responsive={responsiveSettings}
    >
      {images.map((image, index) => (
        <div key={index} className="img">
          <div 
            className="h-96" 
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat'
            }}
          />
        </div>
      ))}
    </Slide>
  );
});

ImagePreview.displayName = 'ImagePreview';

export default ImagePreview;
