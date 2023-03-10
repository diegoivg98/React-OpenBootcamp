import "./App.css";
import { TaskProvider } from "./components/TaskContext";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <TaskProvider>
        <TaskList />
      </TaskProvider>
    </div>
  );
}

export default App;
