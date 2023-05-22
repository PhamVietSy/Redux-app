import {  useEffect, useState } from "react";
import { Button, ButtonType } from "../Button/Index";
import { AppDiv1, AppDiv, AppDivBl } from "../StyledComponents";
import { Post } from "../../../types/Todo.type";
import {useSelector, useDispatch} from 'react-redux'
import { addPost, cancelEditing, deleteAll, editing } from "../../Todo/Todo.reducer";
import { RootState } from "../../../store";



const initalState: Post = {
    job: '',
    id: ''
}

function FormAddTodo() {
    const [job,setJob] = useState<Post>(initalState)
    const dispatch = useDispatch()
    const editingPost = useSelector((state: RootState) => state.todo.editingPost)

    useEffect(()=>{
        setJob(editingPost || initalState)
    },[editingPost])

    const handleAdd = () => {
        if (job.job === "") {
            return alert("giá trị nhập vào không được để trống!");
        }
        const dataJob = {...job,id: new Date().toISOString() }
        dispatch(addPost(dataJob))
        setJob(initalState)
    }
    const handleCancel = () =>{
        dispatch(cancelEditing())
    }
    const handleEdit = ()=>{
        dispatch(editing(job))
     } 
    const  handleDeleteAll = (post: Post) =>{
        dispatch(deleteAll(post))
    }
   
    return (<AppDiv1>
        <AppDiv>
            <AppDivBl>
                <h3>Add new task</h3>
                <input
                    value={job.job}
                    onChange={e => setJob(prev =>({...prev,job: e.target.value}))}

                />
            </AppDivBl>
            <AppDivBl>
                {editingPost &&
                    <>
                    <Button type={ButtonType.DONE} onClick={handleEdit}>Edit</Button>
                    <Button type={ButtonType.CANCEL} onClick={handleCancel}>Cancel</Button>
                    </>
                }
                {!editingPost &&
                    <span>
                        <Button type={ButtonType.DEFAULT} onClick={handleAdd} >Add</Button>
                        <Button type={ButtonType.DONE} onClick={handleDeleteAll}>Clear All</Button>
                     </span>
                }
                
            </AppDivBl>
        </AppDiv>
    </AppDiv1>);
}

export default FormAddTodo;