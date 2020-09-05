import React from "react"
import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import reducer from "./reducer"

// redux devtools
const devtools = (): any => {
  let window: any = globalThis
  if (window) {
    let tools = window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f: any) => f
    return tools
  } else {
    return null
  }
}
// create store
const store = createStore(reducer, compose(applyMiddleware(thunk), devtools()))

// redux wrapper for gatsby js
type element = { element: React.ReactNode }

export default function ({ element }: element) {
  return <Provider store={store}>{element}</Provider>
}
