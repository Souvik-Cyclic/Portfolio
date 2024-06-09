import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar/>
        </header>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Education' element={<Education/>} />
          <Route path='/Skills' element={<Skills/>} />
          <Route path='/Projects' element={<Projects/>} />
          <Route path='/Contact' element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
