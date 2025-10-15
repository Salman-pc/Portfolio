import React, { createContext } from 'react';
import { ThemeProvider } from './ThemeContext';

const Context = createContext()

const ContextProvider = ({ children }) => {
    return (
        <Context.Provider >
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </Context.Provider>
    );
}

export default ContextProvider;
