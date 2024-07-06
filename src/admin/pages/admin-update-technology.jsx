import React, { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getUniqueTech, updateTech } from '../../api/api.js';

const UpdateTechnology = ({ techId, setIsModalOpen }) => {
    const queryClient = useQueryClient();

    const { data, error, isLoading } = useQuery({
        queryKey: ['technology', techId],
        queryFn: () => getUniqueTech(techId),
        enabled: !!techId,
    });

    const [name, setName] = useState('');
    const [type, setType] = useState('');

    useEffect(() => {
        if (data) {
            setName(data.name);
            setType(data.type);
        }
    }, [data]);

    const mutation = useMutation({
        mutationFn: (updatedData) => updateTech(techId, updatedData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['technologies'] });
            setIsModalOpen(false);
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate({ name, type });
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading technology: {error.message}</div>;

    return (
        <div className="max-w-md mx-auto p-6 bg-black rounded-xl shadow-md">
            <h1 className="text-xl font-bold mb-4">Update Technology</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <label className="flex flex-col gap-2">
                    <span className="font-semibold">Name:</span>
                    <input
                        type="text"
                        value={name}
                        className="input border rounded p-2"
                        placeholder="Enter technology name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label className="flex flex-col gap-2">
                    <span className="font-semibold">Type:</span>
                    <select
                        value={type}
                        className="input border rounded p-2"
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option value="">Select type</option>
                        <option value="FRONTEND">FRONTEND</option>
                        <option value="BACKEND">BACKEND</option>
                        <option value="DESIGN">DESIGN</option>
                        <option value="CORE">CORE</option>
                        <option value="DEVOPS">DEVOPS</option>
                    </select>
                </label>
                <button
                    type="submit"
                    className="bg-green/80 text-gray-50 rounded p-2 hover:bg-green transition"
                >
                    Update
                </button>
            </form>
        </div>
    );
};

export default UpdateTechnology;
