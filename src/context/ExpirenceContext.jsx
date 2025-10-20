import React, { createContext, useContext, useState } from 'react';

const ExpContext = createContext()

export const ExpirenceContext = ({ children }) => {

    const [expCardidx,setExpCardIdx]=useState(null)

    return (
        <ExpContext.Provider value={{setExpCardIdx,expCardidx}}>
            {children}
        </ExpContext.Provider>
    );
}

export const useExpContext = () => useContext(ExpContext);
