import { createContext, useState } from "react";
import react from "react";

const themeContext = createContext({
  isDark: false,
  setTheme: () => {},
});

export function ThemeContextProvider(props) {
  const [theme, setTheme] = useState(false);

  function setThemeHandler(flag) {
    switch (flag) {
      case "dark":
        return setTheme({
          isDark: true,
          background_color: "#1b1b1b",
        });
    }
  }

  const context = {
    theme: theme,
    setTheme: setThemeHandler,
  };
  return (
    <themeContext.Provider value={context}>
      {props.children}
    </themeContext.Provider>
  );
}

export default themeContext;
