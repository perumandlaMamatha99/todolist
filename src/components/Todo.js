import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CheckIcon from '@mui/icons-material/Check';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import { deleteTodo } from '../redux/todoSlice';
import { itemCompleted } from '../redux/todoSlice';
function Todo() {
    var todoData = useSelector(state => state.tododata);
    const dispatch = useDispatch();
    const deleteItem = (e, index) => {
        dispatch(deleteTodo(index))
    }
    const markCompleted = (e, index) => {
        dispatch(itemCompleted(index))
    }
    return (
        <div>
            {todoData.todoItems.map((ele, index) => {
                if (ele && ele.todoStatus == "") {
                    return <div className={ele.complted ? "complete" : "todo-container"} key={index}>
                        <span className='todo-items' >{ele.name}</span>
                        <div>
                            <span><EditIcon /></span>
                            <span onClick={(e) => markCompleted(e, index)}><CheckIcon /></span>
                            <span ><DeleteOutlinedIcon onClick={(e) => deleteItem(e, index)}></DeleteOutlinedIcon></span>
                        </div>
                    </div>
                }
                if (ele.todoStatus == "Completed" && ele.complted == true) {
                    return <div className={ele.complted ? "complete" : "todo-container"} key={index}>
                        <span className='todo-items' >{ele.name}</span>
                        <div>
                            <span><EditIcon /></span>
                            <span onClick={(e) => markCompleted(e, index)}><CheckIcon /></span>
                            <span ><DeleteOutlinedIcon onClick={(e) => deleteItem(e, index)}></DeleteOutlinedIcon></span>
                        </div>
                    </div>
                }
                else if (ele.todoStatus == "Not-Completed" && ele.complted == false) {
                    return <div className={ele.complted ? "complete" : "todo-container"} key={index}>
                        <span className='todo-items' >{ele.name}</span>
                        <div>
                            <span><EditIcon /></span>
                            <span onClick={(e) => markCompleted(e, index)}><CheckIcon /></span>
                            <span ><DeleteOutlinedIcon onClick={(e) => deleteItem(e, index)}></DeleteOutlinedIcon></span>
                        </div>
                    </div>
                }
                else if (ele.todoStatus == "All") {
                    return <div className={ele.complted ? "complete" : "todo-container"} key={index}>
                        <span className='todo-items' >{ele.name}</span>
                        <div>
                            <span><EditIcon /></span>
                            <span onClick={(e) => markCompleted(e, index)}><CheckIcon /></span>
                            <span ><DeleteOutlinedIcon onClick={(e) => deleteItem(e, index)}></DeleteOutlinedIcon></span>
                        </div>
                    </div>
                }
            })}
        </div>
    )
}
export default Todo;

