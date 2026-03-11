import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, FlaskConical, Users, Lightbulb } from 'lucide-react';

export const ResearchView = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="flex flex-col pb-12"
    >
      <section className="px-4 py-10">
        <div className="flex flex-col gap-6">
          <div 
            className="w-full aspect-[16/9] rounded-xl bg-cover bg-center overflow-hidden shadow-lg" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBb9Kvm34nE3TXPKWlZ1Z-y3Xuje1sFkcy1_hLGFLQlO-kU7BUOj4SUt3wqD0bZHTl8XuPiYCTfC930qC0avmho-0rDRLoJ9RkWomAg1Tzf-Dp3gVo4tPyJ1CUBo1ro3SxCMFwikTpE5I5dV_gQ-y2lIlJC13WPvspFn-xQe35zYa-buMMbFnjMhVKpnCPzRlWeYvGosWFtYBieGkLVTtXTfvMes_4xtxNWhnhYqClP-FsmtFMHttGLG-SP69r74GivEnfLv2MDlvo')" }}
          />
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-900">
              Investigação na UA
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              Inovação e excelência na vanguarda do conhecimento global. Transformamos desafios em soluções sustentáveis para o futuro.
            </p>
            <div className="flex gap-3 pt-2">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary text-white font-bold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20"
              >
                Explorar Projetos
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-10 px-4">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">Impacto em Números</h2>
        <div className="grid grid-cols-1 gap-4">
          <StatCard 
            icon={<FlaskConical size={24} />} 
            value="+20" 
            label="Unidades de I&D" 
            description="Centros de excelência reconhecidos internacionalmente." 
          />
          <StatCard 
            icon={<Users size={24} />} 
            value="500+" 
            label="Investigadores" 
            description="Mentes brilhantes dedicadas à descoberta científica." 
          />
          <StatCard 
            icon={<Lightbulb size={24} />} 
            value="+200" 
            label="Projetos Ativos" 
            description="Iniciativas de alto impacto em diversas áreas." 
          />
        </div>
      </section>

      <section id="projects" className="px-4 py-10">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-black text-slate-900">Projetos em Destaque</h2>
            <p className="text-slate-500 text-sm">Conheça as nossas áreas de intervenção</p>
          </div>
          <button className="text-primary font-bold text-sm">Ver Todos</button>
        </div>
        <div className="flex flex-col gap-8">
          <ProjectCard 
            category="Sustentabilidade"
            title="Energia das Marés: O Futuro do Litoral Português"
            description="Desenvolvimento de novos sistemas de captação de energia oceânica adaptados à costa de Aveiro."
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuCHFmsdStFOK-y8C2OyqR1TnND_lxuz06RgIBRVT5QezeZKOxY7rNIbxNK2yaJsXJPHNbktHvw_ZZqhGzjIs8MQg1EW37wDz7BC8tIUnK2WjgfRUHuujATA_pkGia4e_rLvC6HobvmVRYlVBgUvM4Rr2vUiYQqquFmC1v3eR-2rwvas2LtEVZvzPctJOOOu6eOWE-xzUoUcXpoVATjAyokZpOU6b8uCPZsIVHveRJxsva4tw5EvZk4KJyUwkwkdz54gKY5ouGfn_6c"
          />
          <ProjectCard 
            category="Nanotecnologia"
            title="Materiais Inteligentes para a Medicina Regenerativa"
            description="Criação de nano-estruturas bio-inspiradas para acelerar a recuperação de tecidos ósseos."
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuDIfjuSri9q5hhaNETV-K5bBqPnXq8Xf0CZtR0m3PHQfD5qeYslMOxHkx9teTbVujLE1FX-I9EAwwu_OV4OTmPEPDoggis8qfEwAfBS2h_vucXbOJ7iUpfBGnj0Gzv_pQpkea8tjGJTI76UtVeqcDRGz-6DxcxXj7iVi1aWYtwqpVmbBUBen8njZv9ZfHV9bPM0uD4P1wbEDkDIpdM8h8gQaWlU6YJq7cPPvo7xriXOPfaLvkwXM1cB7DmhZ1ywurk3IyOqvFgiPmM"
          />
        </div>
      </section>
    </motion.div>
  );
};

const StatCard = ({ icon, value, label, description }: { icon: React.ReactNode, value: string, label: string, description: string }) => (
  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-1">
    <div className="text-primary mb-2">{icon}</div>
    <span className="text-primary text-4xl font-black">{value}</span>
    <span className="text-slate-700 font-semibold text-lg">{label}</span>
    <p className="text-slate-500 text-sm">{description}</p>
  </div>
);

const ProjectCard = ({ category, title, description, image }: { category: string, title: string, description: string, image: string }) => (
  <div className="group cursor-pointer">
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        referrerPolicy="no-referrer"
      />
      <div className="absolute top-4 left-4">
        <span className="bg-primary text-white text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-wider">
          {category}
        </span>
      </div>
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-2 leading-snug group-hover:text-primary transition-colors">
      {title}
    </h3>
    <p className="text-slate-600 text-sm line-clamp-2">
      {description}
    </p>
  </div>
);
