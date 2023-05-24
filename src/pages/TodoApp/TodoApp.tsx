import FormAddTodo from '../../components/Users/From/FormAddTodo';
import RenderTodoList from '../../components/Users/TodoList/RenderTodoList';
import { AppDivContainer, AppTitle } from '../../style/StyledComponents';

function TodoApp() {
    return (
        <>
            <AppTitle>Todo App in ReactJS</AppTitle>
            <AppDivContainer>
                <FormAddTodo />
                <RenderTodoList />
            </AppDivContainer>
        </>
    );
}

export default TodoApp;
