import { useContext } from "react";
import { createContext } from "react";
import { useImg } from "../hooks/useImg";
import { holidayContext } from './holidayContext';

export const imgContext = createContext({});

export const ImgContextProvider = ({ children }) => {
    const {holiday} = useContext(holidayContext);
    const [img] = useImg(holiday);
    return(
        <imgContext.Provider value={{img}}>
            {children}
        </imgContext.Provider>
    )
}