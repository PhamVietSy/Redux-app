export interface Post{
    id: string
    job: string
}
export interface TodoState {
    postTodo: Post[];
    editingPost: Post | null;
}