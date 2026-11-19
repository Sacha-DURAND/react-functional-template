import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Routeur from './Routeur.jsx';
import Footer from './components/Footer/Footer.jsx';
import StudioFooter from './utils/StudioFooter.jsx';
import ScrollToTop from './utils/ScrollToTop.jsx';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <div className="app-container">
        <Header />

        <main className="main-content">
          <Routeur />
        </main>

        <Footer />
        <StudioFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;