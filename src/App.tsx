import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LandingPage} from "@/Pages/landingPage.tsx";
import {ThemeProvider} from "@/components/theme-provider.tsx";

function App() {
    return (
        <ThemeProvider defaultTheme={"dark"}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>} />
            </Routes>
        </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
