import { FaChevronRight, FaGithub, FaEye } from "react-icons/fa6";
import ImagePreview from "./ImagePreview";

const ProjectCard = ({ project, showPreview = true }) => {
  const {
    title,
    description,
    status,
    technologies,
    githubUrl,
    demoUrl,
    videoUrl,
    preview,
    theme = {
      bgColor: 'bg-gray-50',
      accentColor: 'border-gray-300',
      category: 'Autre'
    }
  } = project;

  return (
    <div className="flex flex-row mt-10 h-96">
      <div className="flex flex-row gap-3">
        <div className="w-full lg:w-[350px] p-3 shadow-sm border">
          <div className="flex flex-col items-start justify-center h-full gap-4">
            {status && (
              <p className='text-purple-500' style={{ fontFamily: 'Karla,sans-serif' }}>
                {status}
              </p>
            )}
            
            {/* Affichage de la categorie avec couleur thematique */}
            <div className={`px-3 py-1 text-xs font-medium rounded-full ${theme.bgColor} ${theme.accentColor} border`}>
              {theme.category}
            </div>
            
            <h3 className='text-2xl font-bold' style={{ fontFamily: 'Pacifico,sans-serif' }}>
              {title}
            </h3>
            
            <p className='text-lg' style={{ fontFamily: 'Karla,sans-serif' }}>
              {description}
            </p>
            
            <ul style={{ fontFamily: 'Karla,sans-serif' }}>
              {technologies.map((tech, index) => (
                <li 
                  key={index}
                  className='flex flex-row items-center gap-2'
                  style={{ fontFamily: 'Karla,sans-serif' }}
                >
                  <FaChevronRight /> {tech}
                </li>
              ))}
            </ul>
            
            {(githubUrl || demoUrl || videoUrl) && (
              <div className="flex flex-row flex-wrap gap-3 mt-2">
                {videoUrl && (
                  <a 
                    target='_blank' 
                    href={videoUrl}
                    rel="noopener noreferrer"
                    style={{ fontFamily: "Karla", fontWeight: "bold" }}
                    className='flex flex-row items-center gap-2 px-5 py-2 text-white bg-purple-500 border-2 rounded-full text-md border-slate-300'
                  >
                    <FaEye /> Vidéo démo
                  </a>
                )}
                
                {demoUrl && (
                  <a 
                    target='_blank' 
                    href={demoUrl}
                    rel="noopener noreferrer"
                    style={{ fontFamily: "Karla", fontWeight: "bold" }}
                    className='px-5 py-2 text-white bg-purple-500 border-2 rounded-full text-md border-slate-300'
                  >
                    Démo live
                  </a>
                )}
                
                {githubUrl && (
                  <a 
                    target='_blank' 
                    href={githubUrl}
                    rel="noopener noreferrer"
                    style={{ fontFamily: "Karla", fontWeight: "bold" }}
                    className='flex flex-row gap-2 px-5 py-2 text-black bg-white border rounded-full text-md border-slate-300'
                  >
                    <FaGithub size={22} /> Github
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
        
        {showPreview && (
          <div className={`hidden lg:block md:w-[650px] lg:[650px] ${theme.bgColor} ${theme.accentColor} border-2 rounded-lg overflow-hidden shadow-sm`}>
            {preview ? (
              <div className="w-full h-full p-2">
                <ImagePreview 
                  projectId={preview.folder} 
                  imageCount={preview.imageCount} 
                />
              </div>
            ) : (
              <div className='flex flex-col items-center justify-center w-full h-full'>
                <p className="text-2xl text-gray-400 mb-2">Pas encore d&apos;apercu</p>
                <div className={`px-4 py-2 text-sm ${theme.bgColor} ${theme.accentColor} border rounded-lg`}>
                  {theme.category}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
