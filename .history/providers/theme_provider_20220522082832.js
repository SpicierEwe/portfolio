import { createStore } from "redux";

import reducer from "./reducer";

let themeStore = createStore(reducer);

export default themeStore;
