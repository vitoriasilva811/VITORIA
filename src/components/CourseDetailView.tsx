import React from 'react';
import { motion } from 'motion/react';
import { 
  ChevronRight, 
  Download, 
  UserCheck, 
  CheckCircle2, 
  Mail, 
  Phone,
  Clock,
  Layers,
  Languages,
  ChevronDown
} from 'lucide-react';

export const CourseDetailView = ({ onBack }: { onBack: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }} 
      animate={{ opacity: 1, x: 0 }}
      className="flex flex-col pb-12"
    >
      <section className="p-4 bg-white">
        <nav className="flex mb-4 text-[10px] uppercase tracking-widest text-slate-500 font-semibold">
          <span onClick={onBack} className="cursor-pointer hover:text-primary">Home</span>
          <span className="mx-2">/</span>
          <span onClick={onBack} className="cursor-pointer hover:text-primary">Cursos</span>
          <span className="mx-2">/</span>
          <span className="text-primary">ECT</span>
        </nav>
        <h1 className="text-3xl font-extrabold leading-tight text-slate-900 mb-6">
          Mestrado em Engenharia de Computadores e Telemática
        </h1>

        <div className="grid grid-cols-3 gap-3">
          <InfoCard label="Duração" value="2 Anos" icon={<Clock size={14} />} />
          <InfoCard label="ECTS" value="120" icon={<Layers size={14} />} />
          <InfoCard label="Língua" value="PT / EN" icon={<Languages size={14} />} />
        </div>
      </section>

      <section className="p-4 flex flex-col gap-3">
        <button className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
          <UserCheck size={20} />
          Candidatar Agora
        </button>
        <button className="w-full border-2 border-slate-900 text-slate-900 font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-50 transition-all active:scale-[0.98]">
          <Download size={20} />
          Download Brochura
        </button>
      </section>

      <section className="p-4 space-y-8">
        <div className="space-y-3">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <span className="w-8 h-1 bg-primary rounded-full"></span>
            Sobre o Curso
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm">
            O Mestrado em Engenharia de Computadores e Telemática (MECT) foca-se no projeto, implementação e gestão de sistemas informáticos complexos, redes de comunicação e serviços de telemática avançados.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <span className="w-8 h-1 bg-primary rounded-full"></span>
            Plano de Estudos
          </h2>
          <div className="space-y-2">
            <AccordionItem title="1º Ano - Tronco Comum" />
            <AccordionItem title="2º Ano - Especializações" />
            <AccordionItem title="Dissertação / Estágio" />
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <span className="w-8 h-1 bg-primary rounded-full"></span>
            Saídas Profissionais
          </h2>
          <ul className="grid grid-cols-1 gap-2">
            <li className="flex items-start gap-2 text-sm text-slate-600">
              <CheckCircle2 className="text-primary w-4 h-4 mt-0.5 shrink-0" />
              Engenheiro de Software e Sistemas
            </li>
            <li className="flex items-start gap-2 text-sm text-slate-600">
              <CheckCircle2 className="text-primary w-4 h-4 mt-0.5 shrink-0" />
              Arquiteto de Redes e Cloud
            </li>
            <li className="flex items-start gap-2 text-sm text-slate-600">
              <CheckCircle2 className="text-primary w-4 h-4 mt-0.5 shrink-0" />
              Especialista em Cibersegurança
            </li>
          </ul>
        </div>

        <div className="bg-slate-100 p-6 rounded-2xl border border-slate-200 mt-6">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-4">Contacto do Curso</h3>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-300 overflow-hidden relative">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMs4uwucKNQZYeQgBxPatp5Pj-ceCAj_iHJ8WPrVOalSPclPTE9zr-pW8KJnVjBwZ3tjJCRPsJ2L6XJ8q0f0o8cn_F_vY83ytmsIMVDnqi4F75nvjrBn1YbSmlaCuYYZkpx6zZRlIhOkGpl2GGnwG5U4sAtX2W-Muyeis3xKLLSWRBNzDGDCU7XNzo2f99ZRQ1QDxQPxDGVCGduu5ktenPIksxDbeROeBTtcQnpHJATBvjS150yyDQzsQ103Xac2tRxfTvwi1At_E" 
                alt="João Silva"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <p className="font-bold text-slate-900">Prof. João Silva</p>
              <p className="text-xs text-slate-500">Diretor de Curso</p>
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <a href="mailto:ect@ua.pt" className="text-primary text-sm font-medium flex items-center gap-2">
              <Mail size={14} />
              ect@ua.pt
            </a>
            <a href="tel:+351234370200" className="text-slate-500 text-sm flex items-center gap-2">
              <Phone size={14} />
              +351 234 370 200
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const InfoCard = ({ label, value, icon }: { label: string, value: string, icon: React.ReactNode }) => (
  <div className="bg-bg-light p-3 rounded-lg border border-slate-100">
    <div className="flex items-center gap-1 mb-1">
      <span className="text-slate-400">{icon}</span>
      <p className="text-[10px] uppercase text-slate-500 font-bold">{label}</p>
    </div>
    <p className="text-sm font-bold">{value}</p>
  </div>
);

const AccordionItem = ({ title }: { title: string }) => (
  <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-slate-100 cursor-pointer hover:bg-slate-50 transition-colors">
    <span className="font-medium text-sm">{title}</span>
    <ChevronDown className="text-slate-400 w-5 h-5" />
  </div>
);
