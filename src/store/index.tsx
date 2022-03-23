import {createSlice, configureStore, PayloadAction} from '@reduxjs/toolkit'
import {RawTodo} from "../types";
import {useSelector} from "react-redux";

const initTodo: RawTodo[] = []

const todoReducer = createSlice({ // dinh nghia 1 cai reducer su dung createSlide
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

export const {update, deleteTodo} = todoReducer.actions // goi ra cac action cua todoReducer

export const store = configureStore({ // khoi tao reducer
    reducer: {
        todoReducer: todoReducer.reducer
    }
})

export const useTodos = () => { // connect vao store de lay ra danh sach todo
    return useSelector(state => state.todoReducer)
}

export const updateTodoAction = (val: RawTodo) => { // dispatch vao action update cua todoReducer
    return store.dispatch(update(val))
}

export const removeTodoAction = (val: RawTodo) => { // dispatch vao action update cua todoReducer
    return store.dispatch(deleteTodo(val))
}
