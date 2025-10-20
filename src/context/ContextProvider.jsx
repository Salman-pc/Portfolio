import React, { createContext } from 'react';
import { ThemeProvider } from './ThemeContext';
import { ExpirenceContext } from './ExpirenceContext';

const Context = createContext()

const ContextProvider = ({ children }) => {
    
    return (
        <Context.Provider value={{}} >
            <ThemeProvider>
                <ExpirenceContext>
                    {children}
                </ExpirenceContext>
            </ThemeProvider>
        </Context.Provider>
    );
}

export default ContextProvider;
