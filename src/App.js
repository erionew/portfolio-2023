import './App.css';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { Route, Routes } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";

function App() {
  return (
    <div className="container--main">
      <Nav homeLink={'/'} skillsLink={'/skills'} projectsLink={'/projects'} contactLink={'/contact'} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
