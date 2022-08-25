import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "../todo/TodoSlice";
import IsLoadingSlice from "../todo/IsLoadingSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "todos",
  storage,
};

const reducers = combineReducers({
  todos: TodoSlice,
  isLoading: IsLoadingSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

// export default configureStore({
//   reducer: {
//     todos: TodoCounter,
//   },
// });
