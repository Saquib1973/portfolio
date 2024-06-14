import React from 'react';
import { Link } from 'react-router-dom';

const AdminMisc = () => {

    return (
        <div>
            <p className='adminHeading'>miscellaneous</p>
            <div>
                <div className='mt-4 pl-6 flex items-center justify-start gap-4'>
                    <h1 className='adminSubHeading mr-4'>Technology</h1>
                    <Link to={'/admin/tech/create'} className='customButton'>Create</Link>
                    <Link to={'/admin/tech/view'} className='customButton'>View</Link>
                </div>
            </div>
        </div>
    )
}

export default AdminMisc
