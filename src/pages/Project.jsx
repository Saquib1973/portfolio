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
    console.log(project.description)
    return (
        <>
            <Navigation heading={`Project Name : ${project.name}  ( ${project.date} )`} description={project.detail} />
            <div className='px-4'>


                <motion.div className='py-10 w-full flex-row-reverse flex max-md:flex-col gap-4 justify-center items-center md:items-start '
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}>
                    <div className='flex flex-col-reverse gap-4 md:items-end'>

                        <div className="image-wrap w-[300px] h-[300px] md:w-[400px] md:h-[400px] overflow-hidden mx-auto border-2 rounded-md border-transparent transition-all hover:border-green ">
                            <motion.img
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                src={project.img ? project.img : long} className="w-full h-full hover:object-bottom transition-all duration-[3000ms] ease-linear object-cover object-top " alt="photo" />
                        </div>
                        <div className='flex justify-center gap-8'>
                            <Link to={project.git}><i className="fi text-3xl fi-brands-github hover:text-green"></i></Link>
                            {
                                project.link && <Link to={project.link}><i className="fi text-3xl fi-rr-link-alt hover:text-green"></i></Link>
                            }
                        </div>
                    </div>
                    <motion.div className='flex flex-col justify-end gap-4 w-[90%] md:w-2/3' initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}>
                        <ol className='list-disc space-y-2 text-white/80'>
                            {
                                project.description.map((item, i) => (
                                    <motion.li
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.5, duration: 1 }}
                                    >{item}</motion.li>
                                ))
                            }
                        </ol>

                    </motion.div>
                </motion.div>
                <Socials />
            </div>
        </>
    )
}

export default Project