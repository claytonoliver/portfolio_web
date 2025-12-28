import { portfolioData } from "@/data/portfolio-data";

function About() {
  const { about } = portfolioData;

  return (
    <div
      id="sobre"
      className="flex w-full min-h-screen justify-center items-center px-8 py-20"
    >
      <div className="flex flex-col items-start gap-12 w-full max-w-6xl">
        {/* Header */}
        <div
          className="flex flex-col gap-2"
          style={{ animation: "fadeIn 0.8s ease-out" }}
        >
          <h2 className="text-5xl font-black text-foreground">
            {about.title}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-12 w-full">
          {/* Description */}
          <div
            className="flex-1 backdrop-blur-xl bg-muted/50 border border-border rounded-2xl shadow-2xl p-10"
            style={{ animation: "fadeIn 1s ease-out 0.2s backwards" }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              {about.description}
            </p>
          </div>

          {/* Stats */}
          <div
            className="flex flex-col gap-6 lg:w-80"
            style={{ animation: "slideInRight 1s ease-out 0.4s backwards" }}
          >
            {about.stats.map((stat, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-muted/50 border border-border rounded-2xl shadow-2xl p-6 hover:scale-105 transition-transform"
              >
                <div className="text-4xl font-black bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
