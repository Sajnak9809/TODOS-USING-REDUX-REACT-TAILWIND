import { useSelector } from "react-redux"
import {  useDispatch } from "react-redux"
import { removeTodo } from "../Features/todo/todoSlice"

const Todos = () => {
  const todos=useSelector(state => state.todos)

  const dispatch=useDispatch()
  
  return (
    <>
    <div>Todos</div>
   
     <ul className="list-none">
      {todos.map((todo)=>(
      <li
      className="mt-4 flex justify-between
      items-center bg-zinc-800 px-4 py-2 rounded"
      key={todo.id}
      >
        <div className="text-white">{todo.text}</div>
        <button
        onClick={()=>dispatch(removeTodo(todo.id))}
        className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none
        hover:bg-red-600 rounded text-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>
        </button>
      </li>  
      ))}
       </ul>
      
    
   

    </> 
  )}
  


export default Todos