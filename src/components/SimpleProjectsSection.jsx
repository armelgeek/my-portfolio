import { useState } from 'react';
import { FaGithub, FaPlay, FaImages } from 'react-icons/fa6';
import { projectsData } from '../data/projects';
import VideoModal from './VideoModal';
import ImageSlideModal from './ImageSlideModal';
import ProjectPreviewImage from './ProjectPreviewImage';
import ProjectDetailModal from './ProjectDetailModal';
import { FiExternalLink } from 'react-icons/fi';
import { BiInfoCircle } from 'react-icons/bi';
import { BsInfoCircle } from 'react-icons/bs';

const SimpleProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedImageProject, setSelectedImageProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedProjectDetail, setSelectedProjectDetail] = useState(null);

  // Extraire toutes les catégories uniques
  const categories = ['Tous', ...new Set(projectsData.map(project => project.theme.category))];
  
  // Filtrer les projets par catégorie
  const filteredProjects = selectedCategory === 'Tous' 
    ? projectsData 
    : projectsData.filter(project => project.theme.category === selectedCategory);

  const showMoreProjects = () => {
    setVisibleProjects(prev => Math.min(prev + 3, filteredProjects.length));
  };

  // Reset visibleProjects quand on change de catégorie
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setVisibleProjects(6);
  };

  const openVideo = (project) => {
    setSelectedVideo(project);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  const openImageSlide = (project) => {
    setSelectedImageProject(project);
  };

  const closeImageSlide = () => {
    setSelectedImageProject(null);
  };

  const openProjectDetail = (project) => {
    setSelectedProjectDetail(project);
  };

  const closeProjectDetail = () => {
    setSelectedProjectDetail(null);
  };

  return (
    <>
      <section id="mes-projets" className="py-16">
        <h3 className="mb-8 text-3xl font-semibold text-center text-purple-500 heading--underlined lg:text-left"
            style={{ fontFamily: "Pacifico,sans-serif" }}>
          Mes projets
        </h3>
        
        {/* Filtres par catégorie */}
        <div className="mb-8 flex flex-wrap justify-center lg:justify-start gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-purple-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 border border-gray-300 hover:border-purple-300 hover:text-purple-600 hover:bg-purple-50'
              }`}
              style={{ fontFamily: "Karla" }}
            >
              {category}
              <span className="ml-2 text-xs opacity-75">
                ({category === 'Tous' ? projectsData.length : projectsData.filter(p => p.theme.category === category).length})
              </span>
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.slice(0, visibleProjects).map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:border-purple-300 hover:-translate-y-1"
            >
              {/* Badge de statut */}
              {project.status && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-2 py-1 text-xs font-medium text-white bg-green-500 rounded-full">
                    {project.status}
                  </span>
                </div>
              )}

              {/* Catégorie avec couleur thématique */}
              <div className={`absolute top-4 left-4 z-10 px-3 py-1 text-xs font-medium rounded-full ${project.theme.bgColor} ${project.theme.accentColor} border`}>
                {project.theme.category}
              </div>

              {/* Image de preview ou placeholder */}
              <div className={`h-56 ${project.theme.bgColor} relative overflow-hidden`}>
                <ProjectPreviewImage 
                  folder={project.preview?.folder}
                  title={project.title}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay avec actions */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <button
                      onClick={() => openProjectDetail(project)}
                      className="flex items-center gap-2 px-3 py-2 bg-white bg-opacity-90 rounded-full text-purple-600 font-medium hover:bg-opacity-100 transition-all"
                    >
                      <BsInfoCircle size={12} />
                      Détails
                    </button>
                    {project.preview && (
                      <button
                        onClick={() => openImageSlide(project)}
                        className="flex items-center gap-2 px-3 py-2 bg-white bg-opacity-90 rounded-full text-purple-600 font-medium hover:bg-opacity-100 transition-all"
                      >
                        <FaImages size={12} />
                        Images
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                <h4 className="mb-2 text-xl font-bold text-gray-900 line-clamp-1" style={{ fontFamily: "Karla" }}>
                  {project.title}
                </h4>
                
                <p 
                  className="mb-4 text-gray-600 text-sm line-clamp-2 cursor-pointer hover:text-purple-600 transition-colors" 
                  style={{ fontFamily: "Karla" }}
                  onClick={() => openProjectDetail(project)}
                  title="Cliquer pour voir les détails"
                >
                  {project.description}
                </p>

                {/* Technologies - Afficher toutes */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 text-xs font-medium text-purple-600 bg-purple-100 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  {project.videoUrl && (
                    <button 
                      onClick={() => openVideo(project)}
                      className="flex items-center gap-1 px-3 py-2 text-sm text-white bg-purple-500 rounded-lg hover:bg-purple-600 transition-colors flex-1 justify-center"
                    >
                      <FaPlay size={12} />
                      Vidéo
                    </button>
                  )}
                  
                  {project.preview && (
                    <button 
                      onClick={() => openImageSlide(project)}
                      className="flex items-center gap-1 px-3 py-2 text-sm text-purple-600 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors flex-1 justify-center"
                    >
                      <FaImages size={12} />
                      Images
                    </button>
                  )}
                  
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 text-sm text-purple-600 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors flex-1 justify-center"
                    >
                      <FiExternalLink size={12} />
                      Live
                    </a>
                  )}
                  
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <FaGithub size={12} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleProjects < filteredProjects.length && (
          <div className="mt-12 text-center">
            <button 
              onClick={showMoreProjects}
              className="px-8 py-3 text-white bg-purple-500 rounded-lg hover:bg-purple-600 transition-colors shadow-md hover:shadow-lg"
              style={{ fontFamily: "Karla" }}
            >
              Voir plus de projets ({filteredProjects.length - visibleProjects} restants)
            </button>
          </div>
        )}
      </section>

      {/* Modal vidéo */}
      <VideoModal
        isOpen={!!selectedVideo}
        onClose={closeVideo}
        videoUrl={selectedVideo?.videoUrl}
        title={selectedVideo?.title}
      />

      {/* Modal galerie d'images */}
      <ImageSlideModal
        isOpen={!!selectedImageProject}
        onClose={closeImageSlide}
        projectData={selectedImageProject}
      />

      {/* Modal détails du projet */}
      <ProjectDetailModal
        isOpen={!!selectedProjectDetail}
        onClose={closeProjectDetail}
        project={selectedProjectDetail}
        onOpenVideo={openVideo}
        onOpenImages={openImageSlide}
      />
    </>
  );
};

export default SimpleProjectsSection;
