import uniqid from "uniqid";

import createReducer from "./helper";
import { ADD_TODO, DELETE_TODO } from "../constants/actionTypes";

const initialState = {
  todoList: []
};

const addTodo = (state, { name }) => ({
  ...state,
  todoList: [
    ...state.todoList,
    {
      name,
      id: uniqid()
    }
  ]
});

const deleteTodo = (state, { id }) => ({
  ...state,
  todoList: state.todoList.filter(item => item.id !== id)
});

const todo = createReducer(initialState, {
  [ADD_TODO]: addTodo,
  [DELETE_TODO]: deleteTodo
});

export default todo;
