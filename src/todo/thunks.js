import {
  loadTodosInProgress,
  loadTodosSuccess,
  loadTodosFailure,
  add,
  remove,
  complete,
} from "./TodoSlice";

import { InProgress, Success, Failure } from "./IsLoadingSlice";

import axios from "axios";

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(InProgress());
    dispatch(loadTodosInProgress());
    const todos = await axios.get("http://localhost:8080/todos-delay");
    dispatch(loadTodosSuccess(todos));
    dispatch(Success());
  } catch (e) {
    dispatch(loadTodosFailure());
    dispatch(Failure(e));
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
    dispatch(Failure(e));
  }
};

export const removeTodos = (id) => async (dispatch) => {
  try {
    const newTodo = await axios.delete(`http://localhost:8080/todos/${id}`);
    dispatch(remove(newTodo));
  } catch (e) {
    dispatch(loadTodosFailure());
    dispatch(Failure(e));
  }
};

export const markCompleteTodo = (id) => async (dispatch) => {
  try {
    const newTodo = await axios.post(
      `http://localhost:8080/todos/${id}/completed`
    );
    dispatch(complete(newTodo));
  } catch (e) {
    dispatch(loadTodosFailure());
    dispatch(Failure(e));
  }
};
