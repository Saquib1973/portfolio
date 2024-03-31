import React from 'react'
import image from "../../imgs/saquib2.png"
const AdminHome = () => {
    return (
        <div className='w-full flex flex-col overflow-y-auto'>
            <p className='adminHeading'>home page</p>
            <div>

                <img src={image} alt="profile" className='h-40 w-40 rounded-md' />
            </div>
        </div>
    )
}

export default AdminHome