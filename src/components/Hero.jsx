import { motion } from 'framer-motion';
import TextReveal from './ui/TextReveal';

function Hero() {
  return (
    <main className="relative w-full h-[100dvh] min-h-[600px] md:h-auto md:min-h-screen flex flex-col justify-end p-6 pb-16 sm:pb-20 md:p-0 overflow-hidden bg-[#FBF9F5]">
      
      {/* Animated Background and Gradient (All devices) */}
      <motion.div
        className="absolute z-0 overflow-hidden"
        initial={{ 
          top: "3rem",
          left: "1.5rem",
          width: "9rem",
          height: "12rem",
          borderRadius: "0.5rem"
        }}
        animate={{ 
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderRadius: 0
        }}
        transition={{ 
          duration: 1.6, 
          ease: [0.16, 1, 0.3, 1] 
        }}
      >
        <img 
          src="https://res.cloudinary.com/llcon56b/image/upload/f_auto,q_auto/v1788047355/foto1.avif" 
          alt="Hero background" 
          className="w-full h-full object-cover brightness-[0.50]" 
        />
        <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none"></div>
      </motion.div>

      {/* Desktop Container (Hidden on Mobile) */}
      <div className="hidden md:flex w-full px-4 sm:px-8 pb-8 md:pb-12 lg:pb-16 flex-col items-start text-left select-none relative z-20">
        <TextReveal 
          as="h1"
          text="CIELO RASOS EN PVC" 
          delay={1.1}
          className="text-white font-['Impact'] uppercase leading-[0.85] text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[8.5vw] drop-shadow-[0_5px_10px_rgba(0,0,0,0.8)] w-full"
          justifyContent="flex-start" 
        />
        <TextReveal 
          as="div"
          text="CONSTRUCCIONES E.R" 
          delay={1.4}
          className="text-[#dc2626] font-['Impact'] uppercase leading-[0.85] text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[8.5vw] drop-shadow-[0_5px_10px_rgba(0,0,0,0.8)] w-full"
          justifyContent="flex-start" 
        />
      </div>

      {/* Mobile Clean Title (Hidden on Desktop) */}
      <motion.div 
        className="md:hidden relative z-20 max-w-sm text-left"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-2xl sm:text-3xl font-medium tracking-tight text-white leading-snug">
          Cielo rasos y acabados que elevan tus espacios.
        </h1>
      </motion.div>
    </main>
  );
}

export default Hero;
