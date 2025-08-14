import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import PaintProduction from './pages/services/PaintProduction';
import SoftwareDevelopment from './pages/services/SoftwareDevelopment';
import ComputerNetworking from './pages/services/ComputerNetworking';
import CBTExamPlatforms from './pages/services/CBTExamPlatforms';
import ElectricalInstallations from './pages/services/ElectricalInstallations';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services/paint-production" element={<PaintProduction />} />
            <Route path="/services/software-development" element={<SoftwareDevelopment />} />
            <Route path="/services/computer-networking" element={<ComputerNetworking />} />
            <Route path="/services/cbt-exam-platforms" element={<CBTExamPlatforms />} />
            <Route path="/services/electrical-installations" element={<ElectricalInstallations />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;