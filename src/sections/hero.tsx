import {Avatar, AvatarImage} from "@/components/ui/avatar.tsx";

function Hero(){
    return (
        <div className={"flex w-full h-screen justify-center items-center px-4 md:px-8"}>
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full max-w-6xl">
                {/* Card Glassmorphism */}
                <div
                    className="flex flex-col gap-4 md:gap-6 p-6 md:p-10 backdrop-blur-xl bg-muted/50 border border-border rounded-2xl shadow-2xl flex-1 w-full"
                    style={{ animation: 'fadeIn 0.8s ease-out' }}
                >
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-green-500 font-mono text-xs md:text-sm">Disponível para projetos</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black text-foreground">
                        Clayton F. Trindade Oliveira
                    </h1>

                    <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                        Desenvolvedor .NET | 4+ anos de experiência
                    </h2>

                    <p className="text-muted-foreground text-base md:text-lg">
                        Especialista em microsserviços com Clean Architecture, CQRS e Domain Events.<br/>
                        Experiência sólida em AWS, Docker, Kubernetes e sistemas financeiros.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-2 md:mt-4">
                        <a
                            href="#projetos"
                            className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform text-center"
                        >
                            Ver Projetos
                        </a>
                        <a
                            href="https://www.linkedin.com/in/claytonf-oliveira/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-muted hover:bg-accent text-foreground rounded-lg font-semibold transition-all text-center"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

                {/* Avatar - Hidden on mobile */}
                <div
                    className="hidden md:block opacity-0"
                    style={{ animation: 'slideInRight 1s ease-out 0.3s forwards' }}
                >
                    <Avatar className={"rounded-2xl w-80 lg:w-96 h-80 lg:h-96 shadow-2xl shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300"}>
                        <AvatarImage
                            className={"rounded-2xl"}
                            src={"https://avatars.githubusercontent.com/u/108222845?v=4"}
                            alt={"@ClaytonOliveira"}
                        />
                    </Avatar>
                </div>
            </div>
        </div>
    )
}

export default Hero