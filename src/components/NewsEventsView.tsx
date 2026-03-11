import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, Calendar as CalendarIcon } from 'lucide-react';

export const NewsEventsView = () => {
  const [activeTab, setActiveTab] = useState('Notícias');

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="flex flex-col pb-12"
    >
      <header className="sticky top-[56px] z-40 bg-white border-b border-slate-200">
        <div className="flex px-4 overflow-x-auto no-scrollbar">
          {['Início', 'Notícias', 'Eventos', 'Ensino'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-shrink-0 border-b-2 py-3 px-4 text-sm font-semibold transition-colors ${
                activeTab === tab ? 'border-primary text-primary' : 'border-transparent text-slate-500'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </header>

      <main className="max-w-md mx-auto">
        <div className="px-4 pt-6 pb-4">
          <h1 className="text-3xl font-bold tracking-tight">Notícias e Eventos</h1>
        </div>

        <section className="px-4 pb-6">
          <div className="relative group overflow-hidden rounded-xl bg-white shadow-sm border border-slate-100 cursor-pointer">
            <div 
              className="aspect-video w-full bg-slate-200 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBxkqse_gkt6oyNjTH1yYrXpvAYKcU-OC770_4Wb3FCNmUF2Yr7dYNPq8oBOINqqn1fUFhYz8yw5pLE9ivOAhMOY99Jpi2tHGLBkJ3BgZWyOUWwLV0FHTXQSs3ISOTzemVYBJk-IIH0O8ZfkIfKCIQ2S9RllvzViQHokCb2lpAMuWrhY8ZU4j-UWaG4Lp27gOVQ8HAUbQocrIS0JOt_SDP92ulLl8EKDKtom-n4B9-LXxZoePYr-D-fEM_lsULqOy0oqw6Ub_Pu0f8')" }}
            />
            <div className="p-4">
              <span className="text-xs font-medium text-slate-500 uppercase tracking-widest">Destaque • 15 Out 2023</span>
              <h3 className="mt-2 text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                Investigação na UA lidera projeto europeu de sustentabilidade oceânica
              </h3>
              <div className="mt-4 flex justify-end">
                <button className="flex items-center gap-1 text-sm font-bold text-primary">
                  Ler mais <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">Recentes</h2>
          <div className="space-y-6">
            <NewsFeedItem date="12 Out 2023" title="Novos mestrados reforçam oferta formativa em tecnologia" />
            <NewsFeedItem date="10 Out 2023" title="UAveiro recebe prémio de excelência em mobilidade internacional" />
            <NewsFeedItem date="08 Out 2023" title="Estudantes de design vencem prémio internacional de inovação" />
          </div>
        </section>

        <section className="mt-10 px-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Próximos Eventos</h2>
            <button className="text-xs font-bold text-primary uppercase">Ver todos</button>
          </div>
          <div className="space-y-4">
            <EventCard day="22" month="OUT" title="Seminário: IA na Educação Superior" location="Auditório Reitoria" />
            <EventCard day="25" month="OUT" title="Workshop de Robótica Autónoma" location="Lab 4.2, Dept. Eletrónica" />
            <EventCard day="30" month="OUT" title="Concerto de Outono: Orquestra UA" location="Teatro Aveirense" />
          </div>
        </section>
      </main>
    </motion.div>
  );
};

const NewsFeedItem = ({ date, title }: { date: string, title: string }) => (
  <article className="group cursor-pointer">
    <p className="text-xs font-medium text-slate-400">{date}</p>
    <h4 className="mt-1 text-base font-bold leading-snug group-hover:text-primary transition-colors">
      {title}
    </h4>
  </article>
);

const EventCard = ({ day, month, title, location }: { day: string, month: string, title: string, location: string }) => (
  <div className="flex gap-4 items-center bg-white p-3 rounded-lg border border-slate-100 cursor-pointer hover:bg-slate-50 transition-colors">
    <div className="flex flex-col items-center justify-center min-w-[56px] h-14 bg-primary rounded-lg text-white">
      <span className="text-lg font-bold leading-none">{day}</span>
      <span className="text-[10px] font-bold uppercase">{month}</span>
    </div>
    <div>
      <h5 className="text-sm font-bold leading-tight">{title}</h5>
      <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
        <MapPin size={12} /> {location}
      </p>
    </div>
  </div>
);
