import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/TodoSlice";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      {todos.map((todo) => (
        <div
          className={`d-flex py-2 px-2 gap-3 rounded-2 `} key={todo.id}
        >
          <input
            type="text"
            className={`form-control `}
            value={todo.text}
            readOnly
          />
          <button className="btn btn-danger btn-sm "
          onClick={()=>dispatch(removeTodo(todo.id))}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default Todo;
