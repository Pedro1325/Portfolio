
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Sobre Mim</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Tenho 20 anos e construo interfaces que as pessoas gostam de usar.
Trabalho como estagiário na Acovisa, onde desenvolvo sistemas reais com React, Next.js e Node.js — do layout ao back.
Gosto de entender como as coisas funcionam por baixo: arquitetura, fluxo de dados, experiência do usuário.
            </p>
            <p className="text-lg text-muted-foreground">
              Apaixonado pelo desenvolvimento de componentes reutilizáveis e pela criação de interfaces responsivas e acessíveis.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-primary">
              <img className="w-full h-full object-cover" alt="Foto Pedro" src="/Pedro.jpeg" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
