import { FaTimes, FaGithub, FaPlay, FaExternalLinkAlt } from 'react-icons/fa';
import ProjectPreviewImage from './ProjectPreviewImage';

const ProjectDetailModal = ({ isOpen, onClose, project, onOpenVideo, onOpenImages }) => {
  if (!isOpen || !project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background gradient */}
        <div className={`absolute inset-0 ${project.theme.bgColor} opacity-10`}></div>
        
        {/* Header avec image */}
        <div className="relative">
          {/* Preview image en header */}
          {project.preview ? (
            <div className="h-48 overflow-hidden relative">
              <ProjectPreviewImage 
                folder={project.preview?.folder}
                title={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          ) : (
            <div className={`h-32 ${project.theme.bgColor} relative`}>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10"></div>
            </div>
          )}
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/20 backdrop-blur-sm text-white hover:bg-black/40 rounded-full transition-all"
          >
            <FaTimes size={16} />
          </button>
          
          {/* Project info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="flex items-center gap-3 mb-2">
              <span className={`px-3 py-1 text-xs font-medium rounded-full ${project.theme.bgColor} ${project.theme.accentColor} border bg-white/90 text-gray-800`}>
                {project.theme.category}
              </span>
              {project.status && (
                <span className="px-2 py-1 text-xs font-medium bg-green-500 text-white rounded-full">
                  {project.status}
                </span>
              )}
            </div>
            <h2 className="text-2xl font-bold mb-1" style={{ fontFamily: "Pacifico" }}>
              {project.title}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="relative p-6 space-y-6">
          {/* Description */}
          <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "Karla" }}>
            {project.description}
          </p>

          {/* Technologies */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-purple-100 hover:text-purple-700 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            {project.videoUrl && (
              <button 
                onClick={() => onOpenVideo(project)}
                className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-all hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                <FaPlay size={14} />
                Démo vidéo
              </button>
            )}
            
            {project.preview && (
              <button 
                onClick={() => onOpenImages(project)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                🖼️ Images ({project.preview.imageCount})
              </button>
            )}
            
            {project.demoUrl && (
              <a 
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-all hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                <FaExternalLinkAlt size={12} />
                Demo live
              </a>
            )}
            
            {project.githubUrl && (
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-xl hover:bg-gray-900 transition-all hover:scale-105 shadow-lg hover:shadow-gray-800/25"
              >
                <FaGithub size={14} />
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;