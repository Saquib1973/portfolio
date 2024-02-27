import React from 'react'
import { motion } from "framer-motion"
import { WorkTime } from '../utils/Resource'


const WorkTimeline = () => {
    return (
        <motion.div className='py-10'
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 1 }}>

            <ol className="relative border-s border-white/20">
                {
                    WorkTime.map((work, i) => (
                        <li className="mb-10 ms-4">
                            <div className={`absolute w-3 h-3 ${i === 0 ? "bg-green" : "bg-white/60"} rounded-full mt-1.5 -start-1.5 border border-black/40`}></div>
                            <motion.h3
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 * i, duration: 1.5 }}
                                className="text-lg font-semibold text-white">{work.name}</motion.h3>
                            <motion.h3
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 * i, duration: 1.5 }}
                                className="font-extralight mb-4 text-white/60">{work.role} ( <time className="mb-1 text-sm font-normal text-white/40">{work.time}</time> )</motion.h3>

                            <motion.ul
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 * i, duration: 1.5 }}
                                className='list-disc ml-10'>
                                {work.detail.map((d) => (
                                    <li className="mb-1 text-base font-normal text-gray-500">{d}</li>
                                ))}


                            </motion.ul>

                        </li>
                    ))
                }

            </ol>


        </motion.div>
    )
}

export default WorkTimeline