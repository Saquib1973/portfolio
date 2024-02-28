import React, { useEffect } from 'react'
import Navigation from '../components/Navigation'

const GuestBook = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Navigation heading={'welcome ! Sign my guest-book.'} description={'hello there how are you doing today please leave a comment'} />
            <div className='px-4'></div>
        </div>
    )
}

export default GuestBook