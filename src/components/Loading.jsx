import React, { useEffect, useRef, useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import { wait } from '../App'

const Loading = () => {

    const ref = useRef(null)
    useEffect(() => {
        setProgress(10);
        wait(1000).then(() => setProgress(20));
        wait(1000).then(() => setProgress(40));
        wait(1000).then(() => setProgress(100));

    }, [])
    const [progress, setProgress] = useState(0)
    return (
        <div className='max-w-4xl mx-auto min-h-[95vh] justify-start w-full bg-black py-6 flex flex-col items-center gap-10'>
            {/* <LoadingBar color="#836FFF" ref={ref} shadow={true} height={5} /> */}
            <LoadingBar color="#836FFF" progress={progress} onLoaderFinished={() => setProgress(0)} shadow={true} height={5} />

            {/* First */}
            <div className=' rounded-md flex flex-col gap-4 p-4  bg-white/10 w-full animate-pulse' >
                <div className='w-full flex gap-2'>

                    <div className='p-12 bg-white/20 w-1/4' />
                    <div className='flex flex-col w-full gap-2'>

                        <div className='p-3 w-full bg-white/10' />
                        <div className='p-3 w-full bg-white/10' />
                        <div className='p-3 w-full bg-white/10' />
                    </div>

                </div>

                <div className='bg-white/10 w-full h-10 flex items-center gap-4  px-4 rounded-md'>
                    <div className='p-3 w-10 bg-white/10 rounded-md' />
                    <div className='p-3 w-10 bg-white/10 rounded-md' />
                    <div className='p-3 w-10 bg-white/10 rounded-md' />
                    <div className='p-3 w-10 bg-white/10 rounded-md' />
                </div>
            </div>
            {/* Second */}
            <div className=' items-center grid grid-cols-2 w-full p-4 gap-6 rounded-md bg-white/10 animate-pulse'>
                <div className='h-48 bg-white/10 animate-pulse rounded-md flex flex-col gap-2 justify-around p-4 '>
                    <div className='w-full p-3 bg-white/10 animate-pulse' />
                    <div className='w-full p-3 bg-white/10 animate-pulse' />
                    <div className='w-full p-3 bg-white/10 animate-pulse' />
                    <div className='w-full p-3 bg-white/10 animate-pulse' />

                </div>
                <div className='h-48 bg-white/10 animate-pulse rounded-md flex flex-col gap-1 justify-around p-4 '>
                    <div className='p-2 flex gap-2'>
                        <div className='p-12 bg-white/20 w-1/4' />
                        <div className='flex flex-col w-full gap-2'>

                            <div className='p-3 w-full bg-white/10' />
                            <div className='p-3 w-full bg-white/10' />
                            <div className='p-3 w-full bg-white/10' />
                        </div>
                    </div>
                    <div className='w-full p-4 bg-white/10 animate-pulse' />
                </div>
                <div className='h-48 bg-white/10 animate-pulse rounded-md flex flex-col gap-1 justify-around p-4 '>
                    <div className='p-2 flex gap-2'>
                        <div className='p-12 bg-white/20 w-1/4' />
                        <div className='flex flex-col w-full gap-2'>

                            <div className='p-3 w-full bg-white/10' />
                            <div className='p-3 w-full bg-white/10' />
                            <div className='p-3 w-full bg-white/10' />
                        </div>
                    </div>
                    <div className='w-full p-4 bg-white/10 animate-pulse' />
                </div>
                <div className='h-48 bg-white/10 animate-pulse rounded-md flex flex-col gap-2 justify-around p-4 '>
                    <div className='w-full p-3 bg-white/10 animate-pulse' />
                    <div className='w-full p-3 bg-white/10 animate-pulse' />
                    <div className='w-full p-3 bg-white/10 animate-pulse' />
                    <div className='w-full p-3 bg-white/10 animate-pulse' />

                </div>

            </div>
            {/* Third */}
            <div className=' rounded-md flex flex-col gap-4 p-8  bg-white/10 w-full animate-pulse' >
                <div className='w-full flex gap-2'>

                    <div className='p-12 bg-white/20 w-1/4' />
                    <div className='flex flex-col w-full gap-2'>

                        <div className='p-3 w-full bg-white/10' />
                        <div className='p-3 w-full bg-white/10' />
                        <div className='p-3 w-full bg-white/10' />
                    </div>

                </div>

                <div className='bg-white/10 w-full h-10 flex items-center gap-4  px-4 rounded-md'>
                    <div className='p-3 w-10 bg-white/10 rounded-md' />
                    <div className='p-3 w-10 bg-white/10 rounded-md' />
                    <div className='p-3 w-10 bg-white/10 rounded-md' />
                    <div className='p-3 w-10 bg-white/10 rounded-md' />
                </div>
            </div>

            <div>

            </div>


        </div>
    )
}

export default Loading