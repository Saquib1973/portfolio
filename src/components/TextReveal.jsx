import React from 'react';
import { motion } from 'framer-motion';

const TextReveal = () => {
    return (
        <div className="flex justify-center items-center bg-black">
            <svg
                width="300"
                height="108"
                viewBox="0 0 300 108"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <mask
                    maskUnits="userSpaceOnUse"
                    // x="0.867188"
                    // y="0.21875"
                    width="300"
                    height="108"
                    fill="none"
                >
                    <rect
                        fill="white"
                        x="0.867188"
                        y="0.21875"
                        width="998"
                        height="108"
                    />
                    <path d="M15.3672 105H1.86719V2.625H15.3672V105Z" />
                </mask>

                <motion.path
                    pathLength={100}
                    initial={{
                        strokeDasharray: 100,
                        strokeDashoffset: 100
                    }}
                    animate={{
                        strokeDashoffset: 0
                    }}
                    transition={{ duration: 2 }}
                    d="M15.3672 105H1.86719V2.625H15.3672V105Z"
                    stroke="#aceca1"
                    strokeWidth="2"
                />
            </svg>

        </div>
    );
};

export default TextReveal;
