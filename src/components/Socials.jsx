import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

const Socials = () => {
    return (
        <motion.div className='mt-5'
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 1 }}>
            <p className='text-3xl'>
                socials
            </p>
            <p className=' flex gap-1 gap-y-2 py-4 text-white/60 items-center flex-wrap'>
                you can find more of my work on
                <Link to={'https://github.com/Saquib1973'} className='text-light flex items-center hover:text-green' >github
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </Link>,<Link to={'https://twitter.com/drake_spirit'} className='text-light flex items-center hover:text-green' >twitter
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </Link> and <Link to={'https://www.linkedin.com/in/saquib-ali-4a3235219/'} className='text-light flex items-center hover:text-green' >linkedin
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </Link>

            </p>
        </motion.div>
    )
}

export default Socials