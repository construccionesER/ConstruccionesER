import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SplitText from './SplitText';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const FadeUp = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  
  useGSAP(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          once: true,
        }
      }
    );
  }, { scope: ref });

  return <div ref={ref} className={className}>{children}</div>;
};

function AboutSection() {
  return (
    <section id="nosotros" className="w-full bg-white py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-8 items-stretch">
        
        {/* Bloque 1: ¿Quiénes Somos? */}
        <div className="lg:col-span-4 flex flex-col justify-between order-1">
          <div className="flex flex-col">
            <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-2">
              Sobre Nosotros
            </span>
            <SplitText
              text="¿Quiénes somos?"
              tag="h2"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-3"
              delay={30}
              duration={1}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="left"
            />
            <FadeUp delay={0.3} className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Somos especialistas en acabados arquitectónicos, dedicados a transformar espacios con soluciones de cielo rasos de la más alta calidad. Nuestro enfoque combina estética, durabilidad y funcionalidad para crear ambientes excepcionales.
            </FadeUp>
          </div>

          <FadeUp delay={0.4} className="w-full hidden lg:block">
            <img 
              src="https://res.cloudinary.com/llcon56b/image/upload/f_auto,q_auto/v1788047362/local2.jpg" 
              alt="Instalaciones y acabados Construcciones E.R" 
              className="w-full h-48 object-cover rounded-2xl shadow-sm mt-6"
            />
          </FadeUp>
        </div>

        {/* Bloque 2: Imagen Principal */}
        <div className="lg:col-span-4 w-full h-64 sm:h-80 lg:h-full min-h-[260px] lg:min-h-[480px] overflow-hidden rounded-2xl shadow-md order-2">
          <img 
            src="https://res.cloudinary.com/llcon56b/image/upload/f_auto,q_auto/v1788047353/local.jpg" 
            alt="Instalación de cielo raso" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bloque 3: Misión y Visión */}
        <div className="lg:col-span-4 flex flex-col justify-center space-y-6 lg:space-y-8 pt-4 lg:pt-0 border-t border-neutral-200 lg:border-t-0 order-3">
          
          {/* Misión */}
          <div>
            <div className="w-8 h-1 bg-red-600 rounded-full mb-2"></div>
            <SplitText
              text="Nuestra Misión"
              tag="h3"
              className="text-lg sm:text-xl font-bold text-neutral-900 mb-1.5"
              delay={30}
              duration={1}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="left"
            />
            <FadeUp delay={0.3} className="text-sm text-neutral-600 leading-relaxed">
              Proporcionar soluciones arquitectónicas innovadoras y de máxima calidad en acabados, superando las expectativas de nuestros clientes y garantizando espacios modernos, elegantes y confortables.
            </FadeUp>
          </div>

          {/* Visión */}
          <div>
            <div className="w-8 h-1 bg-red-600 rounded-full mb-2"></div>
            <SplitText
              text="Nuestra Visión"
              tag="h3"
              className="text-lg sm:text-xl font-bold text-neutral-900 mb-1.5"
              delay={30}
              duration={1}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="left"
            />
            <FadeUp delay={0.4} className="text-sm text-neutral-600 leading-relaxed">
              Ser la empresa líder y referente a nivel nacional en la instalación y diseño de cielo rasos, destacando por nuestra constante innovación tecnológica, compromiso con la excelencia y el buen servicio.
            </FadeUp>
          </div>
          
        </div>

      </div>
    </section>
  );
}

export default AboutSection;
