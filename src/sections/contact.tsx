import { portfolioData } from "@/data/portfolio-data";


function Contact() {
  const { social } = portfolioData;


  return (
    <div
      id="contato"
      className="flex flex-row w-full min-h-screen justify-center items-center px-4 md:px-8 py-20"
    >
      <div className="flex flex-col items-start gap-8 md:gap-12 w-full max-w-6xl">
        {/* Header */}
        <div
          className="flex flex-col gap-2"
          style={{ animation: "fadeIn 0.8s ease-out" }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground">
            Entre em Contato
          </h2>
          <div className="h-1 w-23 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-2">
            Estou sempre aberto para discutir novos projetos e oportunidades
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 w-full">
          {/* Social Links */}
          <div
            className="lg:w-120 flex flex-col gap-4 md:gap-6"
            style={{ animation: "slideInRight 1s ease-out 0.4s backwards" }}
          >
            <div className="backdrop-blur-xl bg-muted/50 border border-border rounded-2xl shadow-2xl p-4 md:p-6 lg:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">
                Redes Sociais
              </h3>
              <div className="flex flex-col gap-4">
                {social.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg bg-background hover:bg-accent transition-all hover:scale-105 group"
                    >
                      <div className="p-2 rounded-lg bg-gradient-to-r from-orange-400 to-amber-500 group-hover:from-orange-500 group-hover:to-amber-600 transition-all">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-foreground">
                          {link.label}
                        </div>
                        <div className="text-xs md:text-sm text-muted-foreground break-all">
                          {link.platform === "email"
                            ? "claytonoliveira.dev@gmail.com"
                            : `@${link.platform}`}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
