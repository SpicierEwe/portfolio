import { createContext, useState } from "react";
import react from "react";

const themeContext = createContext({
  isDark: false,
  setTheme: () => {},
  theemColors: {},
});

const lightThemeColors = {
  background_color: "#d8d4d1",
  // background_color: "#1b1b1b",
};

const darkThemeColors = {
  background_color: "#1b1b1b",
};
export function ThemeContextProvider(props) {
  const [currentThemeValue, setThemeValue] = useState(false);

  const [themeColors, setThemeColors] = useState(lightThemeColors);

  function setThemeHandler(theme) {
    switch (theme) {
      case "dark":
        return setThemeValue(true), setThemeColors({ darkThemeColors });

      case "light":
        return (
          setThemeValue(false),
          setThemeColors({ defaultValues: lightThemeColors })
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
