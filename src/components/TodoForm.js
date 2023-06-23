import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/todoSlice';
import Todo from './Todo';
import { todoStatus} from '../redux/todoSlice';
const todoelements=["All","Completed","Not-Completed"];
function TodoForm() {
  const dispatch = useDispatch();
  const [value, setValue] = useState({ name: "", complted: false,todoStatus:"" });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(value));
  }
   const TodoStatus=(todoele)=>{
    dispatch(todoStatus(todoele))
   }
  return (
    <div>
      <form className='todo-form' >
        <h1 style={{color:"black"}}>Todo App</h1>
        <input type="text" placeholder='Enter todo text' value={value.name} className='todo-input' onChange={(e) => setValue({ ...value, name: e.target.value })} />
        <button className='todo-btn' onClick={(e) => handleSubmit(e)}>Add</button><br />
      </form>
      {todoelements.map((todoele,index)=>{
         return <button className='todo-completed todos-btn' onClick={() => TodoStatus(todoele)} >{todoele}</button>
      })}
      <Todo />
    </div>
  )
}
export default TodoForm;