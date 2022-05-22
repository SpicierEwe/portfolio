import { createContext, useState } from "react";
import react from "react";

const themeContext = createContext({
  isDark: false,
  setTheme: () => {},
  theemColors: {},
});

const defaultValues = {
  background_color: "#d8d4d1",
  //   background_color: "#1b1b1b",
};
export function ThemeContextProvider(props) {
  const [currentThemeValue, setThemeValue] = useState(false);

  const [themeColors, setThemeColors] = useState(defaultValues);

  function setThemeHandler(flag) {
    switch (flag) {
      case "dark":
        return (
          setThemeValue(true), setThemeColors({ background_color: "#1b1b1b" })
        );
    }
  }

  const context = {
    isDark: currentThemeValue,
    setTheme: setThemeHandler,
    theemColors: themeColors,
  };
  return (
    <themeContext.Provider value={context}>
      {props.children}
    </themeContext.Provider>
  );
}

export default themeContext;
