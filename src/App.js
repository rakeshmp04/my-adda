import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home/home.component';
import Login from './components/Login-form/login-form.component';
import Register from './components/Register-form/register-form.component';
import Navigation from './Routes/Navigation/navigation.component';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='log-in' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
