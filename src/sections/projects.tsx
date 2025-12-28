import { portfolioData } from "@/data/portfolio-data";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star } from "lucide-react";

function Projects() {
  const { projects } = portfolioData;

  return (
    <div
      id="projetos"
      className="flex w-full min-h-screen justify-center items-center px-8 py-20"
    >
      <div className="flex flex-col items-start gap-12 w-full max-w-6xl">
        {/* Header */}
        <div
          className="flex flex-col gap-2"
          style={{ animation: "fadeIn 0.8s ease-out" }}
        >
          <h2 className="text-5xl font-black text-foreground">Projetos</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-2">
            Alguns dos projetos que desenvolvi
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group backdrop-blur-xl bg-muted/50 border border-border rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition-transform"
              style={{
                animation: `fadeIn 0.8s ease-out ${index * 0.1 + 0.2}s backwards`,
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-orange-500/20 to-amber-500/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {project.stars && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full bg-background/80 backdrop-blur-sm">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span className="text-xs font-semibold">{project.stars}</span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col gap-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <Badge key={i} variant="tech">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-auto pt-4 border-t border-border">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background hover:bg-accent transition-colors text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      Código
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white transition-colors text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
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
