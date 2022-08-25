import React from "react";
import UserInput from "../costomhooks/UserInput";
import { useSelector, useDispatch } from "react-redux";
import { addTodos } from "./thunks";
import { getTodos } from "./selectors";
import styled from "styled-components";

const FormContainer = styled.div`
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 4px 8px grey;
`;

const NewTodoInput = styled.input`
font-size: 16px;
padding: 8px;
border: none;
border-bottom: 2px solid #ddd;
border-radius: 8px;
width: 70%;
outline: none;
`;

const NewTodoButton = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  margin-left: 8px;
  width: 20%;
  background-color: #22ee22;
`;

const NewTodoForm = () => {
  const todos = useSelector((state) => getTodos(state));
  const dispatch = useDispatch();
  const [inputProps, resetProps] = UserInput();

  return (
    <FormContainer>
      <NewTodoInput {...inputProps} type="text" placeholder="Enter the task you wanted to complete" />
      <NewTodoButton
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
      </NewTodoButton>
    </FormContainer>
  );
};

export default NewTodoForm;
