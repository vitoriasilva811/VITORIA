import React from 'react';
import { 
  Home, 
  BookOpen, 
  MapPin, 
  Newspaper, 
  GraduationCap, 
  FlaskConical, 
  Mail,
  Share2,
  Globe,
  User
} from 'lucide-react';

// Types
export type View = 'home' | 'courses' | 'course-detail' | 'campus' | 'news' | 'research' | 'applications' | 'admin';

// Components
export const Header = ({ onNavigate }: { onNavigate: (view: View) => void }) => (
  <header className="sticky top-0 z-50 bg-white border-b border-slate-200 px-4 py-3">
    <div className="flex items-center justify-between max-w-7xl mx-auto">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
        <GraduationCap className="text-primary w-8 h-8" />
        <div className="flex flex-col">
          <span className="text-sm font-black leading-none uppercase tracking-tighter">Universidade</span>
          <span className="text-sm font-black leading-none uppercase tracking-tighter text-primary">de Aveiro</span>
        </div>
      </div>
      <button 
        onClick={() => onNavigate('applications')}
        className="bg-primary text-white text-[10px] font-bold px-4 py-2 rounded-full hover:bg-primary-hover transition-colors uppercase tracking-wider"
      >
        Candidaturas
      </button>
    </div>
  </header>
);

export const BottomNav = ({ currentView, onNavigate }: { currentView: View, onNavigate: (view: View) => void }) => (
  <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-slate-200 px-4 pb-6 pt-2 flex justify-around z-50">
    <NavItem icon={<Home size={24} />} label="Início" active={currentView === 'home'} onClick={() => onNavigate('home')} />
    <NavItem icon={<BookOpen size={24} />} label="Cursos" active={currentView === 'courses' || currentView === 'course-detail'} onClick={() => onNavigate('courses')} />
    <NavItem icon={<FlaskConical size={24} />} label="I&D" active={currentView === 'research'} onClick={() => onNavigate('research')} />
    <NavItem icon={<MapPin size={24} />} label="Campus" active={currentView === 'campus'} onClick={() => onNavigate('campus')} />
    <NavItem icon={<Newspaper size={24} />} label="Notícias" active={currentView === 'news'} onClick={() => onNavigate('news')} />
    <NavItem icon={<User size={24} />} label="Admin" active={currentView === 'admin'} onClick={() => onNavigate('admin')} />
  </nav>
);

const NavItem = ({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active: boolean, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center gap-1 transition-colors ${active ? 'text-primary' : 'text-slate-400'}`}
  >
    {icon}
    <span className="text-[10px] font-bold uppercase">{label}</span>
  </button>
);

export const Footer = () => (
  <footer className="bg-black text-white pt-12 pb-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col gap-8 mb-12">
        <div className="flex items-center gap-2">
          <GraduationCap className="text-primary w-8 h-8" />
          <span className="text-lg font-black uppercase tracking-tighter">Universidade de Aveiro</span>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm text-slate-400">
          <div className="flex flex-col gap-3">
            <a href="#" className="hover:text-primary">Ensino</a>
            <a href="#" className="hover:text-primary">Investigação</a>
            <a href="#" className="hover:text-primary">Viver a UA</a>
          </div>
          <div className="flex flex-col gap-3">
            <a href="#" className="hover:text-primary">Contactos</a>
            <a href="#" className="hover:text-primary">Mapa do Site</a>
            <a href="#" className="hover:text-primary">Privacidade</a>
          </div>
        </div>
        <div className="flex gap-4">
          <SocialIcon icon={<Globe size={20} />} />
          <SocialIcon icon={<Share2 size={20} />} />
          <SocialIcon icon={<Mail size={20} />} />
        </div>
      </div>
      <p className="text-[10px] text-slate-500 border-t border-slate-800 pt-8">
        © 2024 Universidade de Aveiro. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-primary hover:bg-slate-700 transition-colors">
    {icon}
  </a>
);
