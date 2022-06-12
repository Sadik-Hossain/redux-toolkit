import { createSlice } from "@reduxjs/toolkit";
//* redux er vashay slice mane hoitese logic

export const counterSlice = createSlice({
  //* reducer  name
  name: "counter",
  //* initial state
  initialState: {
    count: 0,
  },
  //* reducer
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});
//* action creator
export const { increment, decrement, reset } = counterSlice.actions;
//* export reducer
export default counterSlice.reducer;
