import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavbarComponent from './Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import ProjectDisplay from './pages/ProjectDisplay'
import LoginForm from './pages/LoginForm';
import ProtectedRoute from './components/ProtectedRoute';
import Admin from './pages/Admin'
import AddUpdatePoject from './pages/AddUpdateProject'

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
            <Route path="/resume" Component={Resume} />
            <Route path="/contact" Component={Contact} />
            <Route path="/login" Component={LoginForm} />
            <Route Component={ProtectedRoute}>
              <Route path="/admin" Component={Admin} /> 
            </Route> 
            <Route Component={ProtectedRoute}>
              <Route path='admin/add/' Component={AddUpdatePoject} />
            </Route>
            <Route Component={ProtectedRoute}>
              <Route path="admin/edit/:projectId" Component={AddUpdatePoject} />
            </Route>
        </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App
