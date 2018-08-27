// @flow
import { connect } from "react-redux";

import { addTodo, deleteTodo } from "../actions/todo";
import Todo from "../components/Todo";

const mapStateToProps = state => ({
  todoList: state.todo.todoList
});

const mapDispatchToProps = dispatch => ({
  onAddClickHandler: name => {
    dispatch(addTodo(name));
  },
  onDeleteClickHandler: id => dispatch(deleteTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
