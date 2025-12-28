import { portfolioData } from "@/data/portfolio-data";
import { Briefcase, CheckCircle2 } from "lucide-react";

function Experience() {
  const { experiences } = portfolioData;

  return (
    <div
      id="experiencia"
      className="flex w-full min-h-screen justify-center items-center px-8 py-20"
    >
      <div className="flex flex-col items-start gap-12 w-full max-w-6xl">
        {/* Header */}
        <div
          className="flex flex-col gap-2"
          style={{ animation: "fadeIn 0.8s ease-out" }}
        >
          <h2 className="text-5xl font-black text-foreground">Experiência</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative w-full">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 to-amber-500"></div>

          {/* Experience Items */}
          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const animationDelay = index * 0.2 + 0.2;

              return (
                <div
                  key={index}
                  className={`relative flex ${
                    isEven
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  } flex-col gap-8`}
                  style={{
                    animation: `fadeIn 0.8s ease-out ${animationDelay}s backwards`,
                  }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-orange-400 to-amber-500 border-4 border-background"></div>

                  {/* Content */}
                  <div className={`md:w-1/2 ${isEven ? "md:pr-12" : "md:pl-12"} pl-20 md:pl-0`}>
                    <div className="backdrop-blur-xl bg-muted/50 border border-border rounded-2xl shadow-2xl p-8 hover:scale-105 transition-transform">
                      {/* Company & Role */}
                      <div className="flex items-start gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-gradient-to-r from-orange-400 to-amber-500">
                          <Briefcase className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-foreground">
                            {exp.role}
                          </h3>
                          <p className="text-lg text-muted-foreground">
                            {exp.company}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            {exp.startDate} - {exp.endDate}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty space for timeline */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
