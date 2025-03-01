import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: 1, 
        text: "Hello world"
    }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {         //reducers take properties & functions
        addTodo: (state, action) => { //addTodo has acces to (state,action) // action has access to all values like id, etc
            const todo = {
                id: nanoid(), 
                text: action.payload //payload is an object in itself
            }
            state.todos.push(todo) //state has access to current state //action has access to data that is passed
        },      
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    } 

})


export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer

