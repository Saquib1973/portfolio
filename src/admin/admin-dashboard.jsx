import React, { createContext, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import AdminNav from './admin-navigation';
import { AnimatedHamburgerButton } from './components/admin-button';
export const NavContext = createContext({});

const AdminDashboard = () => {
    const [navMobile, setNavMobile] = useState(false);
    const location = useLocation();
    const path = location.pathname;

    const navigate = useNavigate();
    return (
        <NavContext.Provider value={{ navMobile, setNavMobile }}>

            <div className='flex border border-white/20 overflow-y-auto h-[87vh] p-4 rounded-md bg-white/10 backdrop-blur-md mt-14 relative'>
                <button className={`md:hidden absolute ${navMobile ? "left-[100px] top-0" : "left-0 top-0 "} select-none duration-[350ms] transition-all w-6 h-6 z-50`} onClick={() => setNavMobile(pre => !pre)}>
                    <AnimatedHamburgerButton value={{ navMobile, setNavMobile }} />

                    {/* {!navMobile ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">

                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="bg-green rounded-full text-gray-50 w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                    } */}
                </button>

                <AdminNav />
                <div className='max-md:ml-8 w-full'>
                    {
                        path !== "/admin" &&
                        <button onClick={() => navigate(-1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                            </svg>
                        </button>
                    }

                    <Outlet />
                </div>
            </div>
        </NavContext.Provider>
    );
}

export default AdminDashboard;
