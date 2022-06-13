import "./App.css";
import CounterView from "./features/counter/CounterView";
import PostsView from "./features/posts/PostsView";
import TodosView from "./features/todos/todosView";

function App() {
  return (
    <div className="App">
      <CounterView />
      {/* <PostsView /> */}
      <TodosView />
    </div>
  );
}

export default App;
