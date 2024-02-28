import React, { useEffect } from 'react'
import Navigation from '../components/Navigation';
import { educationContent } from '../utils/NavigationContent';
import StudyTimeLine from '../components/StudyTimeLine';
import Socials from '../components/Socials';

const Education = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Navigation heading={educationContent.heading} description={educationContent.description} />
            <div className='px-4'>


                <StudyTimeLine />
                <Socials />
            </div>
        </div>
    )
}

export default Education;