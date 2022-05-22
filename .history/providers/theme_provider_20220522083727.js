import { createContext } from "react";

const themeContext = createContext({
  theme: "",
  setTheme: () => {},
  background_color: "",
});

const defaultValues = {
  theme: "",
  setTheme: () => {},
  background_color: "",
};
export function ThemeContextProvider(props) {
  const [theme, setTheme] = React.useState("light");

  const context = {
    theme: "",
    setTheme: () => {},
    background_color: "",
  };
  return <themeContext.Provider value={context}></themeContext.Provider>;
}

export default themeContext;
