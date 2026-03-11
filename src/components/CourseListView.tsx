import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, ArrowRight } from 'lucide-react';

const COURSES = [
  { id: 1, category: 'Engenharia', title: 'Engenharia de Computadores e Telemática', description: 'O curso forma engenheiros com competências no projeto e gestão de sistemas informáticos complexos e redes de comunicações.' },
  { id: 2, category: 'Ciências', title: 'Biotecnologia', description: 'Formação focada na aplicação da ciência e tecnologia a organismos vivos, com ênfase em inovação industrial e farmacêutica.' },
  { id: 3, category: 'Design', title: 'Design de Produto', description: 'Exploração de metodologias criativas para o desenvolvimento de soluções sustentáveis e inovadoras no mercado global.' },
  { id: 4, category: 'Gestão', title: 'Economia', description: 'Estudo das dinâmicas económicas, mercados financeiros e políticas públicas num contexto de globalização constante.' },
  { id: 5, category: 'Saúde', title: 'Ciências Biomédicas', description: 'Integração de conhecimentos médicos e biológicos para a investigação e diagnóstico em ambiente clínico e laboratorial.' },
];

export const CourseListView = ({ onSelectCourse }: { onSelectCourse: (id: number) => void }) => {
  const [activeFilter, setActiveFilter] = useState('Todos');

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col pb-12"
    >
      <section className="px-4 pt-8 pb-4">
        <h1 className="text-slate-900 text-3xl font-extrabold tracking-tight leading-tight">Nossos Cursos</h1>
        <p className="mt-2 text-slate-600 text-sm">Explore a nossa vasta oferta formativa e construa o seu futuro na Universidade de Aveiro.</p>
      </section>

      <section className="px-4 py-4 space-y-4">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="text-slate-400 group-focus-within:text-primary transition-colors w-5 h-5" />
          </div>
          <input 
            className="block w-full pl-10 pr-3 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary text-sm placeholder-slate-400 outline-none" 
            placeholder="Pesquisar cursos..." 
            type="text"
          />
        </div>

        <div className="flex overflow-x-auto gap-2 pb-2 no-scrollbar">
          {['Todos', 'Licenciatura', 'Mestrado', 'Doutoramento', 'Área de Estudo'].map((filter) => (
            <button 
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`whitespace-nowrap px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                activeFilter === filter ? 'bg-primary text-white' : 'bg-white border border-slate-200 text-slate-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="px-4 py-4 grid grid-cols-1 gap-4">
        {COURSES.map((course) => (
          <div 
            key={course.id}
            onClick={() => onSelectCourse(course.id)}
            className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100 relative group cursor-pointer active:scale-[0.98] transition-transform"
          >
            <div className="h-1 bg-primary w-full"></div>
            <div className="p-5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded">
                {course.category}
              </span>
              <h3 className="mt-2 text-slate-900 font-bold text-lg leading-snug group-hover:text-primary transition-colors">
                {course.title}
              </h3>
              <p className="mt-2 text-slate-600 text-sm line-clamp-3">
                {course.description}
              </p>
              <div className="mt-4 flex items-center text-primary font-semibold text-sm gap-1">
                Saber Mais 
                <ArrowRight size={14} />
              </div>
            </div>
          </div>
        ))}
      </section>
    </motion.div>
  );
};
