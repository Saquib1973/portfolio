import { Link, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Education from "./pages/Education";
import Work from "./pages/Work";
import Home from "./pages/Home";
import Particle from "./components/ParticleComponent";
import GuestBook from "./pages/GuestBook";
import Error from "./pages/Error";
import Project from "./pages/Project";
import { createContext, useEffect, useState } from "react";
import Resume from "./pages/Resume";
import { motion } from "framer-motion"
import { audioPlay } from "./components/Navigation";
import Tooltip from "./components/Tooltip";
// import Particle from "./components/Particle";
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
    const location = useLocation();

    return (
        <ThemeContext.Provider value={{ theme, setTheme }} >
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 1 }}
                >

                    <Tooltip message={'Open Resume'}>
                        <Link
                            to={'/resume'} onClick={() => audioPlay()} className={`${location.pathname === '/resume' ? "hidden" : ""} z-[100] active:scale-95 transition-all fixed max-xl:bottom-3 xl:top-3 right-2 xl:right-1/2 xl:translate-x-[36rem] bg-green text-gray-50 p-2 rounded-xl items-center flex justify-center gap-2`} >
                            <span>Resume</span>
                            <i className="text-2xl fi fi-rr-document"></i>
                        </Link>
                    </Tooltip>
                    <Particle />
                </motion.div>
                <div className="max-w-4xl pb-10 mx-2 md:mx-auto z-50">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/work" element={<Work />} />
                        <Route path="/resume" element={<Resume />} />
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
