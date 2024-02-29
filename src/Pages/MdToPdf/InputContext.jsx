import React, { createContext, useState } from 'react';

export const Incon = createContext(null);

const InputContext = ({children}) => {
    const [input, setInput] = useState();

    const contextInfo={
        setInput,
        input
    }
    return (
        <Incon.Provider value={contextInfo}>{children}</Incon.Provider>
    );
};

export default InputContext;