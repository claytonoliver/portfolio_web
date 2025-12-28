import { portfolioData } from "@/data/portfolio-data";

function Footer() {
    const timeNow = new Date().getFullYear();
    const { social } = portfolioData;

    return (
        <footer className="w-full border-t border-border backdrop-blur-xl bg-muted/30">
            <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
                    {/* Copyright */}
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <p className="text-foreground font-semibold">
                            Clayton Oliveira
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Full Stack Developer
                        </p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                            © {timeNow} - Feito com React usando shadcn e muito café
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-2 md:gap-4">
                        {social.map((link, index) => {
                            const Icon = link.icon;
                            return (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 md:p-3 rounded-full bg-background hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 border border-border hover:border-transparent transition-all group"
                                    aria-label={link.label}
                                >
                                    <Icon className="w-4 h-4 md:w-5 md:h-5 text-foreground group-hover:text-white transition-colors" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export { Footer };