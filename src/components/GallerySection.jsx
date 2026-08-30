import React, { useRef } from 'react';
import TextReveal from './ui/TextReveal';

export default function GallerySection() {
  const carouselRef = useRef(null);

  const projects = [
    {
      title: "Lamparas 18 Watts",
      image: "https://res.cloudinary.com/llcon56b/image/upload/f_auto,q_auto/v1788047357/imag_prodcuto1.jpg"
    },
    {
      title: "Jardín Artificial",
      image: "https://res.cloudinary.com/llcon56b/image/upload/f_auto,q_auto/v1788047357/imag_producto2.jpg"
    },
    {
      title: "Barrotes-Interior",
      image: "https://res.cloudinary.com/llcon56b/image/upload/f_auto,q_auto/v1788047354/imag_prodcuto3.jpg"
    },
    {
      title: "Panel WPC",
      image: "https://res.cloudinary.com/llcon56b/image/upload/f_auto,q_auto/v1788047355/imag_prodcuto4.jpg"
    },
    {
      title: "Piso SPC",
      image: "https://res.cloudinary.com/llcon56b/image/upload/f_auto,q_auto/v1788047355/imag_prodcuto5.jpg"
    },
    {
      title: "Lamina DRYWALL",
      image: "https://res.cloudinary.com/llcon56b/image/upload/f_auto,q_auto/v1788047355/imag_prodcuto6.jpg"
    }
  ];

  const handleScrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section id="productos" className="bg-[#0e0e0e] py-20 md:py-28 px-4 sm:px-6 lg:px-12 w-full border-t border-neutral-900 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Encabezado con Controles */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="flex flex-col">
            <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-white uppercase mb-4 block">
              <span className="text-red-600">[</span> CATÁLOGO DE PRODUCTOS <span className="text-red-600">]</span>
            </span>
            <TextReveal 
              as="h2"
              text="Todo lo que necesitas para renovar tus ambientes" 
              className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight max-w-2xl leading-[1.1]"
              justifyContent="flex-start" 
            />
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={handleScrollLeft}
              className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-200 active:scale-95"
              aria-label="Anterior proyecto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button 
              onClick={handleScrollRight}
              className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-200 active:scale-95"
              aria-label="Siguiente proyecto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carrusel de Proyectos */}
        <div 
          ref={carouselRef}
          className="flex gap-6 md:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style dangerouslySetInnerHTML={{__html: `
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}} />
          
          {projects.map((project, index) => (
            <div key={index} className="min-w-[70vw] sm:min-w-[35vw] lg:min-w-[22vw] max-w-[320px] snap-start flex-shrink-0 flex flex-col">
              
              {/* Meta Información Superior */}
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map(i => (
                  <img key={i} src="https://res.cloudinary.com/llcon56b/image/upload/f_auto,q_auto/v1788047352/estrella.png" alt="Estrella" className="w-3 h-3 object-contain" />
                ))}
              </div>

              {/* Contenedor Imagen */}
              <div className="w-full h-[240px] sm:h-[280px] md:h-[320px] overflow-hidden rounded-sm relative group cursor-pointer">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Título Inferior */}
              <h3 className="text-lg md:text-xl font-bold text-white mt-4 tracking-tight">
                {project.title}
              </h3>
              
            </div>
          ))}
        </div>
        
        {/* Controles móviles (visibles solo en pantallas pequeñas) */}
        <div className="flex items-center gap-4 mt-6 md:hidden">
          <button 
            onClick={handleScrollLeft}
            className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-200 active:scale-95"
            aria-label="Anterior proyecto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button 
            onClick={handleScrollRight}
            className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-200 active:scale-95"
            aria-label="Siguiente proyecto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
