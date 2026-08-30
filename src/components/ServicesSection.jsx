import AccordionGallery from './ui/AccordionGallery';

export default function ServicesSection() {
  const services = [
    {
      title: "Cielo Raso en PVC",
      image: "https://res.cloudinary.com/llcon56b/image/upload/f_auto,q_auto/v1788047324/Pvc.webp"
    },
    {
      title: "Cielo Raso en PVC",
      image: "https://res.cloudinary.com/llcon56b/image/upload/f_auto,q_auto/v1788047347/pvc3.jpg"
    },
    {
      title: "Panel WPC",
      image: "https://res.cloudinary.com/llcon56b/image/upload/f_auto,q_auto/v1788047353/wpc3.jpg"
    },
    {
      title: "Panel WPC",
      image: "https://res.cloudinary.com/llcon56b/image/upload/f_auto,q_auto/v1788047350/wpc5.webp"
    },
    {
      title: "Lamina Marmol V",
      image: "https://res.cloudinary.com/llcon56b/image/upload/f_auto,q_auto/v1788047322/Marmol2.webp"
    },
    {
      title: "Lamina Marmol V",
      image: "https://res.cloudinary.com/llcon56b/image/upload/f_auto,q_auto/v1788047344/marmol3.webp"
    },
    {
      title: "Diseño Exclusivo",
      image: "https://res.cloudinary.com/llcon56b/image/upload/f_auto,q_auto/v1788047359/imagen1.jpg"
    }
  ];

  return (
    <section id="servicios" className="bg-neutral-50 md:py-24">
      
      {/* MOBILE VIEW (< md) */}
      <div className="md:hidden w-full">
        <div className="px-5 pt-8 pb-4 text-left">
          <span className="text-xs font-semibold tracking-widest text-black uppercase mb-2 block">
            <span className="text-red-600">[</span> NUESTROS SERVICIOS <span className="text-red-600">]</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight leading-tight mb-2">
            Soluciones a tu medida.
          </h2>
          <p className="text-sm text-neutral-600 leading-relaxed max-w-xs mb-6">
            "Nos adaptamos a las necesidades de cada cliente, ofreciendo acabados de máxima calidad."
          </p>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-5 pb-6 scroll-smooth no-scrollbar">
          {services.map((service, index) => (
            <div key={index} className="min-w-[55vw] sm:min-w-[40vw] max-w-[260px] snap-start flex-shrink-0 flex flex-col">
              <div className="w-full aspect-[4/5] overflow-hidden rounded-none bg-neutral-100 mb-3 shadow-sm">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="text-left pt-1">
                <span className="text-base font-medium text-neutral-900 border-b-2 border-neutral-900 pb-0.5 inline-block tracking-tight">
                  {service.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP VIEW (md: and lg:) */}
      <div className="hidden md:block max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col-reverse md:flex-row md:items-end justify-between mb-16 gap-6">
          <p className="text-neutral-600 max-w-md">
            Nos adaptamos a las necesidades de cada cliente, ofreciendo un catálogo de opciones versátiles para todo tipo de espacios.
          </p>
          <div className="max-w-2xl md:text-right flex flex-col md:items-end">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs uppercase tracking-widest font-semibold text-primary">
                Nuestros Servicios
              </span>
              <span className="w-12 h-1 bg-primary"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-anton text-neutral-900 leading-[1.1]">
              SOLUCIONES A TU MEDIDA
            </h2>
          </div>
        </div>

        <div className="w-full mt-12">
          <AccordionGallery 
            items={services.map(s => ({ image: s.image, label: s.title, alt: s.title }))}
            defaultIndex={1}
            expandRatio={0.5}
            height={460}
            accentColor="#dc2626"
            trigger="hover"
          />
        </div>
      </div>
    </section>
  );
}
