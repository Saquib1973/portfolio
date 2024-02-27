import React from 'react'
import Navigation from '../components/Navigation';
import { educationContent } from '../utils/NavigationContent';
import StudyTimeLine from '../components/StudyTimeLine';
import Socials from '../components/Socials';

const Education = () => {
    return (
        <div>
            <Navigation heading={educationContent.heading} description={educationContent.description} />
            <StudyTimeLine />
            <Socials />
        </div>
    )
}

export default Education;