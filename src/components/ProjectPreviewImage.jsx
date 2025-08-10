import { useState, useEffect } from 'react';

const ProjectPreviewImage = ({ folder, title, className }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const loadPreviewImage = async () => {
      if (!folder) {
        setIsLoading(false);
        setHasError(true);
        return;
      }

      setIsLoading(true);
      setHasError(false);

      const extensions = ['png', 'jpg', 'jpeg'];
      
      for (const ext of extensions) {
        try {
          // Import dynamique pour Vite
          const imageModule = await import(`../assets/img/${folder}/1.${ext}`);
          setImageSrc(imageModule.default);
          setIsLoading(false);
          return;
        } catch (error) {
          // Continue avec l'extension suivante
        }
      }
      
      // Si aucune image trouvée
      setIsLoading(false);
      setHasError(true);
    };

    loadPreviewImage();
  }, [folder]);

  if (isLoading) {
    return (
      <div className={`${className} flex items-center justify-center bg-gray-100`}>
        <div className="w-6 h-6 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (hasError || !imageSrc) {
    return (
      <div className={`${className} flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200`}>
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gray-300 border-2 border-gray-400 flex items-center justify-center">
            <span className="text-2xl">🚀</span>
          </div>
          <p className="text-gray-500 text-sm">Projet en cours</p>
        </div>
      </div>
    );
  }

  return (
    <img 
      src={imageSrc}
      alt={title}
      className={className}
    />
  );
};

export default ProjectPreviewImage;
