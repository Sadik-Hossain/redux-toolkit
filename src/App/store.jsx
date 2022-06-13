import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import postSlice from "../features/posts/postSlice";
import todosSlice from "../features/todos/todosSlice";
const store = configureStore({
  reducer: {
    counter: counterSlice,
    posts: postSlice,
    todos: todosSlice,
  },
});
export default store;
