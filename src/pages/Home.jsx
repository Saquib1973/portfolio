import React from 'react'
import Navigation from '../components/Navigation';
import { homeContent } from '../utils/NavigationContent';
import Project from '../components/Project';
import Socials from '../components/Socials';
import TechStack from '../components/TechStack';

const Home = () => {
    return (
        <div className='text-6xl'>
            <Navigation heading={homeContent.heading} description={homeContent.description} />
            <Project />
            <TechStack />
            <Socials />
        </div>
    )
}

export default Home;