// @flow
import uniqid from "uniqid";

import createReducer from "./helper";
import type { TodoStateType } from "./types/todo";
import type { AddTodoActionType, DeleteTodoActionType } from "../actions/types/todo";
import { ADD_TODO, DELETE_TODO } from "../constants/actionTypes";

const initialState = {
  todoList: []
};

const addTodo = (state: TodoStateType, { name }: AddTodoActionType): TodoStateType => ({
  ...state,
  todoList: [
    ...state.todoList,
    {
      name,
      id: uniqid()
    }
  ]
});

const deleteTodo = (state: TodoStateType, { id }: DeleteTodoActionType): TodoStateType => ({
  ...state,
  todoList: state.todoList.filter(item => item.id !== id)
});

const todo = createReducer(initialState, {
  [ADD_TODO]: addTodo,
  [DELETE_TODO]: deleteTodo
});

export default todo;
