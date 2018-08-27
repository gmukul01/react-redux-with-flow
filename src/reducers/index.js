import { createStore, combineReducers } from "redux";
import todo from "./todo";

const store = createStore(combineReducers({ todo }));
export default store;
