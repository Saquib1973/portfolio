import { useCallback, useState } from 'react';

const useTerminal = () => {
    const setTerminalRef = useCallback((node) => setDomNode(node), []);
    const [history, setHistory] = useState([]);
    const pushToHistory = useCallback((item) => {
        setHistory((old) => [...old, item]);
    }, []);
    const resetTerminal = useCallback(() => {
        setHistory([]);
    }, []);

    return {
        history,
        pushToHistory,
        setTerminalRef,
        resetTerminal,
    };
};

export default useTerminal;
