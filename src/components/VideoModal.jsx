import { useState, useRef, useEffect } from 'react';
import { BiExpand, BiPause } from 'react-icons/bi';
import { BsVolumeUp } from 'react-icons/bs';
import { FaPlay} from 'react-icons/fa6';
import { TiTime } from 'react-icons/ti';

const VideoModal = ({ isOpen, onClose, videoUrl, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef(null);
  const timeoutRef = useRef(null);

  // Extraire l'ID YouTube de l'URL
  const getYouTubeId = (url) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    return match ? match[1] : null;
  };

  // Reset quand on ferme la modal
  useEffect(() => {
    if (!isOpen) {
      setIsPlaying(false);
      setCurrentTime(0);
    }
  }, [isOpen]);

  // Gestion de l'affichage des contrôles
  const handleMouseMove = () => {
    setShowControls(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  // Gestion de la lecture/pause avec l'espace
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isOpen) return;
      
      if (e.code === 'Space') {
        e.preventDefault();
        togglePlay();
      } else if (e.code === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, isPlaying]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration || 0);
    }
  };

  const handleSeek = (e) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const newTime = (clickX / rect.width) * duration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  if (!isOpen) return null;

  const youtubeId = getYouTubeId(videoUrl);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
      onClick={onClose}
      onMouseMove={handleMouseMove}
    >
      <div 
        className="relative w-full h-full max-w-6xl max-h-full p-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`absolute top-4 left-4 right-4 z-10 flex items-center justify-between text-white transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="text-xl font-semibold" style={{ fontFamily: "Karla" }}>
            {title}
          </h3>
          <button
            onClick={onClose}
            className="p-2 transition-colors bg-black bg-opacity-50 rounded-full hover:bg-opacity-70"
          >
            <TiTime size={20} />
          </button>
        </div>

        {/* Conteneur vidéo */}
        <div className="relative w-full h-full bg-black rounded-lg overflow-hidden">
          {youtubeId ? (
            // Vidéo YouTube
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            // Vidéo locale avec contrôles personnalisés
            <>
              <video
                ref={videoRef}
                src={videoUrl}
                className="w-full h-full object-contain"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleTimeUpdate}
                onClick={togglePlay}
              />
              
              {/* Contrôles personnalisés */}
              <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
                {/* Barre de progression */}
                <div 
                  className="w-full h-2 mb-4 bg-gray-600 rounded-full cursor-pointer"
                  onClick={handleSeek}
                >
                  <div 
                    className="h-full bg-purple-500 rounded-full"
                    style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                  />
                </div>
                
                {/* Contrôles */}
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-4">
                    <button onClick={togglePlay} className="p-2 hover:bg-white hover:bg-opacity-20 rounded">
                      {isPlaying ? <BiPause size={20} /> : <FaPlay size={20} />}
                    </button>
                    
                    <div className="flex items-center gap-2">
                      <BsVolumeUp size={16} />
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={volume}
                        onChange={(e) => {
                          const newVolume = parseFloat(e.target.value);
                          setVolume(newVolume);
                          if (videoRef.current) {
                            videoRef.current.volume = newVolume;
                          }
                        }}
                        className="w-20"
                      />
                    </div>
                    
                    <span className="text-sm">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>
                  
                  <button onClick={toggleFullscreen} className="p-2 hover:bg-white hover:bg-opacity-20 rounded">
                    <BiExpand size={16} />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
