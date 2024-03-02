import React, { useState } from 'react'
import { motion } from "framer-motion"
import { tech } from '../utils/Resource';
const TechStack = () => {
    const [page, setPage] = useState('all')
    const buttonList = ["all", "frontend", "backend", "database", "others"];

    return (
        <motion.div className='pt-6'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
        >
            <p className='text-3xl'>tech stack</p>
            <div className='py-8'>
                <div className='flex flex-wrap gap-3 text-white/40'>
                    {
                        buttonList.map((but, i) => (
                            <motion.button
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.4, duration: 1 }}
                                className={`${page === but ? "text-white" : ""}`} key={but} onClick={() => {
                                    setPage(but);
                                }}>{but}</motion.button>
                        ))
                    }
                </div>
                <div className='flex gap-2 py-8 flex-wrap'>
                    {
                        tech.map((tec, i) => (
                            <motion.div key={i} className={`border bg-blackFade rounded-md px-3 max-md:text-sm md:px-5 p-[10px] md:p-[13px]  ${tec.type === page ? "text-white border-white/60" : "border-blackFade text-white/60"}`}
                                initial={{ opacity: 0, y: 20, x: 10 }}
                                animate={{ opacity: 1, y: 0, x: 0 }}
                                transition={{ delay: i * 0.4, duration: 0.8 }}
                            >{tec.name}</motion.div>
                        ))
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default TechStack