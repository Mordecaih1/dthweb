import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import WhatsAppFloating from '@/components/WhatsAppFloating';
import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Quote from '@/pages/Quote';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans antialiased text-[#0A1F44] flex flex-col min-h-screen relative" style={{ fontFamily: 'Inter, sans-serif' }}>
        <WhatsAppFloating />
        <Preloader />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/quote" element={<Quote />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
