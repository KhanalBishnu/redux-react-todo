import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo,updateTodo } from "../features/todo/TodoSlice";

function Todo({todo}) {
  const dispatch = useDispatch();
  const [input,setInput]=useState(todo.text)
  const [textEditable,setTextEditable]=useState(false)
  const editTodo=()=>{
    dispatch(updateTodo(todo.id,input))
    setTextEditable(false)
    console.log(todo);
  }
  return (
    <>
      
          <input
            type="text"
            className="form-control"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            readOnly={!textEditable}
          />
          <button className="btn btn-danger btn-sm" 
          onClick={textEditable ? editTodo:()=>setTextEditable(true) }>{textEditable?'Update':'Edit'}</button>
          <button className="btn btn-danger btn-sm "
          onClick={()=>dispatch(removeTodo(todo.id))}>Delete</button>
          
    </>
  );
}

export default Todo;
