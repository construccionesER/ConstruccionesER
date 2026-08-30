import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import BenefitsSection from './components/BenefitsSection';
import ServicesSection from './components/ServicesSection';
import QualitySection from './components/QualitySection';
import GallerySection from './components/GallerySection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Forzar el scroll hacia arriba al montar/recargar el sitio
    window.scrollTo(0, 0);
    
    // Evitar que el navegador intente restaurar la posición previa de scroll tras recargar
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Pantalla de carga estética de 2 segundos
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
      }, 500); // 500ms para transición suave de desvanecimiento
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div 
          className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a] transition-opacity duration-500 ${
            fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <div className="loader">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
      )}

      {/* Renderizamos el contenido una vez terminado el loader (o al empezar el fadeOut) para que todas las animaciones de Hero se disparen exactamente cuando el usuario entra a ver la página */}
      {(!loading || fadeOut) && (
        <div className="w-full">
          <Header />
          <Hero />
          <div className="w-full h-1.5 md:h-2 bg-red-600"></div>
          <AboutSection />
          <BenefitsSection />
          <ServicesSection />
          <QualitySection />
          <GallerySection />
          <TeamSection />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
