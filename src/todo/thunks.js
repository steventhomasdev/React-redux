import {
  loadTodosInProgress,
  loadTodosSuccess,
  loadTodosFailure,
  add,
  remove,
  complete,
} from "./TodoSlice";

import axios from "axios";

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosInProgress());
    const todos = await axios.get("http://localhost:8080/todos-delay");
    dispatch(loadTodosSuccess(todos));
  } catch (e) {
    dispatch(loadTodosFailure());
  }
};

export const addTodos = (text) => async (dispatch) => {
  try {
    const newTodo = await axios.post("http://localhost:8080/todos", {
      text: text,
    });
    dispatch(add(newTodo));
  } catch (e) {
    dispatch(loadTodosFailure());
  }
};

export const removeTodos = (id) => async (dispatch) => {
  try {
    const newTodo = await axios.delete(`http://localhost:8080/todos/${id}`);
    dispatch(remove(newTodo));
  } catch (e) {
    dispatch(loadTodosFailure());
  }
};

export const markCompleteTodo = (id) => async (dispatch) => {
  try {
    const completedTodo = await axios.post(
      `http://localhost:8080/todos/${id}/completed`
    );
    dispatch(complete(completedTodo));
  } catch (e) {
    dispatch(loadTodosFailure());
  }
};
