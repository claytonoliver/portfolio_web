import { useState } from "react";
import {
    NavigationMenu,
    NavigationMenuList
} from "@/components/ui/navigation-menu.tsx";
import {NavigationMenuItem, NavigationMenuLink} from "@radix-ui/react-navigation-menu";
import {SwitchTheme} from "@/components/switch-theme.tsx";
import {BriefcaseIcon, CodeIcon, HomeIcon, MailIcon, MenuIcon, UserIcon, ZapIcon} from "lucide-react";
import type {NavigationItem} from "@/types/navigation.tsx";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const NavItems: NavigationItem [] = [
    {
        title: "Início",
        link: "#hero",
        description: "Página inicial",
        icon: HomeIcon,
    },
    {
        title: "Sobre",
        link: "#sobre",
        description: "Sobre mim",
        icon: UserIcon
    },
    {
        title: "Habilidades",
        link: "#habilidades",
        description: "Minhas habilidades",
        icon: ZapIcon
    },
    {
        title: "Experiência",
        link: "#experiencia",
        description: "Experiência profissional",
        icon: BriefcaseIcon
    },
    {
        title: "Projetos",
        link: "#projetos",
        description: "Meus projetos",
        icon: CodeIcon
    },
    {
        title: "Contato",
        link: "#contato",
        description: "Entre em contato",
        icon: MailIcon
    }
]

function Header(){
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-border backdrop-blur-xl bg-background/80">
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex flex-row items-center justify-between gap-4">
                    {/* Logo/Brand - visible on mobile */}
                    <div className="md:hidden">
                        <span className="text-lg font-bold bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                            CO
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <NavigationMenu className="hidden md:flex justify-center flex-1">
                        <NavigationMenuList>
                            {NavItems.map((item, index) => (
                                <NavigationMenuItem key={`simple-${index}`}>
                                    <NavigationMenuLink>
                                        <NavigationMenuLink href={item.link}
                                            className="group inline-flex h-9 gap-2 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground hover:cursor-pointer transition-colors">
                                            {item.icon && <item.icon className="h-4 w-4"/>}
                                            {item.title}
                                        </NavigationMenuLink>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* Right side - Theme + Mobile Menu */}
                    <div className="flex items-center gap-2">
                        {/* Theme Switcher */}
                        <SwitchTheme />

                        {/* Mobile Menu */}
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="md:hidden">
                                    <MenuIcon className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>Menu</SheetTitle>
                                </SheetHeader>
                                <nav className="flex flex-col gap-4 mt-8">
                                    {NavItems.map((item, index) => {
                                        const Icon = item.icon;
                                        return (
                                            <a
                                                key={index}
                                                href={item.link}
                                                onClick={() => setIsOpen(false)}
                                                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent transition-colors"
                                            >
                                                {Icon && <Icon className="h-5 w-5" />}
                                                <div className="flex flex-col">
                                                    <span className="font-medium">{item.title}</span>
                                                    <span className="text-xs text-muted-foreground">{item.description}</span>
                                                </div>
                                            </a>
                                        );
                                    })}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header