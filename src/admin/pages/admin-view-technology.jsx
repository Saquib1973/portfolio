import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { deleteTech, getTech, updateTechVisibility } from '../../api/api.js';
import UpdateTechnology from './admin-update-technology.jsx';
import Modal from '../components/admin-modal.jsx';
import Loader from '../../components/Loader.jsx';

const ViewTechnology = () => {
    const queryClient = useQueryClient();
    const { data, error, isLoading } = useQuery({
        queryKey: ['technologies'],
        queryFn: getTech,
    });

    const { mutate: deleteMutation, isPending: deleteMutationPending } = useMutation({
        mutationFn: deleteTech,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['technologies'] });
        },
    });

    const { mutate: visibilityMutate, isPending: visibilityMutationPending } = useMutation({
        mutationFn: ({ id, visibility }) => updateTechVisibility(id, visibility),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['technologies'] });
        },
    });
    console.log(visibilityMutationPending)

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTechId, setSelectedTechId] = useState(null);

    const handleDelete = (id) => {
        deleteMutation(id);
    };

    const handleEdit = (id) => {
        setSelectedTechId(id);
        setIsModalOpen(true);
    };

    const handleVisibilityToggle = (id, visibility) => {
        visibilityMutate({ id, visibility: !visibility });
    };
    const [loading, setLoading] = useState('')
    if (isLoading) return <Loader />;
    if (error) return <div>Error loading technologies: {error.message}</div>;

    return (
        <div>
            <h1 className='adminHeading'>View Technology</h1>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left  ">
                    <thead className="text-xs  uppercase bg-green">
                        <tr>
                            <th scope="col" className="px-6 py-3 rounded-s-lg">ID</th>
                            <th scope="col" className="px-6 py-3">Name</th>
                            <th scope="col" className="px-6 py-3">Type</th>
                            <th scope="col" className="px-6 py-3">Visibility</th>
                            <th scope="col" className="px-6 py-3 rounded-e-lg">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.tech?.map((tech) => {

                            console.log("techid", tech.id, "loading", loading)
                            return (
                                <tr className="bg-white " key={tech.id}>
                                    <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap ">
                                        {tech.id}
                                    </th>
                                    <td className="px-6 py-4 text-black">{tech.name}</td>
                                    <td className="px-6 py-4 text-black">{tech.type}</td>
                                    <td className="px-6 py-4">
                                        {
                                            loading == tech.id && visibilityMutationPending ? <div className='w-full flex justify-center'>
                                                <div className='bg-white-300 h-3 w-3 rounded-full border-2 border-green border-r-0 border-t-0 animate-spin' />
                                            </div> : <input
                                                type="checkbox"
                                                className='mx-auto cursor-pointer w-full'
                                                onClick={() => setLoading(tech.id)}
                                                checked={tech.visibility}
                                                onChange={() => handleVisibilityToggle(tech.id, tech.visibility)}
                                            />
                                        }
                                    </td>
                                    <td className="px-6 py-4 flex gap-2">
                                        <button
                                            onClick={() => handleEdit(tech.id)}
                                            className='block text-sm px-2 py-1 text-white rounded-md p-2 bg-green'
                                        >
                                            Edit
                                        </button>
                                        {
                                            loading == tech.id && deleteMutationPending ? <div className='w-full items-center flex justify-center'>
                                                <div className='bg-white-300 h-3 w-3 rounded-full border-2 border-green border-r-0 border-t-0 animate-spin' />
                                            </div> :
                                                <button
                                                    onClick={() => {
                                                        setLoading(tech.id)
                                                        handleDelete(tech.id)
                                                    }}
                                                    className='block text-sm px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600'
                                                >Delete
                                                </button>

                                        }
                                    </td>
                                </tr>
                            )
                        }
                        )}
                    </tbody>
                </table>
            </div>

            <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
                <UpdateTechnology techId={selectedTechId} setIsModalOpen={setIsModalOpen} />
            </Modal>
        </div>
    );
};

export default ViewTechnology;