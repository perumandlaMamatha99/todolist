
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
    todoItems: localStorage.getItem("todoItemsData") ? JSON.parse(localStorage.getItem("todoItemsData")) : []
}
const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo(state, action) {
            state.todoItems.push(action.payload);
            toast.success("item added", {
                position: "top-right"
            })
            localStorage.setItem("todoItemsData", JSON.stringify(state.todoItems)); 
        },
        deleteTodo(state, action) {
            console.log(action.payload)
            const nextTodoItems = state.todoItems.filter((item, ind) => ind !== action.payload);
            state.todoItems = nextTodoItems;
            toast.success(`todo item deleted`, {
                position: "top-right"
            })
            localStorage.setItem("todoItemsData", JSON.stringify(state.todoItems));
        },
        itemCompleted(state, action) {
            const mark=state.todoItems.map((element,ind)=>{
                if(ind==action.payload){
                    element.complted=!element.complted;
                }
            })
            toast.success(`todo item completed`, {
                position: "top-right"
            })
        },
        todoStatus(state,action){
            state.todoItems.map((elem,index)=>{
                if(action.payload=="All"){
                    elem.todoStatus="All";
                }
                else if(action.payload=="Completed"){
                    elem.todoStatus="Completed";
                }
                else if(action.payload=="Not-Completed"){
                    elem.todoStatus="Not-Completed"
                }
            })
            localStorage.setItem("todoItemsData", JSON.stringify(state.todoItems));
        }
    }
})
export const { addTodo, deleteTodo ,itemCompleted,todoStatus} = todoSlice.actions;
export default todoSlice.reducer;