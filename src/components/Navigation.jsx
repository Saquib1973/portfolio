import React, { useContext, useEffect, useState } from 'react'
import saquib from "../imgs/saquib.png"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { links, navItems } from '../utils/NavigationContent'
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion"
import leetcode from "../imgs/leetcode.png"
import click from "../imgs/click.mp3";
import { ThemeContext } from '../App';

import Tooltip from './Tooltip';
import imgage from "../imgs/404.png"
export const audioPlay = () => {
    const audio = new Audio(click);
    audio.volume = 0.05;
    audio.play();
}
const Navigation = ({ heading, description }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
    const navigate = useNavigate();
    const location = useLocation().pathname;
    let { theme, setTheme } = useContext(ThemeContext)
    const handleThemeChange = () => {
        audioPlay();
        let newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('saquib.vercel.app', JSON.stringify({ theme: newTheme }));

    }
    return (
        <motion.div ref={ref} className='border-b backdrop-blur-md border-white/10 pt-8 md:pt-6 bg-transparent z-40 sticky -top-[310px] px-2 md:px-4'
            animate={controls}
            initial="hidden"
            transition={{ delay: 0.1, duration: 1 }}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 10 }
            }}
        >
            <div className='flex justify-between'>
                <Link to={'/'}>
                    <span class="before:block before:absolute before:-inset-2 before:-inset-x-5 before:-skew-y-6 before:rounded-md before:bg-green/60 before:backdrop-blur-sm relative inline-block">
                        <img src={saquib} alt="profile image" className='w-[70px] h-[70px] rounded-xl overflow-hidden relative object-top' />
                    </span>
                </Link>

                <div className='flex gap-4 flex-col items-end justify-start'>
                    <div className='flex gap-4 items-center'>

                        <Tooltip message={'Leetcode'}>
                            <Link to={'https://leetcode.com/Dr_Lilack/'} className='hover:text-white/60 flex'>

                                <img src={leetcode} className='h-7 bg-white rounded-full mb-1 p-0.5 w-7' alt="" />
                            </Link>
                        </Tooltip>
                        {
                            links.map((link, i) => (
                                <Tooltip message={link.name} key={i}>
                                    <Link to={link.href} className='hover:text-green'><i className={`text-2xl ${link.icon}`}></i></Link>
                                </Tooltip>
                            ))
                        }

                    </div>
                </div>
            </div>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.2, duration: 1 }}
                animate={{
                    opacity: 1, y: 0
                }}
                className='mt-6 text-xl '>{heading}</motion.p>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 1 }}
                animate={{
                    opacity: 1, y: 0
                }}
                className={`${description?.length === 0 ? "" : ""} mt-8 text-light text-base md:text-xl leading-8 h-[141px] overflow-y-auto
                first-letter:text-3xl md:first-letter:text-4xl first-letter:font-bold first-letter:text-white
                first-letter:mr-1 first-letter:float-left`}>
                {
                    description?.length === 0 ? <img src={imgage} className='object-contain' /> : <>{description}</>
                }

            </motion.p>
            <div className='flex px-0 md:px-4 backdrop-blur-xl pb-0 md:py-5 max-md:pt-6 pt-5 gap-1 sm:gap-2 md:gap-6 text-dark justify-around md:justify-start'>
                {
                    navItems.map((navItem, i) => (
                        <motion.div
                            onClick={async () => {
                                audioPlay();
                                if (navItem.name === 'blog') {
                                    window.location.href = navItem.link; // Directly open the blog link
                                } else {
                                    navigate(navItem.link, { replace: navItem.name === 'blog' });
                                }
                            }}
                            key={navItem.name}
                            className="flex"
                            ref={ref}
                            animate={controls}
                            initial="hidden"
                            variants={{
                                visible: { opacity: 1, x: 0 },
                                hidden: { opacity: 0, x: -20 },
                            }}
                            transition={{ delay: 0.3 * i, duration: 0.5 }}
                        >
                            <p className={`md:hidden hover:text-green ${location === navItem.link ? "text-green" : ""}`}
                            >
                                {navItem.icon}
                            </p>
                            <button className={`text-xl ${location === navItem.link ? "text-green" : ""} max-md:hidden  relative group py-1 flex items-center justify-center md:gap-0.5`}>
                                {navItem.name}

                                <svg className={`text-xl ${location === navItem.link ? "text-green" : ""}`} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                <span className={`absolute inset-x-0 ${location === "/" ? "-bottom-1" : "bottom-0"} h-0.5 bg-green origin-left transition-all duration-300 scale-x-0 ${location === navItem.link ? "scale-x-100" : "group-hover:scale-x-100"}`}></span>
                            </button>
                        </motion.div>
                    ))
                }
                <div className='md:ml-auto relative flex items-center justify-center  '>
                    <Tooltip message={`${theme === 'dark' ? 'light' : 'dark'} mode`}>
                        {
                            theme === "dark" ?
                                <i className="fi fi-ss-brightness active:scale-90 hover:scale-110 relative max-md:bottom-2 hover:bg-white p-2 transition-all text-green cursor-pointer text-2xl flex items-start justify-start rounded-full" onClick={handleThemeChange}></i>
                                :
                                <i className="fi fi-ss-moon-stars active:scale-90 hover:scale-110 relative max-md:bottom-2 hover:bg-blackFade p-2 transition-all text-green cursor-pointer text-2xl flex items-start justify-start rounded-full" onClick={handleThemeChange}></i>
                        }
                    </Tooltip>
                </div>

            </div>
        </motion.div>
    )
}

export default Navigation