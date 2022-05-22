import { createContext } from "react";
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
  const [theme, setTheme] = useState(defaultValues);

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
