import { createReducer, createAction } from '@reduxjs/toolkit';
import { Post, TodoState } from '../../types/Todo.type';
import { message } from 'antd';

export const initalTodoList: Post[] = [];

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
export const searchJod = createAction<string>('todo/searchJod');
export const sortJobs = createAction('todo/sortJobs');
export const logOut = createAction('todo/logOut');

const todoReducer = createReducer(initalState, (builder) => {
    builder
        .addCase(addPost, (state, action) => {
            const post = action.payload;
            state.postTodo.push(post);
            message.success('You just added a new job');
        })
        .addCase(deletePost, (state, action) => {
            const postId = action.payload;
            const foundPost = state.postTodo.findIndex((post) => post.id === postId);
            if (foundPost !== -1) {
                state.postTodo.splice(foundPost, 1);
                message.error('You deleted a job');
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
                    message.warning('You just edited a successful job');
                    return true;
                }
                return false;
            });
            state.editingPost = null;
        })
        .addCase(deleteAll, (state) => {
            state.postTodo = [];
        })
        .addCase(searchJod, (state, action) => {
            const textJob = action.payload;
            const filteredJob = state.postTodo.length > 0 ? state.postTodo.filter((job) => job.job === textJob) : [];
            state.postTodo = filteredJob;
        })
        .addCase(sortJobs, (state) => {
            const sortJob = [...state.postTodo];
            state.postTodo = sortJob.sort((a, b) => {
                const jobA = a.job.toUpperCase(); // ignore upper and lowercase
                const jobB = b.job.toUpperCase(); // ignore upper and lowercase
                if (jobA < jobB) {
                    return -1;
                }
                if (jobA > jobB) {
                    return 1;
                }

                // names must be equal
                return 0;
            });
        })
        .addCase(logOut, (state) => {
            localStorage.removeItem('logedAcc');
            state.postTodo = [];
        });
});
export default todoReducer;
