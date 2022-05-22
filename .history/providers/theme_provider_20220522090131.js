import { createContext, useState } from "react";
import react from "react";

const themeContext = createContext({
  isDark: false,
  setTheme: () => {},
});

const defaultValues = {
  isDark: false,
  //   background_color: "#d8d4d1",
};
export function ThemeContextProvider(props) {
  const [currentThemeValue, setThemeValue] = useState(false);

  function setThemeHandler(flag) {
    switch (flag) {
      case "dark":
        return setThemeValue({
          true
        });
    }
  }

  const context = {
    theme: currentThemeValue,
    setTheme: setThemeHandler,
  };
  return (
    <themeContext.Provider value={context}>
      {props.children}
    </themeContext.Provider>
  );
}

export default themeContext;
