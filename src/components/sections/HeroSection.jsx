
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';

const HeroSection = ({ onDownloadCV }) => {
  return (
    <section id="home" className="py-20 md:py-32 bg-gradient-to-br from-background to-secondary/30 dark:from-background dark:to-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Olá, sou <span className="text-primary">Pedro Henrique Silva Souza</span>.
        </motion.h1>
        <motion.p
          className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Desenvolvedor Front-end apaixonado por criar experiências digitais rápidas e escaláveis.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button size="lg" asChild>
            <a href="#projects" className="gap-2">
              Ver Projetos <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
          <Button size="lg" variant="outline" onClick={onDownloadCV} className="gap-2">
            Baixar CV <Download className="h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
