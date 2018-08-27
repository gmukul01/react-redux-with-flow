import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";

import store from "./reducers/index";
import "./index.css";
import Todo from "./containers/Todo";

ReactDOM.render(
  <Provider store={store}>
    <Todo />
  </Provider>,
  document.getElementById("root")
);
