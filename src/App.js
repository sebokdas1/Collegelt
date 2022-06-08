import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import User from './pages/Home/User';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='user-route' element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
