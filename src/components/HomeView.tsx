import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const HomeView = ({ onNavigate }: { onNavigate: (view: any) => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="flex flex-col"
    >
      {/* Hero Section */}
      <section className="relative h-[480px] w-full flex flex-col items-center justify-center text-center p-6 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBK7ZiEzPfWwc3ZSlNkNw1OPeRbhWzI6f9MXEd2o0jdez4DAsaqSydk__I7VquJ1_Ieo6aD08ofChCaqSSBCQDI1Kl6MBmBewW2UGOhEmD7HRG1X3-2dsf4p5RnEwgIcJPGyzWAuagK9t6ysHuZk2XQKv0LhEbHGy7jwKEqrSYIGpIL3ed_7lMSfv_ur_jR3JoJIob8Iv_ZJwaZzVhIM-0BC7C7BwPvJQa8T6U0AXIZ4QSSuusBe4wRCr73Ph2KTt-Ql3xIqRkLKVM')" 
          }}
        />
        <div className="relative z-10 max-w-md">
          <h1 className="text-white text-4xl font-black leading-tight tracking-tight mb-4">
            Inovação e Conhecimento para o Futuro
          </h1>
          <p className="text-white/90 text-base mb-8 font-medium">
            Explore os nossos cursos e investigação de excelência internacional.
          </p>
          <div className="flex flex-col gap-3">
            <button 
              onClick={() => onNavigate('research')}
              className="bg-primary text-white font-bold py-3 px-8 rounded-lg text-base hover:bg-primary-hover transition-colors"
            >
              Saber mais
            </button>
            <button 
              onClick={() => onNavigate('courses')}
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg text-base hover:bg-white/10 transition-colors"
            >
              Nossos Cursos
            </button>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black mb-8 border-l-4 border-primary pl-4">Nossos Cursos</h2>
          <div className="grid grid-cols-1 gap-8">
            <CourseCard 
              title="Licenciaturas" 
              description="Formação de base sólida e diversificada." 
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuBCG-pMTguIThqQ5mybtwTat4uqK9uBqG9MRvGj1UQNm-BbZZaapdEgOCsJSOOuN0U8Tr6zUGMBsKjOdnxIZVnPCbYf2xPAXhVEAHgM1a5hk2mpmThIVhJ-TDNA0gZzoO1NbEyGcPAd0OrWT_cAT7MhvZW-5feZcAVOuHmyJdEGAU-SRzeHKZUXxXhzRZXd0RLz_nb9fxZs-_stjD4qb0Dr2SsALzeeAYBpLVtuHisXNqtk61Q9zMW1hv7a9vtlO4SDFVimq7-1vSM"
              onClick={() => onNavigate('courses')}
            />
            <CourseCard 
              title="Mestrados" 
              description="Especialização avançada e técnica." 
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuCdemh_28-QSIDG4AFwgQ3IANgMx4JDh-Wgqx6v6YUtDv8pthu7ezikgsR4kRz9_pA98G3SXdVIr9yTl2DIgrcyceSQHLRsxJdwRKuQyYKwoHOLqRsX_C0EzSZNOX2f5jn3IF9LXzi_csg0eK-uoyuzXkNukZQBTJl4y-Ms2urItC2CeyyRKDzyQymNEeu_1agb9yP13q-72aIk9Y_Lk2WcveWnluEdKnX24j8Rar1ZxWogJSTSuTcO-3kbLH-0ZJfvNSrlcoWS9AY"
              onClick={() => onNavigate('courses')}
            />
            <CourseCard 
              title="Doutoramentos" 
              description="Investigação de ponta e inovação." 
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuD_WEPNMVCEwXME32bsXogEaEiUcPecl2AsuOvcyqc7w2kMEM68YqRQ7uDQCluHhB_JPje2_Y7GClZMcBqEnJHOXBvi287bb42Qm2oUtvdPGGAnjC73vwWbv_fmGbpDeolZhVEPKbFmgnrhJbLasKv980PZwNOBW5fpFDa5FNpPsYUJqHxabBMkU376O5eb-3j6tgE3QLDpbYoindLBP3lFpyBRsXtI_L2Y1wZOGO12HhcaJkYIroX63j31minyHqJonn2o1oTC12k"
              onClick={() => onNavigate('courses')}
            />
          </div>
        </div>
      </section>

      {/* Research Stats Section */}
      <section className="py-12 px-4 bg-primary/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-sm font-black uppercase tracking-widest text-primary mb-10">Investigação de Impacto</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-black text-primary mb-2">+200</span>
              <span className="text-[10px] font-bold uppercase text-slate-600">Projetos Ativos</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-black text-primary mb-2">+500</span>
              <span className="text-[10px] font-bold uppercase text-slate-600">Investigadores</span>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black border-l-4 border-primary pl-4">Notícias</h2>
            <button 
              onClick={() => onNavigate('news')}
              className="text-primary text-sm font-bold flex items-center gap-1"
            >
              Ver todas <ArrowRight size={16} />
            </button>
          </div>
          <div className="space-y-8">
            <NewsItem date="15 Out 2023" title="UAveiro lidera novo consórcio europeu de sustentabilidade marítima" />
            <NewsItem date="12 Out 2023" title="Novo centro de computação avançada inaugurado no Campus" />
            <NewsItem date="08 Out 2023" title="Estudantes de design vencem prémio internacional de inovação" />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const CourseCard = ({ title, description, image, onClick }: { title: string, description: string, image: string, onClick: () => void }) => (
  <div onClick={onClick} className="group flex flex-col gap-3 cursor-pointer">
    <div 
      className="w-full aspect-video bg-cover bg-center rounded-xl shadow-sm overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]" 
      style={{ backgroundImage: `url('${image}')` }}
    />
    <div>
      <p className="text-lg font-bold group-hover:text-primary transition-colors">{title}</p>
      <p className="text-slate-500 text-sm">{description}</p>
    </div>
  </div>
);

const NewsItem = ({ date, title }: { date: string, title: string }) => (
  <article className="group cursor-pointer">
    <p className="text-slate-500 text-[10px] font-bold mb-1 uppercase tracking-tighter">{date}</p>
    <h3 className="text-lg font-bold leading-snug group-hover:underline decoration-primary decoration-2 underline-offset-4">
      {title}
    </h3>
  </article>
);
