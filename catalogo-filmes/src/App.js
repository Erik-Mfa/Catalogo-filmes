import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
  <Router>
    <div className='App'>
      <ul>
        <li> <Link to='/'>Home</Link> </li>
        <button>Botão Cadastrar</button>
      </ul>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
