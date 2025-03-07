import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Certificate from './Components/Certificate';
import Footer from './Components/Footer';
import './App.css';

function AppContent() {
  const location = useLocation();
  
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="experience" element={<Experience />} />
        <Route path="certificates" element={<Certificate />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter future={{ 
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }}>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
