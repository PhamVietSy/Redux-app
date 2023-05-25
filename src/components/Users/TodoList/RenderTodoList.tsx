import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { RootState } from '../../../store';
import { deletePost, sortJobs, starteditPost } from '../../../context/Todo/Todo.reducer';
import { AppDiv, AppH2, DivSeacrch, Table } from '../../../style/StyledComponents';
import { Button, ButtonType } from '../../../style/StyledComponents/Button/Index';
import { Post } from '../../../types/Todo.type';

function RenderTodoList() {
    const [text, setText] = useState<string>();
    const postList = useSelector((state: RootState) => state.todo.postTodo);

    const [searchs, setSearchs] = useState<Post[]>();

    const dispatch = useDispatch();

    const handleDelete = (postId: string) => {
        dispatch(deletePost(postId));
    };
    const handleStartEditing = (postId: string) => {
        dispatch(starteditPost(postId));
    };
    const handleSearch = (text: string | undefined) => {
        if (text) {
            const searchList = postList.filter((job) => job.job === text);
            setSearchs(searchList);
        } else {
            setSearchs(undefined);
        }
    };
    const handleSort = () => {
        dispatch(sortJobs());
    };

    return (
        <>
            <AppDiv>
                <Table>
                    <thead>
                        <tr>
                            <th>
                                <AppH2>My task list</AppH2>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <DivSeacrch>
                                    <input
                                        type="text"
                                        placeholder="Search job"
                                        value={text || ''}
                                        onChange={(e) => setText(e.target.value)}
                                    />
                                    <Button type={ButtonType.DEFAULT} onClick={() => handleSearch(text)}>
                                        Search
                                    </Button>
                                    <Button type={ButtonType.DEFAULT} onClick={handleSort}>
                                        {' '}
                                        Sort
                                    </Button>
                                </DivSeacrch>
                            </th>
                        </tr>
                    </thead>
                    {!searchs && (
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
                    )}
                    {searchs && (
                        <tbody>
                            {searchs.map((search) => (
                                <tr key={search.id}>
                                    <th>
                                        {search.job}
                                        <Button type={ButtonType.EDIT} onClick={() => handleStartEditing(search.id)}>
                                            Edit
                                        </Button>
                                        <Button type={ButtonType.DELETE} onClick={() => handleDelete(search.id)}>
                                            Delete
                                        </Button>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    )}
                </Table>
            </AppDiv>
        </>
    );
}

export default RenderTodoList;
