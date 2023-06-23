import { configureStore } from '@reduxjs/toolkit';
import tododata from './redux/todoSlice';
const store=configureStore({
    reducer:{
        tododata:tododata

    }
})
export default store;