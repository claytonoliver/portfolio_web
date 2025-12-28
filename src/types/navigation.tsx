export interface NavigationItem{
    title: string;
    link: string;
    description: string;
    icon?: React.ComponentType<{className?: string}>;
}

export interface NavigationSection {
    title: string;
    items: NavigationItem[];
}