import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Education from "./pages/Education";
import Work from "./pages/Work";
import Home from "./pages/Home";
import Particle from "./components/ParticleComponent";
import GuestBook from "./pages/GuestBook";
import Error from "./pages/Error";
import Project from "./pages/Project";
import { createContext, useEffect, useState } from "react";
const darkThemePreference = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
export const ThemeContext = createContext({});
const App = () => {
    const storedTheme = localStorage.getItem("theme");
    const initialTheme = storedTheme || (darkThemePreference() ? "dark" : "light");
    const [theme, setTheme] = useState(initialTheme);
    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);
    return (
        <ThemeContext.Provider value={{ theme, setTheme }} >
            <AnimatePresence>
                <Particle />
                <div className="max-w-4xl pb-10 mx-8 md:mx-auto z-50">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/work" element={<Work />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/guest-book" element={<GuestBook />} />
                        <Route path="/project/:id" element={<Project />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </div>
            </AnimatePresence>
        </ThemeContext.Provider>
    );
};

export default App;
