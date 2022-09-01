import { useContext } from "react";
import { createContext } from "react";
import { useText } from "../hooks/useText";
import { holidayContext } from "../context/holidayContext";

export const textContext = createContext({});

export const TextContextProvider = ({ children }) => {
    const {holiday} = useContext(holidayContext);
    const [text] = useText(holiday);
    return(
        <textContext.Provider value={{text}}>
            {children}
        </textContext.Provider>
    )
}