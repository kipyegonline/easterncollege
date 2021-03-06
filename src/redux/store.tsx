import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
//import thunk from "redux-thunk";
import reducer from "./reducer";

// redux devtools
const devtools = (): any => {
  const window: any = globalThis;
  if (window) {
    const tools = window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f: any) => f;
    return tools;
  } else {
    return null;
  }
};
// create store
const store = createStore(reducer, devtools());

// redux wrapper for gatsby js
type element = { element: React.ReactNode };

export default function wrapperElement({ element }: element): React.ReactNode {
  return <Provider store={store}>{element}</Provider>;
}
