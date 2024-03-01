import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
    const line1 = "Heyy";
    const line2 = "Lets Gooo!";
    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.08,
            },
        },
    };

    const letter = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    const [count, setCount] = useState(2);

    useEffect(() => {
        const countdown = setInterval(() => {
            if (count > 0) {
                setCount(count - 1);
            }
        }, 1000);
        return () => clearInterval(countdown);
    }, [count]);

    return (
        <div className="z-50 flex-col font-Merienda h-[80vh] w-full flex items-center text-center tracking-widest leading-10 justify-center">
            <motion.h1
                variants={sentence}
                initial="hidden"
                animate="visible"
            >
                {line1.split("").map((char, index) => (
                    <motion.span className='text-xl md:text-3xl' key={char + "-" + index} variants={letter}>
                        {char}
                    </motion.span>
                ))}
                <br />
                {line2.split("").map((char, index) => (
                    <motion.span className='text-xl md:text-3xl' key={char + "-" + index} variants={letter}>
                        {char}
                    </motion.span>
                ))}
            </motion.h1>
            <h1 className='text-xl mt-10'>{count}</h1>
        </div>
    );
};

export default Logo;
