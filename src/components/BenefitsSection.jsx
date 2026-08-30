import React from 'react';
import { Timeline } from './ui/timeline';
import { motion } from 'framer-motion';

export default function BenefitsSection() {
  const data = [
    {
      title: (
        <div className="flex items-center gap-4">
          <span className="-rotate-90 text-xs tracking-widest text-neutral-500 uppercase whitespace-nowrap block w-4 h-4">Beneficio</span>
          <span className="text-6xl md:text-8xl font-bold text-transparent stroke-white stroke-1 [-webkit-text-stroke:1px_white]">/01</span>
        </div>
      ),
      content: (
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex flex-col flex-1">
            <h4 className="text-2xl md:text-4xl font-bold text-white mb-4">Cero propagación de llama.</h4>
            <p className="text-neutral-400 max-w-lg mb-6">
              El PVC es un material autoextinguible que no contribuye a la propagación del fuego, ofreciendo un nivel extra de seguridad para cualquier espacio.
            </p>
            <div className="flex flex-row gap-4 text-sm text-neutral-300">
              <span>✓ Seguro</span>
              <span>✓ Confiable</span>
              <span>✓ Autoextinguible</span>
            </div>
          </div>
          <div className="relative w-full md:w-1/2 h-64 md:h-auto md:min-h-[250px] rounded-xl overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-neutral-950 to-transparent z-10" />
            <img src="https://res.cloudinary.com/llcon56b/image/upload/f_auto,q_auto/v1788047381/lamina-resistente.jpg" alt="Cero propagación de llama" className="w-full h-full object-cover" />
          </div>
        </div>
      )
    },
    {
      title: (
        <div className="flex items-center gap-4">
          <span className="-rotate-90 text-xs tracking-widest text-neutral-500 uppercase whitespace-nowrap block w-4 h-4">Beneficio</span>
          <span className="text-6xl md:text-8xl font-bold text-transparent stroke-white stroke-1 [-webkit-text-stroke:1px_white]">/02</span>
        </div>
      ),
      content: (
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex flex-col flex-1">
            <h4 className="text-2xl md:text-4xl font-bold text-white mb-4">Resistencia a la humedad.</h4>
            <p className="text-neutral-400 max-w-lg mb-6">
              Totalmente inmune al agua y la humedad. No se pudre, no se oxida y previene eficazmente la formación de hongos y bacterias.
            </p>
            <div className="flex flex-row gap-4 text-sm text-neutral-300">
              <span>✓ Durabilidad</span>
              <span>✓ Higiénico</span>
              <span>✓ Inoxidable</span>
            </div>
          </div>
          <div className="relative w-full md:w-1/2 h-64 md:h-auto md:min-h-[250px] rounded-xl overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-neutral-950 to-transparent z-10" />
            <img src="https://res.cloudinary.com/llcon56b/image/upload/f_auto,q_auto/v1788047395/lamina-agua.jpg" alt="Resistencia a la humedad" className="w-full h-full object-cover" />
          </div>
        </div>
      )
    },
    {
      title: (
        <div className="flex items-center gap-4">
          <span className="-rotate-90 text-xs tracking-widest text-neutral-500 uppercase whitespace-nowrap block w-4 h-4">Beneficio</span>
          <span className="text-6xl md:text-8xl font-bold text-transparent stroke-white stroke-1 [-webkit-text-stroke:1px_white]">/03</span>
        </div>
      ),
      content: (
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex flex-col flex-1">
            <h4 className="text-2xl md:text-4xl font-bold text-white mb-4">Instalación rápida y limpia.</h4>
            <p className="text-neutral-400 max-w-lg mb-6">
              El sistema de encastre permite un montaje ágil y preciso sin generar escombros, reduciendo drásticamente los tiempos de obra.
            </p>
            <div className="flex flex-row gap-4 text-sm text-neutral-300">
              <span>✓ Ágil</span>
              <span>✓ Sin escombros</span>
              <span>✓ Precisión</span>
            </div>
          </div>
          <div className="relative w-full md:w-1/2 h-64 md:h-auto md:min-h-[250px] rounded-xl overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-neutral-950 to-transparent z-10" />
            <img src="https://res.cloudinary.com/llcon56b/image/upload/f_auto,q_auto/v1788047386/instalacion-rapida.jpg" alt="Instalación rápida" className="w-full h-full object-cover" />
          </div>
        </div>
      )
    },
    {
      title: (
        <div className="flex items-center gap-4">
          <span className="-rotate-90 text-xs tracking-widest text-neutral-500 uppercase whitespace-nowrap block w-4 h-4">Beneficio</span>
          <span className="text-6xl md:text-8xl font-bold text-transparent stroke-white stroke-1 [-webkit-text-stroke:1px_white]">/04</span>
        </div>
      ),
      content: (
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex flex-col flex-1">
            <h4 className="text-2xl md:text-4xl font-bold text-white mb-4">Aislamiento acústico y térmico.</h4>
            <p className="text-neutral-400 max-w-lg mb-6">
              La estructura alveolar de los paneles actúa como una cámara de aire, mejorando significativamente el confort térmico y acústico del ambiente.
            </p>
            <div className="flex flex-row gap-4 text-sm text-neutral-300">
              <span>✓ Confort</span>
              <span>✓ Silencio</span>
              <span>✓ Eficiencia</span>
            </div>
          </div>
          <div className="relative w-full md:w-1/2 h-64 md:h-auto md:min-h-[250px] rounded-xl overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-neutral-950 to-transparent z-10" />
            <img src="https://res.cloudinary.com/llcon56b/image/upload/f_auto,q_auto/v1788047355/lamina-termica.jpg" alt="Aislamiento" className="w-full h-full object-cover" />
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="bg-neutral-950 text-white w-full">
      {/* SECCIÓN: NUESTRO ENFOQUE (Mobile) */}
      <div className="md:hidden w-full bg-[#0a0a0a] text-white py-14 px-6 sm:px-8 flex flex-col items-start gap-6">
        <span className="text-xs font-mono font-semibold tracking-[0.25em] text-white uppercase block">
          <span className="text-red-600">[</span> NUESTRO ENFOQUE <span className="text-red-600">]</span>
        </span>
        
        <div className="w-full max-w-2xl text-left flex flex-wrap justify-start items-baseline gap-x-2 gap-y-1">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.05 }}
            className="flex flex-wrap justify-start text-left text-2xl sm:text-3xl md:text-5xl font-medium leading-snug tracking-tight text-white gap-x-2 gap-y-1"
          >
            {"Elevamos el estándar de tus ambientes con acabados arquitectónicos de excelencia.".split(" ").map((word, index, arr) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
                }}
                className="inline-block"
              >
                {index === 0 ? `"${word}` : index === arr.length - 1 ? `${word}"` : word}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <div className="flex items-center gap-2.5 pt-2 text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> FILOSOFÍA DE TRABAJO
        </div>
      </div>

      {/* SECCIÓN: NUESTRO ENFOQUE (Desktop) */}
      <div className="hidden md:block w-full max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="mb-8 block">
          <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-white uppercase block">
            <span className="text-red-600">[</span> NUESTRO ENFOQUE <span className="text-red-600">]</span>
          </span>
        </div>
        
        <div className="w-full max-w-6xl mx-auto flex flex-col">
          <div className="w-full text-center mb-1 md:mb-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-tight flex flex-wrap justify-center">
              {'"Elevamos el estándar de tus ambientes'.split(" ").map((word, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </h2>
          </div>
          <div className="w-full text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-tight flex flex-wrap justify-start">
              {'con acabados arquitectónicos de excelencia."'.split(" ").map((word, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 + (idx * 0.1) }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-3 justify-center md:justify-start mt-12">
          <div className="w-2 h-2 bg-neutral-600"></div>
          <span className="text-xs font-semibold tracking-[0.2em] text-neutral-400 uppercase">
            FILOSOFÍA DE TRABAJO
          </span>
        </div>
      </div>

      {/* LÍNEA SEPARADORA SUTIL */}
      <div className="w-full border-t border-red-600"></div>

      {/* SECCIÓN: BENEFICIOS (Timeline) */}
      <div className="w-full py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:justify-between items-start md:items-end gap-8 mb-10">
            <div className="flex flex-col">
              <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-white uppercase mb-4 block">
                <span className="text-red-600">[</span> ¿POR QUÉ ELEGIR PVC? <span className="text-red-600">]</span>
              </span>
              <h2 className="text-5xl md:text-7xl font-bold max-w-2xl text-white">
                Beneficios claros para espacios modernos.
              </h2>
            </div>
            <p className="text-neutral-400 max-w-sm text-left md:text-right">
              Nuestros paneles de PVC ofrecen una solución integral que combina estética, durabilidad y facilidad de instalación, superando a los materiales tradicionales.
            </p>
          </div>
        </div>
        <Timeline data={data} />
      </div>
    </section>
  );
}
