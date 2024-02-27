import React from 'react'
import saquib from "../imgs/saquib.png"
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navItems } from '../utils/NavigationContent'
import { motion } from "framer-motion"
import leetcode from "../imgs/leetcode.png"
const Navigation = ({ heading, description }) => {
    const location = useLocation().pathname;
    return (
        <motion.div className='border-b border-white/10 pt-16 pb-6 bg-[#1f1f1f] z-40 sticky -top-[340px]'
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 1 }}
        >
            <div className='flex justify-between'>
                <img src={saquib} alt="profile image" className='w-[90px] h-[70px] rounded-md overflow-hidden relative object-top' />

                <div className='flex gap-4 items-center'>
                    <Link to={'https://leetcode.com/Dr_Lilack/'} className='hover:text-white/60 flex'>
                        <img src={leetcode} className='h-7 bg-white rounded-full mb-1 p-0.5 w-7' alt="" />

                    </Link>
                    <Link to={'https://www.instagram.com/kooky._.cookie/'} className='hover:text-white/60'><i className="text-2xl fi fi-brands-instagram"></i></Link>
                    <Link to={'https://www.linkedin.com/in/saquib-ali-4a3235219/'} className='hover:text-blue-500'><i className="text-2xl fi fi-brands-linkedin"></i></Link>
                    <Link to={'https://github.com/Saquib1973'} className='hover:text-white/60'><i className="text-2xl fi fi-brands-github"></i></Link>
                    <Link to={'https://twitter.com/drake_spirit'} className='hover:text-blue-500'><i className="text-2xl fi fi-brands-twitter"></i></Link>
                </div>
            </div>
            <p className='mt-6 text-xl'>{heading}</p>
            <p className='mt-8 text-light text-base md:text-xl leading-8 h-[141px] overflow-y-auto'>{description}</p>
            <div className='flex pt-8 gap-2 sm:gap-4 md:gap-8 text-dark sticky top-0 justify-around md:justify-start'>
                {
                    navItems.map(navItem => (
                        <NavLink to={navItem.link} key={navItem.name} className="flex">
                            <p className={`md:hidden hover:text-green ${location === navItem.link ? "text-green" : ""}`}>
                                {navItem.icon}
                            </p>
                            <p className={`text-xl ${location === navItem.link ? "text-green" : ""} max-md:hidden  relative group py-1 flex items-center justify-center md:gap-0.5`}>
                                {navItem.name}

                                <svg className={`text-xl ${location === navItem.link ? "text-green" : ""}`} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                <span className={`absolute inset-x-0 ${location === "/" ? "-bottom-1" : "bottom-0"} h-0.5 bg-green origin-left transform scale-x-0 transition-transform duration-200 ${location === navItem.link ? "scale-x-100" : "group-hover:scale-x-100"}`}></span>
                            </p>
                        </NavLink>
                    ))
                }

            </div>
        </motion.div>
    )
}

export default Navigation