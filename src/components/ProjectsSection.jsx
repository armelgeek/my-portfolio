import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projects';

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  
  const displayedProjects = showAll ? projectsData : projectsData.slice(0, visibleCount);
  
  const handleLoadMore = () => {
    if (visibleCount >= projectsData.length) {
      setShowAll(true);
    } else {
      setVisibleCount(prev => Math.min(prev + 3, projectsData.length));
    }
  };
  
  const handleShowLess = () => {
    setShowAll(false);
    setVisibleCount(3);
  };

  return (
    <div>
      <h3 
        id="mes-projets" 
        className="mt-20 text-3xl font-semibold text-purple-500 heading--underlined" 
        style={{ fontFamily: "Pacifico,sans-serif" }}
      >
        Mes projets
      </h3>

      {displayedProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
      
      {projectsData.length > visibleCount && !showAll && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleLoadMore}
            className="px-8 py-3 text-white bg-purple-500 rounded-full hover:bg-purple-600 transition-colors duration-200"
            style={{ fontFamily: "Karla", fontWeight: "bold" }}
          >
            Voir plus de projets ({projectsData.length - visibleCount} restants)
          </button>
        </div>
      )}
      
      {showAll && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleShowLess}
            className="px-8 py-3 text-purple-500 bg-white border-2 border-purple-500 rounded-full hover:bg-purple-50 transition-colors duration-200"
            style={{ fontFamily: "Karla", fontWeight: "bold" }}
          >
            Voir moins de projets
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectsSection;
