import { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaExpand, FaCompress } from 'react-icons/fa';
import { TiTimes } from 'react-icons/ti';

const ImageSlideModal = ({ isOpen, onClose, projectData }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const modalRef = useRef(null);
  const timeoutRef = useRef(null);

  // Charger les images du projet
  useEffect(() => {
    if (isOpen && projectData?.preview) {
      const loadImages = async () => {
        setIsLoading(true);
        const imageList = [];
        const { folder, imageCount } = projectData.preview;
        
        for (let i = 1; i <= imageCount; i++) {
          const extensions = ['png', 'jpg', 'jpeg'];
          
          for (const ext of extensions) {
            try {
              // Import dynamique pour Vite
              const imageModule = await import(`../assets/img/${folder}/${i}.${ext}`);
              imageList.push(imageModule.default);
              break;
            } catch (error) {
              // Continue avec l'extension suivante
              if (ext === extensions[extensions.length - 1]) {
                // Si c'est la dernière extension et qu'on n'a rien trouvé, on arrête
                console.warn(`Image ${i}.${extensions.join('|')} not found in ${folder}`);
              }
            }
          }
        }
        
        setImages(imageList);
        setCurrentImageIndex(0);
        setIsLoading(false);
      };
      
      loadImages().catch((error) => {
        console.error('Error loading images:', error);
        setIsLoading(false);
      });
    }
  }, [isOpen, projectData]);

  // Gestion du clavier
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyPress = (e) => {
      switch (e.code) {
        case 'ArrowLeft':
          e.preventDefault();
          prevImage();
          break;
        case 'ArrowRight':
          e.preventDefault();
          nextImage();
          break;
        case 'Escape':
          e.preventDefault();
          onClose();
          break;
        case 'Space':
          e.preventDefault();
          nextImage();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, currentImageIndex, images.length]);

  // Auto-hide des contrôles
  const handleMouseMove = () => {
    setShowControls(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  };

  const nextImage = () => {
    if (images.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (images.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      modalRef.current?.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  // Reset quand on ferme
  useEffect(() => {
    if (!isOpen) {
      setCurrentImageIndex(0);
      setImages([]);
      setIsLoading(true);
      setIsFullscreen(false);
      setShowControls(true);
    }
  }, [isOpen]);

  if (!isOpen || !projectData) return null;

  return (
    <div 
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95"
      onClick={onClose}
      onMouseMove={handleMouseMove}
    >
      <div 
        className="relative w-full h-full max-w-7xl max-h-full p-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`absolute top-4 left-4 right-4 z-10 flex items-center justify-between text-white transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
          <div>
            <h3 className="text-xl font-semibold mb-1" style={{ fontFamily: "Karla" }}>
              {projectData.title}
            </h3>
            <p className="text-sm text-gray-300">
              {images.length > 0 ? `${currentImageIndex + 1} / ${images.length}` : 'Chargement...'}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleFullscreen}
              className="p-2 transition-colors bg-black bg-opacity-50 rounded-full hover:bg-opacity-70"
            >
              {isFullscreen ? <FaCompress size={16} /> : <FaExpand size={16} />}
            </button>
            <button
              onClick={onClose}
              className="p-2 transition-colors bg-black bg-opacity-50 rounded-full hover:bg-opacity-70"
            >
              <TiTimes size={20} />
            </button>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="relative flex items-center justify-center w-full h-full">
          {isLoading ? (
            <div className="flex flex-col items-center gap-4 text-white">
              <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
              <p>Chargement des images...</p>
            </div>
          ) : images.length > 0 ? (
            <>
              {/* Image principale */}
              <img
                src={images[currentImageIndex]}
                alt={`${projectData.title} - Image ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onError={(e) => {
                  console.error('Erreur de chargement image:', e.target.src);
                }}
              />

              {/* Boutons de navigation */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-all ${showControls ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <FaChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-all ${showControls ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <FaChevronRight size={20} />
                  </button>
                </>
              )}
            </>
          ) : (
            <div className="text-center text-white">
              <p className="text-lg mb-2">Aucune image disponible</p>
              <p className="text-sm text-gray-400">Ce projet n'a pas d'aperçu visuel</p>
            </div>
          )}
        </div>

        {/* Indicateurs de pagination */}
        {images.length > 1 && (
          <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentImageIndex 
                    ? 'bg-purple-500 scale-125' 
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
              />
            ))}
          </div>
        )}

        {/* Instructions */}
        <div className={`absolute bottom-4 right-4 text-white text-sm transition-opacity duration-300 ${showControls ? 'opacity-60' : 'opacity-0'}`}>
          <p>↔ Naviguer • Espace Suivant • Échap Fermer</p>
        </div>
      </div>
    </div>
  );
};

export default ImageSlideModal;
