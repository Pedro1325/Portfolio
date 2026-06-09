
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send, Download, Mail, Smartphone, Linkedin, Github } from 'lucide-react';

const ContactSection = ({ onSubmit, onDownloadCV }) => {
  return (
    <section id="contact" className="py-20 bg-secondary/30 dark:bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Entre em Contato
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            className="bg-card p-8 rounded-xl shadow-lg border border-border"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Envie uma mensagem</h3>
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-muted-foreground">Nome</Label>
                <Input type="text" id="name" name="name" placeholder="Seu nome completo" required className="mt-1 bg-background border-border focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <Label htmlFor="email" className="text-muted-foreground">E-mail</Label>
                <Input type="email" id="email" name="email" placeholder="seu.email@exemplo.com" required className="mt-1 bg-background border-border focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <Label htmlFor="message" className="text-muted-foreground">Mensagem</Label>
                <Textarea id="message" name="message" rows="4" placeholder="Sua mensagem..." required className="mt-1 bg-background border-border focus:ring-primary focus:border-primary" />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button type="submit" size="lg" className="w-full sm:w-auto gap-2">
                  Enviar Mensagem <Send className="h-5 w-5" />
                </Button>
                <Button type="button" variant="outline" size="lg" onClick={onDownloadCV} className="w-full sm:w-auto gap-2">
                  Baixar CV <Download className="h-5 w-5" />
                </Button>
              </div>
            </form>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-2 text-foreground">Outras formas de contato:</h3>
            <div className="space-y-4">
              <a href="mailto:pedroh13022006@gmail.com" className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border group">
                <Mail className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-medium text-foreground">E-mail</p>
                  <p className="text-muted-foreground text-sm">pedroh13022006@gmail.com</p>
                </div>
              </a>
              <a href="https://wa.me/5511964486899" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border group">
                <Smartphone className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                 <div>
                  <p className="font-medium text-foreground">WhatsApp</p>
                  <p className="text-muted-foreground text-sm">+55 (11) 96448-6899</p>
                </div>
              </a>
              <a href="https://linkedin.com/in/pedro-henrique-silva10" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border group">
                <Linkedin className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-medium text-foreground">LinkedIn</p>
                  <p className="text-muted-foreground text-sm">linkedin.com/in/pedrohssouza</p>
                </div>
              </a>
              <a href="https://github.com/pedrohssouza" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border group">
                <Github className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-medium text-foreground">GitHub</p>
                  <p className="text-muted-foreground text-sm">github.com/pedrohssouza</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
