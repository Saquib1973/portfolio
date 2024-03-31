import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminNav from './admin-navigation';
export const NavContext = createContext({});

const AdminDashboard = () => {
    const [navMobile, setNavMobile] = useState(false);
    return (
        <NavContext.Provider value={{ navMobile, setNavMobile }}>

            <div className='flex border border-white/20 overflow-y-auto h-[87vh] p-4 rounded-md bg-white/10 backdrop-blur-md mt-14 relative'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:hidden absolute right-3 top-3 w-6 h-6" onClick={() => setNavMobile(!navMobile)}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>

                <AdminNav />
                <Outlet />
            </div>
        </NavContext.Provider>
    );
}

export default AdminDashboard;
