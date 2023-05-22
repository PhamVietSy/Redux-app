
import './App.css';
import FormAddTodo from './pages/Components/From/FormAddTodo';
import { AppDiv1, AppTitle } from './pages/Components/StyledComponents';
import RenderTodoList from './pages/Components/TodoList/RenderTodoList';

function App() {
  return (
    <div className="App">
      <AppTitle>Todo App in ReactJS</AppTitle>
      <AppDiv1>
        <FormAddTodo/>
        <RenderTodoList/>
      </AppDiv1>
    </div>
  );
}

export default App;
