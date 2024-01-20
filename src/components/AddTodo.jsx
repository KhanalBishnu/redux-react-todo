import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/TodoSlice'
function AddTodo() {
    const [todo,setTodo]=useState('')
    const [isEmpty,setisEmpty]=useState(false)
    const dispatch=useDispatch()
    const add=(e)=>{
        e.preventDefault()
        if(!todo){
            setisEmpty(true)
            return
        }
        dispatch(addTodo(todo))
        setTodo('')
        e.target.reset()
    }
  return (
    <form onSubmit={add}>
        <div className="d-flex mb-2 py-1">
            <input type="text" className={`form-control ${isEmpty?'border  border-3 border-danger':''}`}  onChange={(e)=>setTodo(e.target.value)} />
            <button type='submit' className='btn btn-primary '>Add</button>
        </div>
    </form>
  )
}

export default AddTodo