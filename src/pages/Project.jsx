import React, { useEffect } from 'react'
import Navigation from '../components/Navigation'
import { Projects } from '../utils/ProjectContent';
import { Link, useLocation } from 'react-router-dom';
import Socials from "../components/Socials"
import { motion } from "framer-motion"
import long from "../imgs/long.jpeg"
const Project = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const projectId = useLocation().pathname.split('/')[2];
    const project = Projects.find(project => project.id === projectId);
    return (
        <>
            <Navigation heading={`check my project : ${project.name}`} description={project.description} />
            <div className='px-4'>


                <motion.div className='w-full flex-row-reverse flex max-sm:flex-col gap-4 justify-start items-center sm:items-start pt-10'
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 1 }}>
                    <div className="image-wrap w-[300px] h-[300px] md:w-[400px] md:h-[400px] overflow-hidden mx-auto border-2 rounded-md border-transparent transition-all hover:border-green ">
                        <motion.img
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            src={project.img ? project.img : long} className="w-full h-full hover:object-bottom transition-all duration-[3000ms] ease-linear object-cover object-top " alt="photo" />
                    </div>
                    <motion.div className='flex flex-col justify-end gap-4 w-[90%] sm:w-1/3' initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}>
                        <p className='mt-10 text-white/80'>
                            {project.detail}
                        </p>
                        <div className='flex justify-center gap-8'>
                            <Link to={project.git}><i className="fi text-3xl fi-brands-github hover:text-green"></i></Link>
                            {
                                project.link && <Link to={project.link}><i className="fi text-3xl fi-rr-link-alt hover:text-green"></i></Link>
                            }
                        </div>
                    </motion.div>
                </motion.div>
                <Socials />
            </div>
        </>
    )
}

export default Project