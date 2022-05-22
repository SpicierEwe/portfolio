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
    switch (flag) {
      case "dark":
        setTheme({
          isDark: true,
          background_color: "#1b1b1b",
        });
    }
  }

  const context = {
    theme: theme,
    setTheme: setThemeHandler,
  };
  return <themeContext.Provider value={context}></themeContext.Provider>;
}

export default themeContext;
