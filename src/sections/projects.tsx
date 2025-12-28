import { portfolioData } from "@/data/portfolio-data";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star } from "lucide-react";

function Projects() {
  const { projects } = portfolioData;

  return (
    <div
      id="projetos"
      className="flex w-full min-h-screen justify-center items-center px-4 md:px-8 py-20"
    >
      <div className="flex flex-col items-start gap-8 md:gap-12 w-full max-w-6xl">
        {/* Header */}
        <div
          className="flex flex-col gap-2"
          style={{ animation: "fadeIn 0.8s ease-out" }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-foreground">Projetos</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full"></div>
          <p className="text-base md:text-lg text-muted-foreground mt-2">
            Alguns dos projetos que desenvolvi
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative backdrop-blur-xl bg-muted/50 border border-border rounded-2xl shadow-2xl overflow-hidden hover:shadow-orange-500/20 transition-all duration-300"
              style={{
                animation: `fadeIn 0.8s ease-out ${index * 0.1 + 0.2}s backwards`,
              }}
            >
              {/* Project Image */}
              <div className="relative h-40 md:h-48 overflow-hidden bg-gradient-to-br from-orange-500/20 to-amber-500/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {project.stars && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-background/80 backdrop-blur-sm">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span className="text-xs font-semibold">{project.stars}</span>
                  </div>
                )}

                {/* Hover Overlay with Full Description */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                  <p className="text-xs md:text-sm text-foreground leading-relaxed line-clamp-6">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 md:p-6 flex flex-col gap-3 md:gap-4">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground line-clamp-2 group-hover:line-clamp-none transition-all">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <Badge key={i} variant="tech" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Links */}
                <div className="flex flex-col sm:flex-row gap-2 md:gap-3 mt-auto pt-3 md:pt-4 border-t border-border">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-3 md:px-4 py-2 rounded-lg bg-background hover:bg-accent transition-colors text-xs md:text-sm font-medium w-full sm:w-auto"
                    >
                      <Github className="w-3 h-3 md:w-4 md:h-4" />
                      Código
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-3 md:px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white transition-colors text-xs md:text-sm font-medium w-full sm:w-auto"
                    >
                      <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
