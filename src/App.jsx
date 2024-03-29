import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import { useSelector } from "react-redux";

function App() {
  const [count, setCount] = useState(0);
  const todos = useSelector((state) => state.todos);
  const [countCompletedTodo,setCountCompletedTodo]=useState(0);
  useEffect(()=>{
    const completedCount=todos.map((todo)=>todo.isCompleted==true ? setCountCompletedTodo(countCompletedTodo+1):'')
  },[todos])
  return (
    <div className="container mt-5">
      <div className="row d-flex  justify-content-center align-items-center">
        <h3 className="text-center">My Todos For EveryDay</h3>
        <div className="col-md-8 border border-secondary rounded p-4 my-2">
          <div className="samary">
            <h5>Total Completed Todos : {countCompletedTodo}</h5>
          </div>
          <AddTodo />
          {todos.map((todo) => (
              <Todo todo={todo} key={todo.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
