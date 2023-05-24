import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import TodoApp from '../pages/TodoApp/TodoApp';
export const routerPage = {
    login: '/login',
    register: '/',
    todoapp: '/todoapp',
};

const AuthRoutes = [
    { path: routerPage.todoapp, element: TodoApp },
    { path: routerPage.register, element: Register },
    { path: routerPage.login, element: Login },
];
// privateRoutes
export { AuthRoutes };
