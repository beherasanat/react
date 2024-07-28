import './App.css'
import AddTodo from "./components/AddTodo.jsx";
import Todos from "./components/Todos.jsx";

function App() {
  return (
    <>
        <h1>Welcome to Redux toolkit</h1>
      <div>
          <AddTodo></AddTodo>
          <Todos></Todos>
      </div>

    </>
  )
}

export default App
