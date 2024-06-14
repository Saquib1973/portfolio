import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { deleteTech, getTech } from '../../api/api.js';

const ViewTechnology = () => {
    const queryClient = useQueryClient();
    const { data, error, isLoading } = useQuery({
        queryKey: ['technologies'],
        queryFn: getTech,
    });

    const deleteMutation = useMutation({
        mutationFn: deleteTech,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['technologies'] });
        },
    });

    const handleDelete = (id) => {

        deleteMutation.mutate(id);
    };


    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading technologies: {error.message}</div>;

    return (
        <div>
            <h1 className='adminHeading'>View Technology</h1>
            <ul>
                {data?.tech?.map((tech) => (
                    <li key={tech.id} className='flex justify-start gap-4 items-center'>
                        <span className='min-w-[150px]'>
                            {tech.name} - {tech.type}
                        </span>
                        <div className="flex gap-2 mt-2 rounded-md shadow-lg">
                            <button
                                onClick={() => handleEdit(tech.id)}
                                className='block w-full text-sm px-2 py-1 text-gray-800 bg-white rounded-md hover:bg-gray-100'
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(tech.id)}
                                className='block w-full text-sm px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600'
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ViewTechnology;
