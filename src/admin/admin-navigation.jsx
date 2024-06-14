import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavContext } from './admin-dashboard';
import Tooltip from '../components/Tooltip';
import { ThemeContext } from '../App';
import { audioPlay } from '../components/Navigation';
import { AuthContext } from './AuthContext';

const adminLinks = [
    { name: 'home', href: '' },
    { name: 'project', href: '/project' },
    { name: 'education', href: '/education' },
    { name: 'work', href: '/work' },
    { name: 'misc', href: '/misc' },
];
const AdminNav = () => {
    let { theme, setTheme } = useContext(ThemeContext);
    const { authToken, logout } = useContext(AuthContext);

    const { navMobile, setNavMobile } = useContext(NavContext);
    const location = useLocation().pathname;
    const handleThemeChange = () => {
        audioPlay();
        let newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('saquib.vercel.app', JSON.stringify({ theme: newTheme }));

    }
    return (
        <div className='max-w-xl h-full sticky left-0 top-0 md:border-r border-white/40 md:mr-4 max-md:px-2 xl:pr-4'>
            <div className={`max-md:pt-6 max-md:pb-3 flex gap-2 px-4 flex-col p-2 rounded-md max-md:absolute  max-md:bg-black ${navMobile ? "max-md:translate-x-0 max-md:left-0" : "max-md:-translate-x-[140px]"}`}>
                {authToken && adminLinks.map((link, i) => (
                    <Link
                        to={`/admin${link.href}`}
                        onClick={() => setNavMobile(!navMobile)}
                        className={
                            (location === "/admin" && link.href === "") ||
                                (location.endsWith(link.href) && link.href !== "")
                                ? "text-green underline underline-offset-4"
                                : "text-white"
                        }
                        key={i}
                    >
                        {link.name}
                    </Link>
                ))}
                <Tooltip message={`${theme === 'dark' ? 'light' : 'dark'} mode`} >
                    <button onClick={handleThemeChange} className='line-clamp-1'>{theme}</button>

                </Tooltip>
                <Tooltip message={'Open Website'}>
                    <Link to={'https://heysaquib.vercel.app/'} target='_blank' className='flex items-center justify-center gap-1'>
                        <p className='text-white font-medium '>WEBSITE</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 flex items-center justify-center">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                        </svg>


                    </Link>
                </Tooltip>
                <Tooltip message={'Open Backend'}>
                    <Link to={'https://portfolio-backend.saquibali353.workers.dev/'} target='_blank' className='flex items-center justify-center gap-1'>
                        <p className='text-white font-medium '>BACKEND</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 flex items-center justify-center">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                        </svg>


                    </Link>
                </Tooltip>
                {
                    authToken && <button className='line-clamp-1 mr-auto tracking-wider text-gray-50 bg-red-500 duration-500 hover:bg-red-600 shadow-md hover:shadow-white/10 transition-all p-1 w-full rounded-md' onClick={() => logout()}>logout</button>
                }

            </div>
        </div>
    );
};

export default AdminNav;
