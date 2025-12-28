import Header from "@/layout/header.tsx";
import {Footer} from "@/layout/footer.tsx";

interface LayoutProps {
    children?: React.ReactNode;
}
function Layout({ children }: LayoutProps) {
    return (
        <div className={"flex flex-col w-full h-full"}>
            <Header />
            <main className={"flex-5 pt-16"}>
                {children}
            </main>
            <Footer />
        </div>
    )
}
export {Layout}