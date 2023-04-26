import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './PAGES/Home/Home';
import Projects from './PAGES/Projects/Projects';
import Experience from './PAGES/Experience/Experience';
import Navigation from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="App">
      <Router>
      <Navigation/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/projects" element={<Projects/>}/>
          <Route exact path="/experience" element={<Experience/>}/>
        </Routes>
      </Router>
        <Footer />
    </div>
  );
}

export default App;
