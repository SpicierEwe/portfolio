import { createStore } from "redux";

import themeReducer from "./theme_reducer";

let themeStore = createStore(reducer);

export default themeStore;
