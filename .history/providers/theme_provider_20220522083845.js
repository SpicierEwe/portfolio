import { createContext } from "react";

const themeContext = createContext({
  theme: "",
  setTheme: () => {},
  background_color: "",
});

const defaultValues = {
  theme: "light",
  background_color: "$d8d4d1",
};
export function ThemeContextProvider(props) {
  const [theme, setTheme] = React.useState(defaultValues);

  function setThemeHandler(flag) {
    setTheme({
      ...theme,
      theme: newTheme,
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
