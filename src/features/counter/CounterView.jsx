import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "./counterSlice";
const CounterView = () => {
  const count = useSelector((state) => state.counter.count);
  console.log(count);

  const dispatch = useDispatch();
  return (
    <div>
      <h2>Count: {count}</h2>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Inc
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        reset
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Dec
      </button>
    </div>
  );
};

export default CounterView;
