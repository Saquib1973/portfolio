import React, { useEffect, useState } from 'react'
import Navigation from '../components/Navigation';
import { homeContent } from '../utils/NavigationContent';
import Project from '../components/Project';
import Socials from '../components/Socials';
import TechStack from '../components/TechStack';
import Logo from './Logo';
import { useLocation } from 'react-router-dom';

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
        <div className='text-6xl'>

            <Navigation heading={homeContent.heading} description={homeContent.description} />
            <div className='px-4'>

                <Project />
                <TechStack />
                <Socials />
            </div>
        </div>
    )
}

export default Home;