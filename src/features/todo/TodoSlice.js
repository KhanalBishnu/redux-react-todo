import { createSlice,nanoid } from "@reduxjs/toolkit";
 
const initialState={
    todos:[{id:1,text:"hello world",isCompleted:false}]
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload,
                isCompleted:false
            }
            state.todos.push(todo)
        },
        updateTodo:(state,action)=>{
            state.todos=state.todos.map((todo)=>todo.id==action.payload.id ? {text:action.payload.text}:todo.text)
            console.log(state.todos);
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
        isCompleteTodo:(state,action)=>{
            const newId=action.payload
            debugger
            state.todos=state.todos.map((todo)=>todo.id===action.payload ? {...todo,isCompleted:!todo.isCompleted}:todo)
            debugger
        }
    }
})

export const {addTodo,removeTodo,updateTodo,isCompleteTodo} = todoSlice.actions
export default todoSlice.reducer