import React, { useEffect } from "react";
import NewTodoForm from "./NewTodoForm";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";
import { loadTodos } from "./thunks";
import "./TodoList.css";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.value);
  const isLoading = useSelector((state) => state.isLoading.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos());
  }, []);

  const loadingMessage = <div>Loading todos...</div>;

  const content = (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </div>
  );

  return isLoading ? loadingMessage : content;
};

export default TodoList;
