import React from "react";
import { useDispatch } from "react-redux";
import { markCompleteTodo, removeTodos } from "./thunks";
import styled from "styled-components";

const TodoItemContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 16px;
  position: relative;
  box-shadow: 0 4px 8px grey;
`;

const TodoItemContainerWithWarning = styled(TodoItemContainer)`
  border-bottom: ${(props) =>
    new Date(props.createdAt) < new Date(Date.now() - 86400000 * 5)
      ? "5px solid red"
      : "none"};
`;

const ButtonsContainer = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;
`;

const Button = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
`;

const CompletedButton = styled(Button)`
  display: inline-block;
  background-color: #22ee22;
`;

const RemoveButton = styled(Button)`
  display: inline-block;
  background-color: #ee2222;
  margin-left: 8px;
`;

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const Container = todo.isCompleted
    ? TodoItemContainer
    : TodoItemContainerWithWarning;
  return (
    <Container createdAt={todo.createdAt}>
      <h3>{todo.text}</h3>
      <p>
        Created at : &nbsp;
        {new Date(todo.createdAt).toLocaleString("en-US")}
      </p>
      <ButtonsContainer>
        {!todo.isCompleted ? (
          <CompletedButton onClick={() => dispatch(markCompleteTodo(todo.id))}>
            Mark Completed
          </CompletedButton>
        ) : undefined}
        <RemoveButton onClick={() => dispatch(removeTodos(todo.id))}>
          Remove
        </RemoveButton>
      </ButtonsContainer>
    </Container>
  );
};

export default TodoItem;
