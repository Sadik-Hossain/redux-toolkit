import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "./todosSlice";

const TodosView = () => {
  //   const todos = useSelector((state) => console.log(state));
  const { isLoading, error, todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  console.log(todos);

  return (
    <div>
      <h1>todos</h1>
      {isLoading && <h4>loading...</h4>}
      {error && <h4>{error?.message}</h4>}
      <section>
        {todos &&
          todos.map((todo) => {
            return (
              <article key={todo.id}>
                <h3>{todo.title}</h3>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default TodosView;
