import React, { useEffect } from 'react'
import Navigation from '../components/Navigation'
import error from "../imgs/404.png"
import Socials from '../components/Socials'
const Error = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navigation heading={'⚠️ page not available ⚠️'} />
            <div className='w-full flex items-center justify-center px-4'>


                <img src={error} alt="error image" className='m-8 h-[500px] w-[500px] rounded-xl blur-[2px]' />
            </div>
            <Socials />
        </>
    )
}

export default Error