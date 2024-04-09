// Terminal.jsx
import React, { forwardRef, useCallback, useEffect, useRef, useState } from 'react';
import Heading from './Heading';
const Terminal = forwardRef(({ history = [], promptLabel = 'C:/user>', commands = {}, pushToHistory }, ref) => {
    const inputRef = useRef();
    const terminalRef = useRef();
    const [input, setInputValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = useCallback((e) => {
        setInputValue(e.target.value);
    }, []);
    const handleInputKeyDown = useCallback(
        async (e) => {
            if (e.key === 'Enter') {
                const command = input.trim().toLowerCase();
                const [commandName, ...args] = command.split(' ');
                const commandToExecute = commands[commandName];
                if (commandToExecute) {
                    await commandToExecute(args.join(' '));
                    setErrorMessage('');
                } else {
                    setErrorMessage(
                        <p className='my-1'>
                            <span className=''>{`'${commandName}' `}</span>is not a valid command
                        </p>
                    );

                    if (commands.default) commands.default();
                }
                setInputValue('');
            }
        },
        [commands, input, promptLabel, pushToHistory]
    );



    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    inputRef.current?.focus();
                } else {
                    inputRef.current?.blur();
                }
            },
            { threshold: 0.5 }
        );
        observer.observe(terminalRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className='flex flex-col w-full justify-start items-start py-6'>
            <Heading name={'terminal'} />

            <div
                ref={terminalRef}
                className="relative bg-green/10 gap-2 overflow-x-hidden backdrop-blur-sm group w-full text-white h-96 overflow-y-auto px-6 sm:px-10 p-4 sm:p-8 rounded-md shadow-inner shadow-white/10 my-4"
            >
                <div className='flex flex-col gap-2'>
                    {history.map((line, index) => (
                        <div className="" key={`terminal-line-${index}`}>
                            {line}
                        </div>
                    ))}
                </div>
                <div className={`bottom-1 right-1 text-gray-50 absolute ${errorMessage ? "translate-x-0  bg-red-600" : "translate-x-[50vw] bg-lime-500"} transition-all duration-500 p-1 px-2 rounded-md`}>
                    {errorMessage ? errorMessage : "good"}
                </div>
                <div className="flex items-center ">
                    <div className="text-gray-600">{promptLabel}</div>
                    <div className="flex-1 ml-1">
                        <input
                            type="text"
                            value={input}
                            onKeyDown={handleInputKeyDown}
                            onChange={handleInputChange}
                            ref={inputRef}
                            className="bg-transparent text-white w-full outline-none my-1"
                        />
                    </div>
                </div>
            </div>
        </div>

    );
});

export default Terminal;
