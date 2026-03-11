import React from 'react';
import { motion } from 'motion/react';
import { UserPlus, FileText, CheckCircle2, Clock, ArrowRight } from 'lucide-react';

export const ApplicationsView = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col pb-12"
    >
      <section className="px-4 pt-8 pb-6 bg-white">
        <h1 className="text-slate-900 text-3xl font-extrabold tracking-tight leading-tight">Candidaturas</h1>
        <p className="mt-2 text-slate-600 text-sm">Inicie o seu percurso académico na Universidade de Aveiro. Escolha o regime que melhor se adapta a si.</p>
      </section>

      <section className="px-4 py-6 space-y-6">
        <div className="bg-primary/5 border border-primary/20 p-6 rounded-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary text-white p-2 rounded-lg">
              <Clock size={20} />
            </div>
            <h2 className="font-bold text-lg">Prazos e Calendário</h2>
          </div>
          <div className="space-y-3">
            <DeadlineItem phase="1ª Fase" dates="15 Julho - 10 Agosto" status="A decorrer" active />
            <DeadlineItem phase="2ª Fase" dates="25 Agosto - 05 Setembro" status="Próxima" />
            <DeadlineItem phase="3ª Fase" dates="15 Setembro - 20 Setembro" status="Próxima" />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold px-2">Como Candidatar-se</h2>
          <div className="grid grid-cols-1 gap-4">
            <StepCard 
              number="01" 
              title="Escolha o Curso" 
              description="Consulte a nossa oferta formativa e verifique as condições de acesso." 
            />
            <StepCard 
              number="02" 
              title="Prepare a Documentação" 
              description="Digitalize os seus certificados e documentos de identificação necessários." 
            />
            <StepCard 
              number="03" 
              title="Submeta Online" 
              description="Preencha o formulário no portal de candidaturas e anexe os ficheiros." 
            />
          </div>
        </div>

        <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Pronto para começar?</h2>
          <p className="text-slate-400 text-sm mb-6">Aceda ao portal oficial de candidaturas para submeter o seu processo.</p>
          <button className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all">
            Ir para o Portal <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </motion.div>
  );
};

const DeadlineItem = ({ phase, dates, status, active }: { phase: string, dates: string, status: string, active?: boolean }) => (
  <div className={`flex items-center justify-between p-3 rounded-xl ${active ? 'bg-white shadow-sm' : 'opacity-60'}`}>
    <div>
      <p className="text-xs font-bold text-slate-500 uppercase">{phase}</p>
      <p className="text-sm font-bold text-slate-900">{dates}</p>
    </div>
    <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${active ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>
      {status}
    </span>
  </div>
);

const StepCard = ({ number, title, description }: { number: string, title: string, description: string }) => (
  <div className="flex gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
    <span className="text-2xl font-black text-primary/20">{number}</span>
    <div>
      <h3 className="font-bold text-slate-900">{title}</h3>
      <p className="text-slate-500 text-xs leading-relaxed mt-1">{description}</p>
    </div>
  </div>
);
