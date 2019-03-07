import React, { Component } from "react";
import { Provider } from "react-redux";

import { List } from "./components";
import { Form } from "./components";
import { Report } from "./components";

import "./App.css";
import "./Display.css";

import store from "./reducer";

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
