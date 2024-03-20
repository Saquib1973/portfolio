import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Tooltip({ message, children }) {
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        const parentRect = e.currentTarget.getBoundingClientRect();
        const offsetX = e.clientX - parentRect.left;
        const offsetY = e.clientY - parentRect.top;
        setTooltipPosition({ x: offsetX, y: offsetY });
    };

    return (
        <div className="group relative flex" onMouseMove={handleMouseMove} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {children}

            {isHovered && (
                <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    style={{ left: `${tooltipPosition.x + 5}px`, top: `${tooltipPosition.y + 20}px` }}
                    className="z-[1000] absolute max-md:hidden text-xs text-white"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="flex capitalize min-w-[90px]  items-center justify-center p-2 px-3 rounded-3xl bg-green/20 text-sm backdrop-blur-lg max-w-[400px] tracking-wider"
                    >
                        {message}
                    </motion.span>
                </motion.span>
            )}
        </div>
    );
}


/*

export default function Tooltip({ message, children }) {

    return (
        <div className="group relative flex" onMouseMove={handleMouseMove}>
            {children}

            <span
                style={{ left: `${position.x}px`, top: `${position.y + 20}px` }}
                className={`z-[1000] absolute scale-0 transition-all text-xs text-white`}
            >
                <span className="flex justify-center p-4 rounded-full bg-rose-400">
                    {message}
                </span>
            </span>
        </div>
    );
}

*/