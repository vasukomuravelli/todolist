import "./App.css";
import { Todo } from "./Components/Todo";
import { TodoContents } from "./Components/TodoContents";

function App() {
  return (
    <div className="App">
      <Todo />
      <TodoContents />
    </div>
  );
}

export default App;
