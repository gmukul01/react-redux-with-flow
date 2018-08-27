import React, { Fragment } from "react";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.onAddClickHandler = this.onAddClickHandler.bind(this);
    this.onDeleteClickHandler = this.onAddClickHandler.bind(this);
  }

  onAddClickHandler() {
    this.props.onAddClickHandler(this.inputField.value);
  }

  onDeleteClickHandler(id) {
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
