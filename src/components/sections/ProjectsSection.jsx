
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Eye, GitBranch, Filter } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


const projectsData = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Plataforma de e-commerce completa com carrinho, checkout e painel de admin.",
    technologies: ["HTML", "CSS", "JavaScript, PHP e Bootstrap"],
    imageUrl: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    liveLink: "https://youtu.be/uYfNqnE2sL4?si=h9Fyaer7iQvHT9lw",
    sourceLink: "https://github.com/Pedro1325/bestprice.git",
    type: "Web App"
  },
  {
    id: 2,
    title: "API DE FILMES IMDB",
    description: "Api de filmes com React.js, Styled Components, Framer Motion e Axios. Aplicação com busca de filmes, detalhes do filme e lista de filmes com sistema de notas IMDB.",
    technologies: ["React.js", "Styled Components", "AXIOS"],
    imageUrl: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    liveLink: "https://tmdb-two-kappa.vercel.app/",
    sourceLink: "https://github.com/Pedro1325/Api-Filmes.git",
    type: "Website"
  },
  {
    id: 3,
    title: "Portfolio DRA. Sarah Sobral",
    description: "Portfolio Profissional ultilizando HTML, CSS e JavaScript. Com estudos da paleta de cores para ser o mais atrativo para o usuario",
    technologies: ["HTML,CSS e Javascript"],
    imageUrl: "https://images.unsplash.com/photo-1547480053-7d154f48508a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    liveLink: "https://psicologa-portfolio-x2qw.vercel.app/",
    sourceLink: "https://github.com/Pedro1325/Psicologa_portfolio.git",
    type: "Web App"
  },
  {
    id: 4,
    title: "Blog de Tecnologia",
    description: "Plataforma de blog com posts, categorias e comentários, otimizado para SEO.",
    technologies: ["Next.js", "Tailwind CSS", "Markdown", "Supabase"],
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    liveLink: "#",
    sourceLink: "#",
    type: "Website"
  },
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="bg-card rounded-xl shadow-lg overflow-hidden border border-border flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="w-full h-48 overflow-hidden">
        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-1 text-foreground">Tecnologias:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-4 mt-auto">
          <Button variant="outline" size="sm" asChild>
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="gap-1">
              <Eye className="h-4 w-4" /> Ver Online
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className="gap-1 text-muted-foreground hover:text-primary">
              <GitBranch className="h-4 w-4" /> Código Fonte
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};


const ProjectsSection = () => {
  const [filterTech, setFilterTech] = useState("all");
  const [filterType, setFilterType] = useState("all");

  const allTechnologies = Array.from(new Set(projectsData.flatMap(p => p.technologies)));
  const allTypes = Array.from(new Set(projectsData.map(p => p.type)));

  const filteredProjects = projectsData.filter(project => {
    const techMatch = filterTech === "all" || project.technologies.includes(filterTech);
    const typeMatch = filterType === "all" || project.type === filterType;
    return techMatch && typeMatch;
  });

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Projetos
        </motion.h2>
        <motion.p 
          className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Confira alguns dos meus trabalhos mais recentes e projetos pessoais.
        </motion.p>

        <motion.div 
          className="mb-8 flex flex-col sm:flex-row gap-4 items-center p-4 bg-card border border-border rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Filter className="h-5 w-5 text-primary mr-2 hidden sm:block" />
          <div className="flex-grow w-full sm:w-auto">
            <Select value={filterTech} onValueChange={setFilterTech}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Filtrar por tecnologia" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as Tecnologias</SelectItem>
                {allTechnologies.map(tech => (
                  <SelectItem key={tech} value={tech}>{tech}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex-grow w-full sm:w-auto">
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Filtrar por tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os Tipos</SelectItem>
                {allTypes.map(type => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.slice(0, 3).map((project) => ( // Display top 3-5 projects
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">Nenhum projeto encontrado com os filtros selecionados.</p>
        )}
        
        {projectsData.length > 3 && (
           <div className="text-center mt-12">
             <Button variant="link" className="text-primary">Ver todos os projetos (Em breve)</Button>
           </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
