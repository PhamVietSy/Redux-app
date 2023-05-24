import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import { deletePost, starteditPost } from '../../../context/Todo/Todo.reducer';
import { AppDiv, AppH2, Table } from '../../../style/StyledComponents';
import { Button, ButtonType } from '../../../style/StyledComponents/Button/Index';

function RenderTodoList() {
    const postList = useSelector((state: RootState) => state.todo.postTodo);

    const dispatch = useDispatch();

    const handleDelete = (postId: string) => {
        dispatch(deletePost(postId));
    };
    const handleStartEditing = (postId: string) => {
        dispatch(starteditPost(postId));
    };

    return (
        <>
            <AppDiv>
                <Table>
                    <thead>
                        <tr>
                            <th>
                                {' '}
                                <AppH2>My task list</AppH2>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {postList.map((post) => (
                            <tr key={post.id}>
                                <th>
                                    {post.job}
                                    <Button type={ButtonType.EDIT} onClick={() => handleStartEditing(post.id)}>
                                        Edit
                                    </Button>
                                    <Button type={ButtonType.DELETE} onClick={() => handleDelete(post.id)}>
                                        Delete
                                    </Button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </AppDiv>
        </>
    );
}

export default RenderTodoList;
