//Better approach to use Context in production

import {createContext, useContext} from "react"

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => { },
}) //can take default value in createContext


export const ThemeProvider = ThemeContext.Provider

//custom hook
export default function useTheme(){
    return useContext(ThemeContext)
}