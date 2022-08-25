import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  data: [],
};

const TodoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      const newTodo = action.payload.data;
      return { ...state, data: state.data.concat(newTodo) };
    },
    remove: (state, action) => {
      return {
        ...state,
        data: state.data.filter((todo) => todo.id !== action.payload.data.id),
      };
    },
    complete: (state, action) => {
      const index = state.data.findIndex(
        (todo) => todo.id === action.payload.data.id
      );
      state.data[index].isCompleted = true;
    },
    loadTodosSuccess: (state, action) => {
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
      };
    },
    loadTodosInProgress: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    loadTodosFailure: (state) => {
      return {
        ...state,
        isLoading: false,
      };
    },
  },
});

//Actions
export const {
  add,
  remove,
  complete,
  loadTodosInProgress,
  loadTodosSuccess,
  loadTodosFailure,
} = TodoSlice.actions;

export default TodoSlice.reducer;
