import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { OurWorksPage } from './pages/OurWorksPage';
import { CupboardWorksPage } from './pages/CupboardWorksPage';
import { CherryCupboardsPage } from './pages/CherryCupboardsPage';
import { TeakCupboardsPage } from './pages/TeakCupboardsPage';
import { UPVCCupboardsPage } from './pages/UPVCCupboardsPage';
import { PVCDoorWorksPage } from './pages/PVCDoorWorksPage';
import { WPVCDoorWorksPage } from './pages/WPVCDoorWorksPage';
import { AluminiumWorksPage } from './pages/AluminiumWorksPage';
import { NetlonWorksPage } from './pages/NetlonWorksPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-ivory text-charcoal font-sans">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/our-works" element={<OurWorksPage />} />
          <Route path="/cupboard-works" element={<CupboardWorksPage />} />
          <Route path="/cupboard-works/cherry" element={<CherryCupboardsPage />} />
          <Route path="/cupboard-works/teak" element={<TeakCupboardsPage />} />
          <Route path="/cupboard-works/upvc" element={<UPVCCupboardsPage />} />
          <Route path="/cupboard-works/general" element={<Navigate to="/cupboard-works" replace />} />
          <Route path="/pvc-door-works" element={<PVCDoorWorksPage />} />
          <Route path="/wpvc-door-works" element={<WPVCDoorWorksPage />} />
          <Route path="/aluminium-works" element={<AluminiumWorksPage />} />
          <Route path="/netlon-works" element={<NetlonWorksPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
