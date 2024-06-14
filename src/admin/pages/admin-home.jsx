import React from 'react'
import { Link } from 'react-router-dom'
const AdminHome = () => {
    const BentoDesign = [
        { id: '1', name: 'Project', link: '/admin/project' },
        { id: '2', name: 'Education', link: '/admin/education' },
        { id: '3', name: 'Work', link: '/admin/work' },
        { id: '4', name: 'Tech', link: '/admin/misc' },
        { id: '5', name: 'Auth', link: '/admin/misc' },
        { id: '6', name: 'Misc', link: '/admin/misc' },
        { id: '7', name: 'Home', link: '/admin' },
    ]
    return (
        <div className='w-full flex flex-col overflow-y-auto'>
            <p className='adminHeading'>home page</p>
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 my-4 sm:auto-rows-[120px] md:auto-rows-[200px] w-full'>
                {
                    BentoDesign.map((bento, i) => {
                        return (
                            <Link to={bento.link} key={bento.id} className={`active:scale-90 transition-all duration-500 ${i == 2 ? "sm:row-span-2" : ""} ${i == 0 || i == 4 || i == 5 || i == 6 ? "sm:col-span-2" : ""} p-2 flex items-center justify-center flex-col border-2 border-white rounded-md `}>
                                {bento.name}
                            </Link>
                        )
                    })
                }



            </div>
        </div>
    )
}

export default AdminHome