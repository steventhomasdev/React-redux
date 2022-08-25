import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todos",
  initialState: {
    value: [],
  },
  reducers: {
    add: (state, action) => {
      const newTodo = action.payload.data;
      state.value.push(newTodo);
    },
    remove: (state, action) => {
      state.value = state.value.filter(
        (todo) => todo.id !== action.payload.data.id
      );
    },
    complete: (state, action) => {
      const index = state.value.findIndex(
        (todo) => todo.id === action.payload.data.id
      );
      state.value[index].isCompleted = true;
    },
    loadTodosSuccess: (state, action) => {
      state.value = action.payload.data;
    },
    loadTodosInProgress: (state) => state,
    loadTodosFailure: (state) => state,
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
