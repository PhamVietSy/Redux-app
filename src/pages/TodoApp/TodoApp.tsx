import { useDispatch } from 'react-redux';
import FormAddTodo from '../../components/Users/From/FormAddTodo';
import RenderTodoList from '../../components/Users/TodoList/RenderTodoList';
import { AppDivContainer, AppTitle, TodoAppDiv, TodoContainer } from '../../style/StyledComponents';
import { Button, ButtonType } from '../../style/StyledComponents/Button/Index';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../context/Todo/Todo.reducer';

function TodoApp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/login');
        dispatch(logOut());
    };
    return (
        <TodoContainer>
            <TodoAppDiv>
                <Button type={ButtonType.LOGOUT} onClick={handleLogout}>
                    Out
                </Button>
                <AppTitle>Todo App in ReactJS</AppTitle>
                <AppDivContainer>
                    <FormAddTodo />
                    <RenderTodoList />
                </AppDivContainer>
            </TodoAppDiv>
        </TodoContainer>
    );
}

export default TodoApp;
