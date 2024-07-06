import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';

function Loader({ i = 0 }) {
    const [loading, setLoading] = useState(true);
    const controls = useAnimation();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (loading) {
            controls.start({
                opacity: 1,
                transition: { duration: 1 }
            });
        } else {
            controls.start({
                opacity: 0,
                transition: { duration: 1 }
            });
        }
    }, [loading, controls]);
    const type = [
        "w-3 h-3 my-12 mx-1",
        "w-2 h-2",

    ]
    return (
        <div className="h-full w-full flex justify-center items-center z-10">
            <div className="p-4 rounded-md">
                <div className="flex justify-center">
                    <div className={`flex gap-${i == 0 ? "0" : "1"}`}>
                        <motion.span
                            className={` ${type[i]} bg-white rounded-full`}
                            animate={{
                                y: [0, -20, 0],
                                opacity: [1, 0], // Fades out
                                transition: { duration: 1, repeat: Infinity }
                            }}
                        />
                        <motion.span
                            className={` ${type[i]} bg-white rounded-full`}
                            animate={{
                                y: [0, -20, 0],
                                opacity: [1, 0],
                                transition: { duration: 1, repeat: Infinity, delay: 0.2 }
                            }}
                        />
                        <motion.span
                            className={` ${type[i]} bg-white rounded-full`}
                            animate={{
                                y: [0, -20, 0],
                                opacity: [1, 0],
                                transition: { duration: 1, repeat: Infinity, delay: 0.4 }
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loader