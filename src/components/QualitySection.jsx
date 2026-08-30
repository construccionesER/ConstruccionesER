import React from 'react';
import FoldText from './ui/FoldText';

export default function QualitySection() {
  return (
    <section className="w-full min-h-[550px] lg:min-h-[650px] grid grid-cols-1 lg:grid-cols-2 border-y border-neutral-200">
      
      {/* Columna Izquierda (Contenido y Cita) */}
      <div className="flex flex-col justify-between min-h-[380px] sm:min-h-[420px] lg:min-h-0 gap-10 lg:gap-0 p-8 sm:p-10 md:p-14 lg:p-20 bg-[#FBF9F5] border-b lg:border-b-0 lg:border-r border-neutral-200">
        <p className="text-xs sm:text-sm md:text-base text-neutral-600 max-w-sm md:max-w-md leading-relaxed tracking-wide">
          Diseñamos espacios con identidad propia. Llevamos el concepto de revestimiento y cielo raso a un nuevo nivel de impacto visual.
        </p>
        
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal md:font-medium text-neutral-900 leading-snug tracking-tight mt-auto lg:mt-0 mb-8 md:mb-12 lg:mb-16">
          <FoldText
            text="“Paredes y acabados con carácter. Transformamos muros convencionales en piezas arquitectónicas que imponen estilo y elegancia.”"
            splitBy="word"
            hinge="top"
            trigger="scroll"
            duration={0.8}
            stagger={0.03}
            ease="power3.out"
            perspective={700}
            creaseShading={0.55}
            fontSize="inherit"
            fontWeight="inherit"
            color="inherit"
          />
        </h3>
      </div>

      {/* Columna Derecha (Fotografía Sangrada al Ras) */}
      <div className="relative w-full h-[400px] lg:h-full overflow-hidden">
        <img 
          src="https://res.cloudinary.com/llcon56b/image/upload/f_auto,q_auto/v1788047358/imagen-paredes.jpg" 
          alt="Acabados arquitectónicos y estéticos modernos" 
          className="w-full h-full object-cover"
        />
      </div>
      
    </section>
  );
}
