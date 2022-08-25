import React from "react";
import UserInput from "../costomhooks/UserInput";
import { useSelector, useDispatch } from "react-redux";
import "./NewTodoForm.css";
import { addTodos } from "./thunks";

const NewTodoForm = () => {
  const todos = useSelector((state) => state.todos.value);
  const dispatch = useDispatch();
  const [inputProps, resetProps] = UserInput();

  return (
    <div className="new-todo-form">
      <input {...inputProps} className="new-todo-input" type="text" />
      <button
        className="new-todo-button"
        onClick={() => {
          const isDuplicate = todos.some(
            (todo) => todo.text === inputProps.value
          );
          if (!isDuplicate && inputProps.value !== "") {
            dispatch(addTodos(inputProps.value));
            resetProps();
          } else {
            alert("This is a duplicate entry or empty task");
          }
        }}
      >
        Add To List
      </button>
    </div>
  );
};

export default NewTodoForm;
