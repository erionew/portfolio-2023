import './App.css';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="container--main">

      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
