import React, { useState, useEffect, createContext, lazy, Suspense, useRef } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { audioPlay } from "./components/Navigation";
import Tooltip from "./components/Tooltip";
import Loading from "./components/Loading";
import Particle from "./components/ParticleComponent";
const darkThemePreference = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
export const wait = (time) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, time);
    })
}
const Project = lazy(() => wait(2000).then(() => import('./pages/Project')));
const Resume = lazy(() => wait(2000).then(() => import('./pages/Resume')));
const GuestBook = lazy(() => wait(2000).then(() => import('./pages/GuestBook')));
const Education = lazy(() => wait(2000).then(() => import('./pages/Education')));
const Error = lazy(() => wait(2000).then(() => import('./pages/Error')));
const Home = lazy(() => wait(2000).then(() => import('./pages/Home')));
const Work = lazy(() => wait(2000).then(() => import('./pages/Work')));

export const ThemeContext = createContext({});

const App = () => {
    const location = useLocation();
    const storedTheme = JSON.parse(localStorage.getItem("saquib.vercel.app"));
    const initialTheme = storedTheme?.theme || (darkThemePreference() ? "dark" : "light");
    const [theme, setTheme] = useState(initialTheme);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
        localStorage.setItem("saquib.vercel.app", JSON.stringify({ theme }));
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }} >
            <AnimatePresence>
                <Suspense fallback={<Loading />} >

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 1 }}
                    >
                        <Tooltip message={'Open Resume'}>
                            <Link
                                to={'/resume'} onClick={() => audioPlay()} className={`${location.pathname === '/resume' ? "hidden" : ""} z-[100] active:scale-95 transition-all fixed max-xl:bottom-3 xl:top-3 right-2 xl:right-1/2 xl:translate-x-[32rem] bg-green text-gray-50 md:pt-2 md:pb-0 md:px-3 p-1 px-2 rounded-xl items-center flex justify-center gap-2`} >
                                <span className="md:hidden">Resume</span>
                                <i className="text-2xl fi fi-rr-document "></i>
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
                            <Route path="/loading" element={<Loading />} />
                            <Route path="*" element={<Error />} />
                        </Routes>
                    </div>
                </Suspense>
            </AnimatePresence>
        </ThemeContext.Provider>
    );
};

export default App;
