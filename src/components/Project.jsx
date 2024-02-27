import React, { useState } from 'react';
import { Projects } from '../utils/ProjectContent';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
const Project = () => {
    const [page, setPage] = useState(0);
    const projectsPerPage = 4; // Number of projects to display per page

    const totalPages = Math.ceil(Projects.length / projectsPerPage);

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    // Calculate the starting and ending index of projects for the current page
    const startIndex = page * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;

    return (
        <div className='py-10'>
            <p className='text-3xl'>projects</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-6 py-10 '>
                {
                    Projects.slice(startIndex, endIndex).map((project, index) => {
                        return (
                            <ProjectCard key={index} index={index} id={project.id} name={project.name} detail={project.detail} tags={project.tags} git={project.git} link={project.link} image={project.image} />
                        );
                    })
                }
            </div>

            <nav className='w-full items-center justify-center flex'>
                <ul className="flex items-center h-10 text-base">
                    <li>
                        <button onClick={() => handlePageChange(Math.max(page - 1, 0))} className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-blackFade border border-e-0 border-white/20 rounded-s-lg">
                            <svg className="w-3 h-3 -rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                        </button>
                    </li>
                    {
                        Array.from({ length: totalPages }, (_, i) => (
                            <li key={i}>
                                <button onClick={() => handlePageChange(i)} className={`flex items-center justify-center px-4 h-10 leading-tight ${page === i ? 'bg-black' : 'bg-blackFade'} text-white border border-white/20`}>
                                    {i + 1}
                                </button>
                            </li>
                        ))
                    }
                    <li>
                        <button onClick={() => handlePageChange(Math.min(page + 1, totalPages - 1))} className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-blackFade border  border-white/20 rounded-e-lg ">
                            <svg className="w-3 h-3 rotate-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                        </button>
                    </li>
                </ul>
            </nav>

        </div>
    );
};

const ProjectCard = ({ name, detail, index, tags = [], id, image, git, link }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.4, duration: 0.5 }}
        >

            <Link to={`/project/${id}`} className='flex group justify-start cursor-pointer flex-col gap-3 hover:border-white bg-blackFade border-[0.1px] border-black rounded-md transition-all duration-500  p-8 py-10'>
                <p className='flex items-center gap-0.5 text-xl'>{name}
                    <svg className='group-hover:text-green text-2xl' stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </p>
                <p className='leading-5 text-sm'>
                    {detail}
                </p>
                <div className='flex gap-2'>
                    {
                        tags.map((tag, index) => {
                            return (
                                <div key={index} className='border-[1px] border-white/20 text-white/40 p-1 px-3 rounded-md text-sm'>
                                    {tag}
                                </div>
                            );
                        })
                    }
                </div>
            </Link>
        </motion.div>
    );
};

export default Project;