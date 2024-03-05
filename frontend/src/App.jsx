import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavbarComponent from './Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import ProjectDisplay from './pages/ProjectDisplay'
import AddProject from './pages/AddProject';

function App() {
  return (
    <div className='font-monospace'>
      <BrowserRouter>
      <header>
        <NavbarComponent></NavbarComponent>
      </header>
      <main>
      <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/projects" Component={Projects} />
          <Route path='/projects/:id' Component={ProjectDisplay} />
          <Route path='/admin' Component={AddProject} />
          <Route path="/resume" Component={Resume} />
          <Route path="/contact" Component={Contact} />
      </Routes>
      </main>
      </BrowserRouter>
    </div>
  );
}

export default App
