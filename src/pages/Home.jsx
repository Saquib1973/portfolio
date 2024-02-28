import React, { useEffect } from 'react'
import Navigation from '../components/Navigation';
import { homeContent } from '../utils/NavigationContent';
import Project from '../components/Project';
import Socials from '../components/Socials';
import TechStack from '../components/TechStack';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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