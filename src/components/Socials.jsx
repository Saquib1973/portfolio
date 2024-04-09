import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Heading from './Heading';

const Socials = () => {
    const sendEmail = () => {
        const subject = encodeURIComponent('Feedback or Inquiry');
        const body = encodeURIComponent('Dear Saquib,\n\nI wanted to reach out regarding...');
        const mailtoLink = `mailto:saquibali353@gmail.com?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
    };

    return (
        <motion.div
            className='py-6'
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 1 }}
        >
            <Heading name={'socials'} />
            <p className='flex gap-1 gap-y-2 py-4 text-white/60 items-center flex-wrap'>
                You can find more of my work on{' '}
                <Link to={'https://github.com/Saquib1973'} className='text-light flex items-center hover:text-green'>
                    github
                    <svg
                        stroke='currentColor'
                        fill='none'
                        strokeWidth='2'
                        viewBox='0 0 24 24'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <line x1='7' y1='17' x2='17' y2='7'></line>
                        <polyline points='7 7 17 7 17 17'></polyline>
                    </svg>
                </Link>
                ,{' '}
                <Link to={'https://twitter.com/drake_spirit'} className='text-light flex items-center hover:text-green'>
                    twitter
                    <svg
                        stroke='currentColor'
                        fill='none'
                        strokeWidth='2'
                        viewBox='0 0 24 24'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <line x1='7' y1='17' x2='17' y2='7'></line>
                        <polyline points='7 7 17 7 17 17'></polyline>
                    </svg>
                </Link>
                ,{' '}
                <Link
                    to={'https://www.linkedin.com/in/saquib-ali-4a3235219/'}
                    className='text-light flex items-center hover:text-green'
                >
                    linkedIn
                    <svg
                        stroke='currentColor'
                        fill='none'
                        strokeWidth='2'
                        viewBox='0 0 24 24'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <line x1='7' y1='17' x2='17' y2='7'></line>
                        <polyline points='7 7 17 7 17 17'></polyline>
                    </svg>
                </Link>
                , or{' '}
                <button onClick={sendEmail} className='text-light flex items-center hover:text-green'>
                    email
                    <svg
                        stroke='currentColor'
                        fill='none'
                        strokeWidth='2'
                        viewBox='0 0 24 24'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <line x1='7' y1='17' x2='17' y2='7'></line>
                        <polyline points='7 7 17 7 17 17'></polyline>
                    </svg>
                </button>
            </p>
        </motion.div>
    );
};

export default Socials;
