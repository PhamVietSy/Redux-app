import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthRoutes } from './routes';
import GlobaStyle from './config/Global.style';

function App() {
    return (
        <>
            <GlobaStyle />
            <Router>
                <div className="App">
                    <Routes>
                        {AuthRoutes.map((route, index) => {
                            const Page = route.element;
                            return <Route key={index} path={route.path} element={<Page />} />;
                        })}
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
