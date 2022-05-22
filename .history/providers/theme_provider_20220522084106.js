import { createContext } from "react";

const themeContext = createContext({
  isDark: false,
  setTheme: () => {},
  background_color: "",
});

const defaultValues = {
  isDark: false,
  background_color: "#d8d4d1",
};
export function ThemeContextProvider(props) {
  const [theme, setTheme] = React.useState(defaultValues);

  function setThemeHandler(flag) {
    return setTheme({
      theme: flag,
    });
  }

  const context = {
    theme: "",
    setTheme: () => {},
    background_color: "",
  };
  return <themeContext.Provider value={context}></themeContext.Provider>;
}

export default themeContext;
