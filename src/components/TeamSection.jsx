import React from 'react';
import { motion } from 'framer-motion';
import TextReveal from './ui/TextReveal';

export default function TeamSection() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white py-24 md:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden border-t border-neutral-900">
      
      {/* Texto gigante de fondo (Watermark tipográfico) */}
      <div 
        className="text-[15vw] font-black uppercase text-transparent select-none pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 tracking-tighter leading-none z-0"
        style={{ WebkitTextStroke: '1px rgba(255,255,255,0.04)' }}
      >
        EQUIPO
      </div>

      {/* Encabezado Asimétrico */}
      <div className="relative z-10 max-w-7xl mx-auto mb-12 md:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
        {/* Lado Izquierdo */}
        <div className="lg:col-span-7">
          <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-white uppercase mb-4 block">
            <span className="text-red-600">[</span> NUESTRO EQUIPO <span className="text-red-600">]</span>
          </span>
          <TextReveal 
            as="h2"
            text="Detrás de cada acabado impecable, hay un equipo apasionado." 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]"
            justifyContent="flex-start" 
          />
        </div>

        {/* Lado Derecho */}
        <div className="lg:col-span-5">
          <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-md lg:ml-auto">
            No solo instalamos cielo rasos; coordinamos manos expertas, precisión técnica y un compromiso inquebrantable para materializar el espacio que imaginaste.
          </p>
        </div>
      </div>

      {/* Enmarcado Fotográfico Panorámico */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="relative w-full">
          
          {/* Esquineros técnicos */}
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t border-l border-neutral-600 z-20 pointer-events-none" />
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t border-r border-neutral-600 z-20 pointer-events-none" />
          <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b border-l border-neutral-600 z-20 pointer-events-none" />
          <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b border-r border-neutral-600 z-20 pointer-events-none" />

          {/* Contenedor Animado de la Imagen */}
          <div className="w-full h-[320px] sm:h-[450px] md:h-[550px] overflow-hidden rounded-none border border-neutral-800 relative">
            
            {/* Imagen Principal con Zoom y Brillo */}
            <motion.img 
              initial={{ scale: 1.15, filter: 'brightness(0.3) contrast(1.2)' }}
              whileInView={{ scale: 1, filter: 'brightness(1) contrast(1)' }}
              transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, amount: 0.3 }}
              src="https://res.cloudinary.com/llcon56b/image/upload/f_auto,q_auto/v1788047352/equipo.jpg" 
              alt="Equipo de Construcciones ER en obra" 
              className="w-full h-full object-cover origin-center"
            />
            
            {/* Cortina / Shutter Revelador (desliza de izquierda a derecha) */}
            <motion.div 
              className="absolute top-0 right-0 bottom-0 bg-[#0a0a0a] z-10"
              initial={{ width: "100%" }}
              whileInView={{ width: "0%" }}
              transition={{ duration: 1.4, ease: [0.85, 0, 0.15, 1], delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            />
            
            {/* Línea de escaneo láser roja */}
            <motion.div 
              className="absolute top-0 bottom-0 w-[2px] bg-red-600 z-20 shadow-[0_0_15px_rgba(220,38,38,0.8)]"
              initial={{ left: "0%", opacity: 1 }}
              whileInView={{ left: "100%", opacity: 0 }}
              transition={{ 
                left: { duration: 1.4, ease: [0.85, 0, 0.15, 1], delay: 0.1 },
                opacity: { duration: 0.2, delay: 1.4 }
              }}
              viewport={{ once: true, amount: 0.3 }}
            />
          </div>
        </div>

        {/* Barra de Pilares de Trabajo */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-x border-b border-neutral-800 divide-y md:divide-y-0 md:divide-x divide-neutral-800 bg-[#0d0d0d]">
          
          {/* Columna 1 */}
          <div className="p-6 lg:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-red-500 mb-4 block">/ 01</span>
              <h3 className="text-base font-bold text-white mb-2">Mano de Obra Calificada</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Personal certificado con años de experiencia en perfilería y encastre de PVC.
              </p>
            </div>
          </div>

          {/* Columna 2 */}
          <div className="p-6 lg:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-red-500 mb-4 block">/ 02</span>
              <h3 className="text-base font-bold text-white mb-2">Atención al Detalle</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Supervisión rigurosa en cada corte, nivel y remate para garantizar acabados rectos y limpios.
              </p>
            </div>
          </div>

          {/* Columna 3 */}
          <div className="p-6 lg:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-red-500 mb-4 block">/ 03</span>
              <h3 className="text-base font-bold text-white mb-2">Trato Humano y Cercano</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Comunicación directa y cumplimiento estricto de tiempos de entrega en tu hogar o negocio.
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
