// @flow

import React, { Fragment } from "react";
import type { NameType, IdType, TodoItemType } from "../reducers/types/todo";

type Props = {
  todoList: Array<TodoItemType>,
  onAddClickHandler: NameType => void,
  onDeleteClickHandler: IdType => void
};

export default class Todo extends React.Component<Props> {
  inputField: ?HTMLInputElement;
  onAddClickHandler: NameType => boolean;
  onDeleteClickHandler: IdType => () => void;

  constructor(props: Props) {
    super(props);
    this.onAddClickHandler = this.onAddClickHandler.bind(this);
    this.onDeleteClickHandler = this.onDeleteClickHandler.bind(this);
  }

  onAddClickHandler() {
    this.inputField && this.props.onAddClickHandler(this.inputField.value);
  }

  onDeleteClickHandler(id: IdType) {
    return () => this.props.onDeleteClickHandler(id);
  }

  render() {
    console.log("onAddClickHandler => ", this.onAddClickHandler);
    const { todoList } = this.props;
    return (
      <Fragment>
        <h2>Todo List </h2>
        <input
          type="text"
          ref={el => {
            this.inputField = el;
          }}
        />
        <button onClick={this.onAddClickHandler}>Add Todo</button>
        <ul>
          {todoList.map(item => (
            <li key={item.id}>
              {item.name}
              <button onClick={this.onDeleteClickHandler(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}
