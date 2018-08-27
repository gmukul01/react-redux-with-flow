import { ADD_TODO, DELETE_TODO } from "../constants/actionTypes";
import actionCreator from "./helper";

export const addTodo = actionCreator(ADD_TODO, "name");
export const deleteTodo = actionCreator(DELETE_TODO, "id");
