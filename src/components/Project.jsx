import React, { useEffect, useState } from 'react';
import { Projects } from '../utils/ProjectContent';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import Tooltip from './Tooltip';
import Heading from './Heading';
const Project = () => {
    const ProjectClickMoveUp = () => {
        window.scrollTo(0, 350);
    }

    const [selectedTypes, setSelectedTypes] = useState('');
    const [page, setPage] = useState(0);
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const projectsPerPage = 4;
    const handleTypeChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedTypes(selectedValue ? selectedValue : '');
        setPage(0);
    };

    const handlePageChange = (newPage) => {
        setPage(Math.min(Math.max(newPage, 0), totalPages - 1));
    };

    const filteredProjects = Projects.filter(project => {
        return selectedTypes ? project.type.includes(selectedTypes) : true;
    });

    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className='py-6'>
            <motion.div ref={ref} className=' flex gap-4 items-end'
                animate={controls}
                initial="hidden"
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 20 },
                }}
                transition={{ delay: 0.2, duration: 1 }}
            >
                <Heading name={'project'} />
                <div className='flex items-center gap-1 ml-auto'>
                    <select className='text-xs outline-none rounded-md backdrop-blur-md w-[80px] border border-green transition-all duration-500 shadow-sm shadow-white/60 md:w-[80px] md:text-sm p-1 bg-transparent text-white' value={selectedTypes} onChange={handleTypeChange}>
                        <option className='p-1 line-clamp-1 bg-black/80 text-white' value="">All</option>
                        <option className='p-1 line-clamp-1 bg-black/80 text-white' value="frontend">Frontend</option>
                        <option className='p-1 line-clamp-1 bg-black/80 text-white' value="backend">Backend</option>
                        <option className='p-1 line-clamp-1 bg-black/80 text-white' value="design">Design</option>
                        <option className='p-1 line-clamp-1 bg-black/80 text-white' value="fullstack">Fullstack</option>
                        <option className='p-1 line-clamp-1 bg-black/80 text-white' value="core">Core</option>
                    </select>
                </div>
            </motion.div>
            <div className='grid grid-cols-1 md:grid-cols-2 h-full gap-6 py-8 '>
                {
                    filteredProjects.slice(page * projectsPerPage, (page + 1) * projectsPerPage).map((project, index) => {
                        return (
                            <ProjectCard key={index} index={index} id={project.id} name={project.name} detail={project.detail} tags={project.tags} git={project.git} link={project.link} image={project.img} />
                        );
                    })
                }
            </div>

            <nav className='w-full items-center justify-center flex'>
                <ul className="flex items-center h-10 text-base" onClick={ProjectClickMoveUp}>
                    <li>
                        <button onClick={() => handlePageChange(page - 1)} className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-blackFade border border-e-0 border-white/20 rounded-s-lg ${page === 0 ? 'opacity-50 pointer-events-none' : ''}`}>
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
                        <button onClick={() => handlePageChange(page + 1)} className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-blackFade border  border-white/20 rounded-e-lg ${page === totalPages - 1 ? 'opacity-50 pointer-events-none' : ''}`}>
                            <svg className="w-3 h-3 rotate-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                        </button>
                    </li>
                </ul>
            </nav>

        </motion.div>
    );
};

const ProjectCard = ({ name, detail, index, tags = [], id, image, git, link }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView, detail]);

    return (
        <Tooltip message={`Explore ${name} further`}>
            <Link to={`/project/${id}`} className='w-full flex group justify-start group h-full cursor-pointer flex-col gap-4 hover:border-white/50 bg-blackFade hover:shadow-inner active:scale-95 hover:shadow-white/40 rounded-md transition-all duration-500  p-8 py-10'>
                <div className='w-full' ref={ref}>
                    <motion.div
                        className='w-full min-h-full flex justify-start gap-4 flex-col'
                        animate={controls}
                        initial="hidden"
                        variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: 20 }
                        }}
                        transition={{ delay: (index % 4) * 0.2, duration: 1 }}
                    >
                        <p className='flex items-center gap-0.5 text-2xl'>{name}
                            <svg className='group-hover:text-green text-2xl' stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                        </p>
                        <p className='leading-5 text-sm text-white/70 tracking-wide'>
                            {detail}
                        </p>
                        <div className='flex gap-2 gap-y-1 max-h-14 items-center overflow-y-auto flex-wrap'>
                            {
                                tags.map((tag, index) => (
                                    <div key={index} className='border-[1px] duration-500 transition-all border-white/50 text-white/40 p-1 px-3 rounded-md text-sm'>
                                        {tag}
                                    </div>
                                ))
                            }
                        </div>
                    </motion.div>
                </div>
            </Link>
        </Tooltip>
    );
};

export default Project;
