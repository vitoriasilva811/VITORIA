import React from 'react';
import { motion } from 'motion/react';
import { Home, Library, Trophy, MapPin } from 'lucide-react';

export const CampusView = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="flex flex-col pb-12"
    >
      <section className="relative min-h-[400px] flex flex-col gap-6 items-center justify-center p-6 text-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBuMvOVNfkAPWBOwEhMB9yTIL5SfHS4W-sN1-JOOSE54L2OI3-ykEeA2QSvKz7ddyNmxT_dlCnta5VX2IZWSGhi7L2Q6SwRMhbXekPvNPnqwffZUz5DU7rxtAOQioLEmiPOIKAb3rvIrrpOR7a7NIgl_2RKq9vSdKHuUewLf-ZGDNf8KlpNrKRooGCN940Rn6qbk1Nf3an4THqKBacTDn2PkDz8jliddOdb78Z5dtL4J0GQJ9BDqRcVNquXfCqY0cIKuPLVnWgBY_s')" 
          }}
        />
        <div className="relative z-10 flex flex-col gap-3">
          <h1 className="text-white text-5xl font-black leading-tight tracking-tight">
            Viver a UA
          </h1>
          <p className="text-white/90 text-base font-normal max-w-md mx-auto">
            Descobre o campus e a vida académica vibrante na Universidade de Aveiro.
          </p>
        </div>
        <button className="relative z-10 flex min-w-[140px] cursor-pointer items-center justify-center rounded-full h-12 px-6 bg-primary text-white text-base font-bold shadow-lg hover:bg-primary-hover transition-colors">
          Saber mais
        </button>
      </section>

      <section className="px-4 py-8 space-y-10">
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">Campus e Vida Académica</h2>
        
        <HighlightCard 
          icon={<Home size={20} />} 
          title="Residências" 
          description="Alojamento confortável e próximo das faculdades, promovendo a integração de todos os estudantes."
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuC6sQFkEKFs-DvYp5T_BZrEvNeUtGyPeE16jkdE_Jk31EuGdZpBTDB0rSNYnwxAPlSPa24_BKcjgKCBTJwOXbHJD7IkLtl7a9ZnmrfnnN4EHscuCScGCmbG-82-mHkYXNWYd7y1wSvZma7nc6c1I7HSkiTA_t4AO-YVb51VgXwKv5uneld_PmU-4F39H6UjSRtp50NyY0h5quPIZ5nz9MXtczhBuCasOGZqsT139sVary7OofmuhLcjEhTdfdIM1RNmqrBUvsuIrZQ"
          buttonText="Explorar"
        />

        <HighlightCard 
          icon={<Library size={20} />} 
          title="Bibliotecas" 
          description="Espaços amplos e silenciosos equipados com os mais recentes recursos digitais e físicos para estudo."
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuANj_y4uyGpCH0Rn4KikK2zgyK2hns5o1hQ0DQvfZH_nurPbGbTHMtVL3psBMjCnWZjpK8vsknXlY3SOWWG09iY_6PeZgsZc43snov7f6bt0mEzhBb6Ki17oWyzYk9dOc9Q5WuvAUyjmcWijGjeamB0eJVQVHEk8AOzoESLeS88byG1JUGNc_b7ymNw7BmKpDqE04TuclN-x1xOUaIAWLef5xz6gXAXkoOCcefy7gj8rmkXe-LpmcYvchUT6bX54Hm38a3Yp1grEAY"
          buttonText="Visitar"
        />

        <HighlightCard 
          icon={<Trophy size={20} />} 
          title="Desporto" 
          description="Promovemos um estilo de vida saudável com pavilhões, campos exteriores e ginásios de última geração."
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuBKEQjnSF-j7hnMwQ0cTVZf9mWtupNQycLHe4wQ5ZJh18w7odqgscBOrDYc_vIRYfI80lHTFAVAsY3Kn-E3AlnhfXJ0GZPKb8RUamWksHxPI1uACgW_eSkEzFQ9A4pQApIbwxHE3ZmBsmhiscS_xRZziguBf1SdQrVi0ERXDyQ24t6tkOz24eJzc5MG38Fjl3Nh-88csD3cv4psCAbsSAV5ikiZh3h0_NlMIU5dp16uAPyTTmQLShTCTRpexcn_UI1rHbvG8REO8ag"
          buttonText="Participar"
        />
      </section>

      <section className="bg-white py-10 px-4">
        <h2 className="text-2xl font-extrabold tracking-tight mb-6">Mapa do Campus</h2>
        <div className="relative w-full h-[350px] bg-slate-100 rounded-2xl overflow-hidden shadow-inner border border-slate-200">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 grayscale" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBzsYVxevZF-z6laKvaskoZr9bm_JrpqarrzetoV7CZCrrnclbPY6dSgLOryoAQvr4Tc_uuCHb4xwhPwc1_gatCPuaVbpENU1x-h3nNH8XM-rutg8UF_ZdsBE5gwE8WNvgNL7gDP92Je50lg9et-5hzm8yTvfygyXs9YDSzMVTs8p1UxrkijJe3VkWr0cNw3E6LFzfpv9ThZn6om6HjxRmZNXgCNRv-W0Pth94LdgLAT7E4PwoQPQrnpsyk3Cmt2XXkis8DvIhBtCI')" }}
          />
          
          <MapMarker top="25%" left="33%" label="Reitoria" />
          <MapMarker bottom="33%" right="25%" label="Biblioteca" />
          <MapMarker top="50%" left="50%" label="Cantina" />

          <div className="absolute bottom-4 left-4 right-4 bg-white/90 p-4 rounded-xl border border-slate-200 backdrop-blur-sm">
            <p className="text-sm font-semibold mb-1">Explore o Campus de Santiago</p>
            <p className="text-xs text-slate-500">Toque nos marcadores para ver detalhes de cada edifício.</p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const HighlightCard = ({ icon, title, description, image, buttonText }: { icon: React.ReactNode, title: string, description: string, image: string, buttonText: string }) => (
  <div className="flex flex-col gap-4 group">
    <div 
      className="w-full aspect-video bg-cover bg-center rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-[1.01]" 
      style={{ backgroundImage: `url("${image}")` }}
    />
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 text-primary">
        {icon}
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      </div>
      <p className="text-slate-600 text-base leading-relaxed">
        {description}
      </p>
      <button className="w-max mt-2 px-6 py-2 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/5 transition-colors active:scale-[0.98]">
        {buttonText}
      </button>
    </div>
  </div>
);

const MapMarker = ({ top, left, bottom, right, label }: { top?: string, left?: string, bottom?: string, right?: string, label: string }) => (
  <div className="absolute group" style={{ top, left, bottom, right }}>
    <MapPin className="text-primary w-10 h-10 cursor-pointer drop-shadow-md" />
    <div className="bg-white px-2 py-1 rounded shadow text-[10px] font-bold mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
      {label}
    </div>
  </div>
);
