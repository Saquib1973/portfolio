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
                    animate={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ left: `${tooltipPosition.x + 5}px`, top: `${tooltipPosition.y + 20}px` }}
                    className="z-[101] absolute max-md:hidden transition-all duration-500 text-xs text-white"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex capitalize min-w-[110px]  transition-all duration-500 items-center justify-center p-2 px-3 rounded-3xl bg-green/60 text-gray-50 text-sm backdrop-blur-sm max-w-[400px] tracking-wider"
                    >
                        {message}
                    </motion.span>
                </motion.span>
            )}
        </div>
    );
}