import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import ProductsOverview from './pages/ProductsOverview';
import FIBCPage from './pages/FIBCPage';
import BafflePage from './pages/BafflePage';
import AdStarPage from './pages/AdStarPage';
import WovenPPPage from './pages/WovenPPPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'products':
        return <ProductsOverview setCurrentPage={setCurrentPage} />;
      case 'fibc':
        return <FIBCPage />;
      case 'baffle':
        return <BafflePage />;
      case 'adstar':
        return <AdStarPage />;
      case 'woven':
        return <WovenPPPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
