import { createReducer, createAction } from '@reduxjs/toolkit';
import { Post } from '../../types/Todo.type';
import { initalTodoList } from '../../constants/todo';

interface TodoState {
    postTodo: Post[];
    editingPost: Post | null;
}

const initalState: TodoState = {
    postTodo: initalTodoList,
    editingPost: null,
};
export const addPost = createAction<Post>('todo/addPost');
export const deletePost = createAction<string>('todo/deletePost');
export const starteditPost = createAction<string>('/todo/starteditPost');
export const cancelEditing = createAction('/todo/cancelEditing');
export const editing = createAction<Post>('/todo/editing');
export const deleteAll = createAction('/todo/deleteAll');

const todoReducer = createReducer(initalState, (builder) => {
    builder
        .addCase(addPost, (state, action) => {
            const post = action.payload;
            state.postTodo.push(post);
        })
        .addCase(deletePost, (state, action) => {
            const postId = action.payload;
            const foundPost = state.postTodo.findIndex((post) => post.id === postId);
            if (foundPost !== -1) {
                state.postTodo.splice(foundPost, 1);
            }
        })
        .addCase(starteditPost, (state, action) => {
            const postId = action.payload;
            const foundPost = state.postTodo.find((post) => post.id === postId) || null;
            state.editingPost = foundPost;
        })
        .addCase(cancelEditing, (state) => {
            state.editingPost = null;
        })
        .addCase(editing, (state, action) => {
            const postId = action.payload.id;
            state.postTodo.some((post, index) => {
                if (post.id === postId) {
                    state.postTodo[index] = action.payload;
                    return true;
                }
                return false;
            });
            state.editingPost = null;
        })
        .addCase(deleteAll, (state) => {
            state.postTodo = [];
        });
});
export default todoReducer;
