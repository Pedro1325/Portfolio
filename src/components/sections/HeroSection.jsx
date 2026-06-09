
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';

const HeroSection = ({ onDownloadCV }) => {
  const sentence = "Olá, sou ";
  const name = "Pedro Henrique Silva Souza";

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section id="home" className="py-20 md:py-32 bg-gradient-to-br from-background to-secondary/30 dark:from-background dark:to-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground min-h-[1.2em]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {sentence.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
          <span className="text-primary">
            {name.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            className="inline-block w-[3px] h-[0.8em] bg-primary ml-1 align-middle"
          />
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
