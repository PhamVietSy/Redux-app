import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { message } from 'antd';
import { Post } from '../../../types/Todo.type';
import { RootState } from '../../../store';
import { addPost, cancelEditing, deleteAll, editing } from '../../../context/Todo/Todo.reducer';
import { AppDiv, AppDivBl, AppDivContainer } from '../../../style/StyledComponents';
import { Button, ButtonType } from '../../../style/StyledComponents/Button/Index';
const initalState: Post = {
    job: '',
    id: '',
};

function FormAddTodo() {
    const [job, setJob] = useState<Post>(initalState);
    const dispatch = useDispatch();
    const editingPost = useSelector((state: RootState) => state.todo.editingPost);
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        setJob(editingPost || initalState);
    }, [editingPost]);

    const handleAdd = () => {
        if (job.job === '') {
            return message.warning('Input value cannot be left blank!');
        }
        //State
        const dataJob = { ...job, id: new Date().toISOString() };
        dispatch(addPost(dataJob));
        setJob(initalState);

        //Local

        //focus input
        if (inputRef.current) inputRef.current.focus();
    };
    const handleCancel = () => {
        dispatch(cancelEditing());
    };
    const handleEdit = () => {
        dispatch(editing(job));
    };
    const handleDeleteAll = () => {
        dispatch(deleteAll());
    };

    return (
        <AppDivContainer>
            <AppDiv>
                <AppDivBl>
                    <h3>Add new task</h3>
                    <input
                        ref={inputRef}
                        value={job.job}
                        placeholder="Add job"
                        onChange={(e) => setJob((prev) => ({ ...prev, job: e.target.value }))}
                    />
                </AppDivBl>
                <AppDivBl>
                    {editingPost && (
                        <>
                            <Button type={ButtonType.DONE} onClick={handleEdit}>
                                Edit
                            </Button>
                            <Button type={ButtonType.CANCEL} onClick={handleCancel}>
                                Cancel
                            </Button>
                        </>
                    )}
                    {!editingPost && (
                        <span>
                            <Button type={ButtonType.DEFAULT} onClick={handleAdd}>
                                Add
                            </Button>
                            <Button type={ButtonType.DONE} onClick={handleDeleteAll}>
                                Clear All
                            </Button>
                        </span>
                    )}
                </AppDivBl>
            </AppDiv>
        </AppDivContainer>
    );
}

export default FormAddTodo;
