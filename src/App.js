import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Company from './pages/Company';
import NewProject from './pages/NewProject';
import Container from './layout/Container';
import NavBar from './layout/Navbar';
import Projects from './pages/Projects';
import Footer from './layout/Footer';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Container customClass="min-height" ><Home /></Container>} />
        <Route path="/contact" element={<Container customClass="min-height" ><Contact /></Container>} />
        <Route path="/company" element={<Container customClass="min-height" ><Company /></Container>} />
        <Route path="/newproject" element={<Container customClass="min-height" ><NewProject /></Container>} />
        <Route path="/projects" element={<Container customClass="min-height" ><Projects /></Container>} />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
