import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LandingPage} from "@/Pages/landingPage.tsx";
import {ThemeProvider} from "@/components/theme-provider.tsx";
import { Analytics } from "@vercel/analytics/next"

function App() {
    return (
        <ThemeProvider defaultTheme={"dark"}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>} />
            </Routes>
            <Analytics />
        </BrowserRouter>
        </ThemeProvider>

    )
}

export default App
