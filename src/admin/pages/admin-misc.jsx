import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../components/admin-modal.jsx';
import CreateTechnology from "./admin-create-technology.jsx"
const AdminMisc = () => {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false); // State for Create Technology Modal

    const handleCreateModalOpen = () => {
        setIsCreateModalOpen(true);
    };

    const handleCreateModalClose = () => {
        setIsCreateModalOpen(false);
    };

    return (
        <div>
            <p className='adminHeading'>Miscellaneous</p>
            <div>
                <div className='mt-4 pl-6 flex items-center justify-start gap-4'>
                    <h1 className='adminSubHeading mr-4'>Technology</h1>
                    <button
                        onClick={handleCreateModalOpen}
                        className='customButton'
                    >
                        Create
                    </button>
                    <Link to={'/admin/tech/view'} className='customButton'>
                        View
                    </Link>
                </div>
            </div>

            {/* Create Technology Modal */}
            <Modal isOpen={isCreateModalOpen} setIsOpen={setIsCreateModalOpen}>
                <CreateTechnology setIsModalOpen={setIsCreateModalOpen} />
            </Modal>
        </div>
    );
}

export default AdminMisc;
