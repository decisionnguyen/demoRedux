import {createSlice, configureStore, PayloadAction} from '@reduxjs/toolkit'
import {RawTodo} from "../types";
import {useSelector} from "react-redux";

const initTodo: RawTodo[] = []

const todoReducer = createSlice({
    name: 'todoReducer',
    initialState: initTodo,
    reducers: {
        update: (state, payload: PayloadAction<RawTodo>) => {
            const _arr = [...state];
            const _index = _arr.findIndex(item => item.id === payload.payload.id)
            if (_index > -1) {
                _arr[_index] = payload.payload;
                return _arr
            }
            return [...state, payload.payload]
        },
        deleteTodo: (state, payload: PayloadAction<RawTodo>) => {
            return state
        }
    }
})

export const {update, deleteTodo} = todoReducer.actions

export const store = configureStore({
    reducer: {
        todoReducer: todoReducer.reducer
    }
})

export const useTodos = () => {
    return useSelector(state => state.todoReducer)
}

export const updateTodoAction = (val: RawTodo) => {
    return store.dispatch(update(val))
}

export const removeTodoAction = (val: RawTodo) => {
    return store.dispatch(deleteTodo(val))
}
