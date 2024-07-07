import React, { useEffect } from 'react'
import Navigation from '../components/Navigation'
import { Projects } from '../utils/ProjectContent';
import { Link, useLocation } from 'react-router-dom';
import Socials from "../components/Socials"
import { motion } from "framer-motion"
import long from "../imgs/long.jpeg"
import Tooltip from '../components/Tooltip';
const Project = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const projectId = useLocation().pathname.split('/')[2];
    const project = Projects.find(project => project.id === projectId);
    console.log(project)
    return (
        <>
            <Navigation heading={`${project.name}  ( ${project.date} )`} />
            <div className='px-2 w-full'>
                <div className='flex gap-4 py-6'>

                    <Link to={project.git} className='w-1/2 text-2xl bg-blackFade text-white rounded-md hover:text-gray-50 shadow-inner shadow-white/40 hover:bg-green p-2 px-5 gap-2 flex items-center justify-center'><i className="fi text-xl fi-brands-github hover:text-green"></i>Github</Link>
                    {
                        project.link &&
                        <Link to={project.link} className='w-1/2 text-2xl hover:bg-green rounded-md hover:text-gray-50 shadow-inner shadow-white/40 text-black bg-white p-2 px-5 gap-2 flex items-center justify-center'><i className="fi text-xl fi-rr-link-alt hover:text-green"></i>Live Link</Link>
                    }
                </div>
                <p className='adminSubHeading mb-0 pt-4'>
                    Overview
                </p>
                <motion.div className='flex flex-col text-xl pt-6 justify-end gap-4 w-full' initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}>
                    {project.detail}

                </motion.div>
                <motion.div className='py-10 w-full flex-row flex max-md:flex-col gap-4 justify-center items-center md:items-start '
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}>
                    <div className='flex flex-col-reverse gap-4 md:items-end'>

                        <div className="group relative image-wrap aspect-video overflow-hidden mx-auto border-2 rounded-md border-transparent transition-all hover:border-green "

                        >
                            <div className='absolute top-1/2 z-[30] bg-green text-black p-4 rounded-full -translate-x-1/2 left-1/2 group-hover:hidden'>
                                Hover to Scroll
                            </div>
                            <img
                                src={project.img ? project.img : long} className="blur-[1px] border-green border group-hover:blur-none w-full h-full hover:object-bottom transition-all duration-[4000ms] ease-linear object-cover object-top " alt="photo" />
                        </div>

                    </div>
                </motion.div>
                <div className='-mt-8 pb-5 flex gap-2 items-center justify-end pr-4'>
                    {
                        project.tags.map((tag, i) => (
                            <div key={i} className='bg-gray-500 rounded-lg p-0.5 px-2 text-sm text-gray-50'>
                                {tag}
                            </div>
                        ))
                    }
                </div>
                <p className='adminSubHeading'>Description</p>
                <motion.div className='flex flex-col justify-end gap-4 w-full' initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}>
                    <ol className='list-disc space-y-2 text-white/80'>
                        {
                            project.description.map((item, i) => (
                                <motion.li key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.5, duration: 1 }}
                                >{item}</motion.li>
                            ))
                        }
                    </ol>

                </motion.div>
                <div className='bg-white/50 mt-10 w-full h-0.5' />
                <div className='py-6 flex flex-col gap-4'>
                    <p className='text-xl'>Links :</p>

                    <ol className='list-disc ml-10 space-y-4'>
                        <li className='underline underline-offset-4'>
                            <Link to={project.git}>
                                Code on Github

                            </Link>
                        </li>
                        <li className='underline underline-offset-4'>
                            {
                                project.link &&
                                <Link to={project.link}>
                                    Preview Live
                                </Link>
                            }


                        </li>
                    </ol>
                </div>
                <Socials />
            </div>
        </>
    )
}

export default Project