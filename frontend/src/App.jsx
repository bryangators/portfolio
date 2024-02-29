import './App.css'
import HelloWorld from './HelloWorld'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavbarComponent from './Navbar';
import Home from './Home';
import Projects from './Projects'
import Blog from './Blog';
import BlogPost from './BlogPost';

function App() {

  return (
    <div>
      <BrowserRouter>
      <header>
        <NavbarComponent></NavbarComponent>
      </header>
      <main>
      <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/projects" Component={Projects} />
          <Route path="/blog" Component={Blog} />
          <Route path='/blog/:id' Component={BlogPost} />
      </Routes>
      </main>
      </BrowserRouter>
    </div>
  );
}

export default App
