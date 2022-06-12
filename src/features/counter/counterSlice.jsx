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
    increaseByAmount: (state, action) => {
      state.count = state.count + action.payload;
    },
  },
});
//* action creator
export const { increment, decrement, reset, increaseByAmount } =
  counterSlice.actions;
//* export reducer
export default counterSlice.reducer;
