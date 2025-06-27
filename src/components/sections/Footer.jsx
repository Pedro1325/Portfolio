
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-muted dark:bg-gray-900 text-muted-foreground dark:text-gray-400 py-8 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            &copy; {currentYear} Pedro Henrique Silva Souza. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4">
            <a href="https://github.com/pedrohssouza" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/in/pedrohssouza" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:pedro.h.silva.souza.dev@example.com" aria-label="Email" className="hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        <p className="text-xs text-center mt-4 text-muted-foreground/70">
          Inspirado no portfólio de Rhuan Bello.
        </p>
      </div>
    
    </footer>
  );
};

export default Footer;
