import { motion } from "framer-motion";


export const SquigglyUnderlineWrapper = ({ ml = "", isSelected = true, children }) => {
    return (
        <span className="relative">
            {children}
            {isSelected && (
                <motion.div className={`absolute bottom-[4px] ${ml === "" ? "" : `ml-[${ml}]`} left-0 right-0 h-[1px]`}>
                    <svg width="180" height="30" viewBox="0 0 250 30" fill="none" >
                        <motion.path
                            d="M1 20 C 7.24404 10.0465 21.9151 8.4876 27 11.7778 C 31.575 14.7381 25.2408 29.816 36.2222 23 C 40.0484 20.6251 60 3.3614 60 10.6667 C 60 13.935 59.339 18.1643 60.0556 21.3889 C 61.3827 27.3612 73.4797 14.8052 74.3333 14.2222 C 81.3921 9.4016 102 -6.6627 102 13 C 102 15.8829 102.708 18.3553 99.8889 20 C 97.2439 21.5429 91 24.0542 91 19 C 91 5.7807 109.695 2.7736 120.111 3 C 126.178 3.1319 132.077 4.8412 138 6 C 148.156 7.987 158.253 6.3015 168.278 4.0556 " stroke="#836FFF"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{
                                strokeDasharray: 317.1786193847656,
                                strokeDashoffset: 317.1786193847656,
                            }}

                            animate={{
                                strokeDashoffset: 0,
                            }}
                            transition={{
                                delay: 1,
                                duration: 1.5,
                                ease: [0.37, 0.67, 0.83, 0.27]
                            }}
                        />
                    </svg>
                </motion.div>
            )}
        </span>
    );
};
