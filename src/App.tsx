import React, { useState, useEffect } from 'react';
import { Header, BottomNav, Footer, View } from './components/Navigation';
import { HomeView } from './components/HomeView';
import { CourseListView } from './components/CourseListView';
import { CourseDetailView } from './components/CourseDetailView';
import { CampusView } from './components/CampusView';
import { NewsEventsView } from './components/NewsEventsView';
import { ResearchView } from './components/ResearchView';
import { ApplicationsView } from './components/ApplicationsView';
import { AdminView } from './components/AdminView';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView onNavigate={setCurrentView} />;
      case 'courses':
        return <CourseListView onSelectCourse={() => setCurrentView('course-detail')} />;
      case 'course-detail':
        return <CourseDetailView onBack={() => setCurrentView('courses')} />;
      case 'campus':
        return <CampusView />;
      case 'news':
        return <NewsEventsView />;
      case 'research':
        return <ResearchView />;
      case 'applications':
        return <ApplicationsView />;
      case 'admin':
        return <AdminView />;
      default:
        return <HomeView onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg-light">
      <Header onNavigate={setCurrentView} />
      
      <main className="flex-grow">
        {renderView()}
      </main>

      <Footer />
      
      <BottomNav currentView={currentView} onNavigate={setCurrentView} />
    </div>
  );
}
