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

            <Heading name={'GuestBook'} />
            <p className='max-md:text-xl text-3xl my-5 font-Merienda'>Write anything about me / this project</p>
            <div className='px-3 md:px-6 bg-white/10 p-1 md:p-4 backdrop-blur-sm rounded-md'>
                <Comments />
            </div>
        </div>
    )
}

export default GuestBook




