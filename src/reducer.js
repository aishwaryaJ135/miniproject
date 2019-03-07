import { createStore } from "redux";
import list from "./components/list/reducer";

const store = createStore(
  list,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
