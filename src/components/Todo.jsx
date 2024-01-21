import React, { useState , useRef} from "react";
import { useDispatch } from "react-redux";
import {
  removeTodo,
  updateTodo,
  isCompleteTodo,
} from "../features/todo/TodoSlice";

function Todo({ todo }) {
  const dispatch = useDispatch();
  const [input, setInput] = useState(todo.text);
  const [textEditable, setTextEditable] = useState(false);

  const inputRef = useRef(null);

  const editTodo = () => {
    inputRef.current.focus();
    dispatch(updateTodo({ id: todo.id, text: input }));
    setTextEditable(false);
  };
  const toggleComplete = () => {
    dispatch(isCompleteTodo(todo.id));
    console.log(todo);
  };
  return (
    <li className={`d-flex py-2 px-2 gap-1 rounded-2`} key={todo.id}>
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={toggleComplete}
      />
      <input
        type="text"
        className={`form-control  ${
          todo.isCompleted ? "bg-success text-white" : ""
        } ${textEditable ? "focus-ring" : ""} ${
          todo.isCompleted ? "text-decoration-line-through" : ""
        }`}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        readOnly={!textEditable}
        ref={inputRef}
      />
      <button
        className={` btn btn-sm  ${
          textEditable ? " btn-warning " : "btn-primary "
        }`}
        onClick={textEditable ? editTodo : () => setTextEditable(true)}
        disabled={todo.isCompleted}
      >
        {textEditable ? "Update" : "Edit"}
      </button>
      {textEditable ? (
        <button
          className="btn btn-sm  btn-dark"
          onClick={() => setTextEditable(false)}
        >
          X
        </button>
      ) : (
        ""
      )}
      <button
        className="btn btn-danger btn-sm "
        onClick={() => dispatch(removeTodo(todo.id))}
      >
        Delete
      </button>
    </li>
  );
}

export default Todo;
