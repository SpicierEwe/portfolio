import { createContext } from "react";

themeContext = createContext({
  theme: "",
  setTheme: () => {},
  background_color: "",
});


export function ThemeContextProvider(props) {

    const context ={
        theme: "",
        setTheme: () => {},
        background_color: "",
    }
    return (
        <themeContext.Provider value={{
    )
}