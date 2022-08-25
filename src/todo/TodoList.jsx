import React, { useEffect } from "react";
import styled from "styled-components";
import NewTodoForm from "./NewTodoForm";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";
import { loadTodos } from "./thunks";
import {
  getTodosIsLoading,
  getCompletedTodos,
  getIncompleteTodos,
} from "./selectors";

const ListWrapper = styled.div`
  max-width: 700px;
  margin: auto;
`;

const TodoList = () => {
  const isLoading = useSelector((state) => getTodosIsLoading(state));
  const completedTodos = useSelector((state) => getCompletedTodos(state));
  const inCompletedTodos = useSelector((state) => getIncompleteTodos(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos());
  }, []);

  const loadingMessage = <div>Loading todos...</div>;

  const content = (
    <ListWrapper>
      <NewTodoForm />
      <h3>Todos</h3>
      {inCompletedTodos.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
      <h3>Completed Todos</h3>
      <hr />
      {completedTodos.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </ListWrapper>
  );

  return isLoading ? loadingMessage : content;
};

export default TodoList;
