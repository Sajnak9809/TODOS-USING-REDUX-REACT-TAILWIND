import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"


const App = () => {
  return (
    <div><h1 className="text-3xl font-bold underline text-blue-600 text-center">
    TODOS!
  </h1>
  <AddTodo/>
  <Todos/>
  </div>
  )
}

export default App