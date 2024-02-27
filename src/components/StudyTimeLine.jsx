import React from 'react'
import { motion } from "framer-motion"
import { StudyTime } from '../utils/Resource'


const StudyTimeLine = () => {
    return (
        <motion.div className='py-10'
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 1 }}
        >

            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                {
                    StudyTime.map((study, i) => (
                        <li className="mb-10 ms-4"
                            ition={{ delay: 0.1, duration: 1 }}

                        >
                            <div className={`absolute w-3 h-3 ${i === 0 ? "bg-green" : "bg-white/60"} rounded-full mt-1.5 -start-1.5 border border-black/40`}></div>
                            <motion.h3 className="text-lg mb-2 font-semibold text-white"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 * i, duration: 1.5 }}
                            >{study.institute}</motion.h3>
                            <motion.time className="mb-3 text-sm font-normal leading-none text-white/40"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 * i, duration: 1.5 }}>{study.time}</motion.time>
                            <motion.ul className='list-disc ml-10'
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 * i, duration: 1.5 }}>
                                <li className="mb-2 text-base font-normal text-white/60">{study.information}</li>
                                {study.subInformation && <li className="mb-2 text-base font-normal text-white/60">{study.subInformation}</li>}

                            </motion.ul>

                        </li>
                    ))
                }

            </ol>


        </motion.div>
    )
}

export default StudyTimeLine