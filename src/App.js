import React, { Component } from "react";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, compose, createStore } from "redux";

import { List } from "./components";
import { Form } from "./components";
import { Report } from "./components";

import "./App.css";
import "./Display.css";

import allReducer from "./reducer";
import { dataWatcher } from "./components/list/sagas";

const reduxDevTools =
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  allReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    reduxDevTools
  )
);

sagaMiddleware.run(dataWatcher);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="list">
            <List />
          </div>
          <div className="form">
            <Form />
          </div>
          <div className="report">
            <Report />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
