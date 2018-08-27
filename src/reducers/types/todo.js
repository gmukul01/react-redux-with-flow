// @flow
export type NameType = string;
export type IdType = string;

export type TodoItemType = {
  +name: NameType,
  +id: IdType
};

export type TodoStateType = {
  +todoList: Array<TodoItemType>
};
