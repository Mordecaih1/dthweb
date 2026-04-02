import { useState, useEffect } from 'react';
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
  const [showCookie, setShowCookie] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookieAccepted');
    if (!accepted) setShowCookie(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setShowCookie(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieAccepted', 'false');
    setShowCookie(false);
  };

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

        {/* Cookie Banner */}
        {showCookie && (
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0A1F44] text-white px-6 py-4 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-200 max-w-2xl">
              🍪 We use cookies to improve your experience on our website. By continuing to browse, you agree to our{' '}
              <a href="/privacy" className="underline text-blue-300 hover:text-blue-200">Privacy Policy</a>.
            </p>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={declineCookies}
                className="px-5 py-2 rounded-lg border border-slate-400 text-slate-300 text-sm hover:bg-slate-700 transition-all"
              >
                Decline
              </button>
              <button
                onClick={acceptCookies}
                className="px-5 py-2 rounded-lg bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 transition-all"
              >
                Accept
              </button>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;