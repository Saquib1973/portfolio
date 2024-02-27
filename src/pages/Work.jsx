import React from 'react'
import { workContent } from '../utils/NavigationContent';
import Navigation from '../components/Navigation';
import WorkTimeline from '../components/WorkTimeline';
import Socials from '../components/Socials';

const Work = () => {
    return (
        <div>
            <Navigation heading={workContent.heading} description={workContent.description} />
            <WorkTimeline />
            <Socials />
        </div>
    )
}

export default Work;