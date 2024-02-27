import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Education from "./pages/Education";
import Work from "./pages/Work";
import Home from "./pages/Home";
import Particle from "./components/ParticleComponent";
import GuestBook from "./pages/GuestBook";
import Error from "./pages/Error";
import Project from "./pages/Project";

const App = () => {
    return (

        <AnimatePresence>
            <Particle />
            <div className="max-w-3xl pb-10 mx-8 md:mx-auto z-50">
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
    )
}

export default App;