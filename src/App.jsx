import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Results from './pages/Results';
import Contact from './pages/Contact';
import Enquiry from './pages/Enquiry';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/results" element={<Results />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/enquiry" element={<Enquiry />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;