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
  const [theme, setTheme] = React.useState(defaultValues.theme);

  const context = {
    theme: "",
    setTheme: () => {},
    background_color: "",
  };
  return <themeContext.Provider value={context}></themeContext.Provider>;
}

export default themeContext;
