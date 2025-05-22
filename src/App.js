import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home'; 
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject'; // Importa a página de Novo Projeto
import Container from './components/layout/Container';  // Importa o componente Container para layout
import NavBar from './components/layout/Navbar';    // Importa o menu de navegação
import Projects from './components/pages/Projects'; // Importa a página de Projetos
import Footer from './components/layout/Footer';    // Importa o rodapé
import Project from './components/pages/Project';

function App() {
  return (
    <Router> {/* Inicia o roteamento */}
      <NavBar /> {/* Exibe a barra de navegação em todas as páginas */}
      <Routes> {/* Define as rotas da aplicação */}
        {/* Cada Route define um caminho e o componente que será exibido */}
        <Route path="/" element={<Container customClass="min-height"> <Home /></Container>} />
        <Route path="/contact" element={<Container customClass="min-height"> <Contact /></Container>} />
        <Route path="/company" element={<Container customClass="min-height"> <Company /></Container>} />
        <Route path="/newproject" element={<Container customClass="min-height"> <NewProject /></Container>} />
        <Route path="/projects" element={<Container customClass="min-height"> <Projects /></Container>} />
        <Route path="/project/:id" element={<Container customClass="min-height"> <Project /></Container>} />
      </Routes>
      <Footer /> {/* Exibe o rodapé em todas as páginas */}
    </Router>
  );
}

export default App;