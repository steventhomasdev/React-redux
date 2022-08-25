import React from "react";
import { useDispatch } from "react-redux";
import "./TodoItem.css";
import { markCompleteTodo, removeTodos } from "./thunks";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="todo-item-container"
      style={todo.isCompleted ? { background: "grey" } : undefined}
    >
      <h3>{todo.text}</h3>
      <div className="buttons-container">
        {!todo.isCompleted ? (
          <button
            onClick={() => dispatch(markCompleteTodo(todo.id))}
            className="completed-button"
          >
            Mark Completed
          </button>
        ) : undefined}
        <button
          onClick={() => dispatch(removeTodos(todo.id))}
          className="remove-button"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
