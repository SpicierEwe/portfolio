import { createStore } from "redux";

import themeReducer from "./theme_reducer";

let themeStore = createStore(themeReducer);

export default themeStore;
