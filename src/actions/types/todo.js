// @flow
import type { NameType, IdType } from "../../reducers/types/todo";
import { ADD_TODO, DELETE_TODO } from "../../constants/actionTypes";

export type AddTodoActionType = { type: ADD_TODO, name: NameType };
export type DeleteTodoActionType = { type: DELETE_TODO, id: IdType };
export type TodoActionTypes = AddTodoActionType | DeleteTodoActionType;
