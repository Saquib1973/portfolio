import React, { useContext, useEffect, useMemo, useState } from 'react';
import Navigation from '../components/Navigation';
import Project from '../components/Project';
import Socials from '../components/Socials';
import TechStack from '../components/TechStack';
import Terminal from '../components/Terminal';
import useTerminal from '../components/Hook';
import { homeContent } from "../utils/NavigationContent"
import { ThemeContext } from '../App';
import { tech } from '../utils/Resource';
import { SquigglyUnderlineWrapper } from '../components/SquigglyWrapper';

const Home = () => {
    const { history, pushToHistory, setTerminalRef, resetTerminal } = useTerminal();
    const { theme, setTheme } = useContext(ThemeContext);
    const [currentDir, setCurrentDir] = useState('C:/user>');
    const [dirStack, setDirStack] = useState([]);
    useEffect(() => {
        resetTerminal();
        pushToHistory(
            <div className='flex flex-col gap-1 -ml-4'>
                <p className='text-xl text-green underline underline-offset-4 mb-1 italic tracking-wider'>Welcome!</p>
                <p>Type <span className='text-green'>"help"</span> to see all available commands. <span className='text-red-600'>(It is still in development)</span></p>
            </div>
        );
    }, []);

    const commands = useMemo(
        () => ({
            dark: () => {
                setTheme("dark");
                pushToHistory(
                    <div className=''>
                        <span className='text-gray-600'>{`${currentDir} `}</span> dark
                    </div>
                );
            },
            light: () => {
                setTheme("light");
                pushToHistory(
                    <div className=''>
                        <span className='text-gray-600'>{`${currentDir} `}</span>light
                    </div>
                );
            },
            help: () => {
                pushToHistory(
                    <>
                        <span className='text-gray-600'>{`${currentDir} `}</span>help
                        <div className=' border-green/60 w-full  rounded-md border-2 p-1 sm:p-2 m-1'>
                            <p className='mb-1 border-b border-green w-fit pb-1 '>Available Commands:</p>
                            <div className='grid grid-cols-2 sm:grid-cols-3 gap-y-2 p-1 sm:p-2'>
                                <p className='text-sm tracking-wide'>help - Show available commands</p>
                                <p className='text-sm tracking-wide'>clear - Clear the terminal</p>
                                <p className='text-sm tracking-wide'>dark - Change to dark mode</p>
                                <p className='text-sm tracking-wide'>cd - Change directoy</p>
                            </div>
                            <p className='mb-1 border-b border-green w-fit pb-1 '>Directories</p>
                            <div className='grid grid-cols-2 sm:grid-cols-3 gap-y-2 p-1 sm:p-2'>
                                <p className='text-sm tracking-wide'> ..  - go back</p>
                                <p className='text-sm tracking-wide'>tech stack - go to tech stack</p>
                            </div>
                        </div>
                    </>
                );
            },
            cd: (args) => {
                const folder = args?.trim().toLowerCase();
                if (folder === 'tech stack') {
                    console.log(tech)
                    setCurrentDir(`C:/user/${folder}>`);
                    setDirStack([...dirStack, currentDir]);
                    pushToHistory(
                        <div className='w-full'>
                            <span className='text-gray-600'>{`${currentDir} `}</span>
                            {`cd ${folder}`}
                            <br />
                            <div className='mt-1 gap-y-1 grid grid-cols-3 w-full'>

                                {
                                    tech.map(({ name }, i) => (
                                        <p>{name}</p>
                                    ))
                                }
                            </div>
                        </div>
                    );
                } else if (folder === '..') {
                    const prevDir = dirStack.pop() || 'C:/user>';
                    setCurrentDir(prevDir);
                    pushToHistory(
                        <>
                            <span className='text-gray-600'>{`${currentDir} `}</span>cd ..
                        </>

                    );
                } else if (folder === '') {
                    pushToHistory(

                        <span className='text-gray-600'>{`${currentDir} `}</span>

                    );
                } else {
                    pushToHistory(
                        <div className='my-1'>
                            <span className='text-gray-600'>{`${currentDir} `}</span><span className='text-red-600'>{'No such directory'}</span>
                        </div>
                    );
                }
            },
            clear: () => {
                setCurrentDir('C:/user>');
                setDirStack([]);
                resetTerminal();
                pushToHistory(
                    <div className='flex flex-col gap-1 -ml-4'>
                        <p>Type <span className='text-green'>"help"</span> to see all available commands. <span className='text-red-600'>(It is still in development)</span></p>
                    </div>
                );
            },
        }),
        [currentDir, dirStack, pushToHistory, resetTerminal, setTheme]
    );
    const handleUnknownCommand = () => {
        pushToHistory(
            <div className='my-1'>
                <span className='text-blackFade'>{`${currentDir} `}</span><span className='text-red-600'>{'command DNE'}</span>
            </div>
        );
    };

    return (
        <>
            <Navigation heading={homeContent.heading} description={homeContent.description} />
            <div className="px-4 text-6xl">

                <Project />
                <TechStack />
                {/* <div className='max-lg:hidden'>
                    <Terminal
                        history={history}
                        promptLabel={currentDir}
                        ref={setTerminalRef}
                        commands={{ ...commands, default: handleUnknownCommand }}
                    />
                </div> */}
                <Socials />
            </div>
        </>
    );
}

export default Home;
