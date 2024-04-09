import { useEffect } from 'react'
import Navigation from '../components/Navigation'
import Giscus from '../components/Giscus';
import Comments from '../components/Giscus';
import Heading from '../components/Heading';

const GuestBook = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='py-4 pl-1'>
            <Navigation heading={'guestbook'} description={'Ask questions you’re wondering about. Share ideas and suggestions for improvement. Engage with other community members. Welcome others and are open-minded. Remember that this is a community we build together 💪.'} />
            {/* <p className='max-md:text-xl text-3xl my-5 font-Merienda'>Write anything about me / this project</p> */}
            <Comments />
        </div>
    )
}

export default GuestBook




