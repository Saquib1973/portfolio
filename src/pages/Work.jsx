import React, { useEffect } from 'react'
import { workContent } from '../utils/NavigationContent';
import Navigation from '../components/Navigation';
import WorkTimeline from '../components/WorkTimeline';
import Socials from '../components/Socials';
const Work = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>

            <Navigation heading={workContent.heading} description={workContent.description} />
            <div className='px-4'>
                <WorkTimeline />
                <Socials />
            </div>
        </>
    )
}

export default Work;