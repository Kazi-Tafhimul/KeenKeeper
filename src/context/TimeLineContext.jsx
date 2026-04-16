import React, { Children, createContext, useContext, useState } from 'react';

const TimeLineContext = createContext();
export const TimeLineProvider = ({children}) => {
    const [timeLine, setTimeLine] = useState([]);
    const addTimeLine = (entry) => {
        setTimeLine([...timeLine,entry]);
    };
    return (
        <TimeLineContext.Provider value={{timeLine,addTimeLine}}>
            {children}
        </TimeLineContext.Provider>
    )
}

export const useTimeline = () =>useContext(TimeLineContext);