import { ExternalLink } from "lucide-react";

const ProjectCard = ({ title, client, work, link, image, isComingSoon }) => {
  return (
    <div className="group cursor-pointer h-full flex flex-col">
      {/* Image container with hover effect */}
      <div className="relative aspect-video bg-muted/20 rounded-xl overflow-hidden mb-6 shadow-lg hover:shadow-2xl transition-all duration-300 flex-shrink-0">
        {image ? (
          <>
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Overlay with View Live button - appears on hover */}
            {!isComingSoon && link && (
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-200 transform hover:scale-105"
                >
                  View Live
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </>
        ) : isComingSoon ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
            <div className="text-center">
              <p className="text-primary font-syne font-bold text-xl mb-1">Coming Soon</p>
              <p className="text-muted-foreground font-rubik text-xs">Stay tuned for updates</p>
            </div>
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50 font-rubik text-xs bg-gradient-to-br from-slate-900 to-slate-800">
            <span>Project Image</span>
          </div>
        )}
      </div>
      
      {/* Project info - Minimal and clean */}
      <div className="space-y-3 flex-grow flex flex-col">
        <div>
          <h3 className="font-syne font-bold text-base text-foreground leading-tight">{title}</h3>
          <p className="text-xs text-muted-foreground font-rubik mt-1 tracking-wide">{client}</p>
        </div>
        
        {/* Tech stack - Compact */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {work.slice(0, 3).map((tech, idx) => (
            <span key={idx} className="text-xs font-rubik text-primary bg-primary/10 px-2.5 py-1 rounded-md">
              {tech}
            </span>
          ))}
          {work.length > 3 && (
            <span className="text-xs font-rubik text-muted-foreground px-2.5 py-1">
              +{work.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
