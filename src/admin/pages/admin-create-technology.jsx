import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createTech } from '../../api/api.js';

const CreateTechnology = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: createTech,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['technologies'] });
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate({ name, type });
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-black rounded-xl shadow-md">
            <h1 className="text-xl font-bold mb-4">Create New Technology</h1>
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
                    Create
                </button>
            </form>
        </div>
    );
};

export default CreateTechnology;
