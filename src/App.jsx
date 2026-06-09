
import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import { ThemeProvider } from '@/components/theme-provider';

import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';
import Header from '@/components/sections/Header';

const AppContent = () => {
  const { toast } = useToast();

  const handleDownloadCV = () => {
    toast({
      title: "Download CV",
      description: "O CV será baixado em breve.",
    });
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Pedro_Henrique_Silva_Souza_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Mensagem Enviada!",
      description: "Entrarei em contato o mais breve possível.",
      duration: 3000,
    });
    e.target.reset();
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Header onDownloadCV={handleDownloadCV} />
      <main>
        <HeroSection onDownloadCV={handleDownloadCV} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection onSubmit={handleContactSubmit} onDownloadCV={handleDownloadCV} />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
