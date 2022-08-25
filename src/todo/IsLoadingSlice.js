import { createSlice } from "@reduxjs/toolkit";

const IsLoadingSlice = createSlice({
  name: "isLoading",
  initialState: {
    value: false,
  },
  reducers: {
    InProgress: () => ({
      value: true,
    }),
    Success: () => ({
      value: false,
    }),
    Failure: () => ({
      value: false,
    }),
  },
});

//Actions
export const { InProgress, Success, Failure } = IsLoadingSlice.actions;

export default IsLoadingSlice.reducer;
