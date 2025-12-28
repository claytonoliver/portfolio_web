import { portfolioData } from "@/data/portfolio-data";
import { Code, Database, Layers, Settings } from "lucide-react";

const categoryConfig = {
  frontend: {
    title: "Frontend",
    icon: Code,
    color: "from-orange-400 to-amber-500",
  },
  backend: {
    title: "Backend",
    icon: Layers,
    color: "from-blue-400 to-cyan-500",
  },
  database: {
    title: "Database",
    icon: Database,
    color: "from-green-400 to-emerald-500",
  },
  devops: {
    title: "DevOps",
    icon: Settings,
    color: "from-purple-400 to-pink-500",
  },
};

function Skills() {
  const { skills } = portfolioData;

  const skillsByCategory = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, typeof skills>
  );

  return (
    <div
      id="habilidades"
      className="flex w-full min-h-screen justify-center items-center px-8 py-20"
    >
      <div className="flex flex-col items-start gap-12 w-full max-w-6xl">
        {/* Header */}
        <div
          className="flex flex-col gap-2"
          style={{ animation: "fadeIn 0.8s ease-out" }}
        >
          <h2 className="text-5xl font-black text-foreground">
            Habilidades & Stack
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => {
            const config = categoryConfig[category as keyof typeof categoryConfig];
            const Icon = config.icon;

            return (
              <div
                key={category}
                className="backdrop-blur-xl bg-muted/50 border border-border rounded-2xl shadow-2xl p-8 hover:scale-105 transition-transform"
                style={{
                  animation: `fadeIn 0.8s ease-out ${categoryIndex * 0.1 + 0.2}s backwards`,
                }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`p-2 rounded-lg bg-gradient-to-r ${config.color}`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {config.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill, index) => (
                    <div
                      key={index}
                      className="px-3 py-1.5 rounded-full border border-border bg-background/50 hover:bg-accent transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        {/* Level indicator */}
                        <div className="flex gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <div
                              key={i}
                              className={`w-1 h-3 rounded-full ${
                                i < skill.level
                                  ? `bg-gradient-to-r ${config.color}`
                                  : "bg-muted"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
