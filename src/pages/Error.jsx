import React from 'react'
import Navigation from '../components/Navigation'
import error from "../imgs/404.png"
import Socials from '../components/Socials'
const Error = () => {
    return (
        <div>
            <Navigation heading={'⚠️ page not available ⚠️'} />
            <div className='w-full flex items-center justify-center'>

                <img src={error} alt="error image" className='m-8 h-[500px] w-[500px] rounded-xl blur-[2px]' />
            </div>
            <Socials />
        </div>
    )
}

export default Error