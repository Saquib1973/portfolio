import React from 'react'

const Heading = ({ name }) => {
    return (
        <span class="max-md:-ml-3 before:block before:absolute my-4 before:-inset-1 before:-inset-x-4 before:rounded-md before:-skew-y-[5deg] before:bg-green relative inline-block">
            <span class="relative text-gray-50 text-3xl tracking-wide">{name}</span>
        </span>

    )
}

export default Heading