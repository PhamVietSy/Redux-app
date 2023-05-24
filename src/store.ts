import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './context/Todo/Todo.reducer';

export const store = configureStore({
    reducer: { todo: todoReducer },
});

//Lấy RootState và AppDispath từ store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;
