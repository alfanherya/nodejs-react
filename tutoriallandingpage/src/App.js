// import logo from './logo.svg';
import './App.css';
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import NavBar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  // let activeClassName = "nav-active";
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>Belajar membuat landing page selama seminggu</p>
    //   </header>
    // </div>
    <BrowserRouter>
    <NavBar />
      {/* <header>
        <h1>Hello herya from tutorial Routing react js</h1>
      </header>
      <nav>
        <NavLink to="" className={({ isActive }) => isActive && activeClassName}>Home</NavLink>
        <NavLink to="about" className={({ isActive }) => isActive && activeClassName}>About </NavLink>
        <NavLink to="contact" className={({ isActive }) => isActive && activeClassName} >Contact</NavLink>
      </nav> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
