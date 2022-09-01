import { createContext, useState } from "react";
import { useHolidays } from "../hooks/useHolidays";

export const holidayContext = createContext({});

export const HolidayContextProvider = ({ children }) => {
    const [holiday, setHoliday] = useState('');
    const [holidays] = useHolidays();

    const changeHoliday = tittle => {
        setHoliday(tittle);
    }

    return (
        <holidayContext.Provider value={{holiday, changeHoliday, holidays}}>
            {children}
        </holidayContext.Provider>
    )
}