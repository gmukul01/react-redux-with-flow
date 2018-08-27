// @flow
import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";

import store from "./reducers/index";
import "./index.css";
import Todo from "./containers/Todo";

const root: ?Element = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <Todo />
  </Provider>,
  root
);
