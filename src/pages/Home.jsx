import React, { useEffect, useState } from 'react'
import Navigation from '../components/Navigation';
import { homeContent } from '../utils/NavigationContent';
import Project from '../components/Project';
import Socials from '../components/Socials';
import TechStack from '../components/TechStack';
import Logo from './Logo';
import { useLocation } from 'react-router-dom';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion"
const Home = () => {
    const [showLogo, setShowLogo] = useState(true);

    let { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        if (pathname === "/") {
            const hideLogoTimeout = setTimeout(() => {
                setShowLogo(false);
            }, 2500);

            return () => clearTimeout(hideLogoTimeout);
        } else {
            setShowLogo(false);
        }
    }, [pathname]);
    return (
        <motion.div className='text-6xl'
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 1 }}
            animate={{
                opacity: 1, y: 0
            }}
        >
            <Navigation heading={homeContent.heading} description={homeContent.description} />
            <div className='px-4'>
                <Project />
                <TechStack />
                <Socials />
            </div>
        </motion.div>
    )
}

export default Home;