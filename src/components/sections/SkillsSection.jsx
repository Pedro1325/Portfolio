
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Settings, Database, Server, Wind, Palette, Type, GitMerge, Box } from 'lucide-react';

const skillsData = [
  { name: "HTML5", icon: <Code className="h-8 w-8 text-primary" />, category: "Frontend" },
  { name: "CSS3", icon: <Palette className="h-8 w-8 text-primary" />, category: "Frontend" },
  { name: "JavaScript", icon: <Code className="h-8 w-8 text-primary" />, category: "Frontend" },
  { name: "React.js", icon: <Settings className="h-8 w-8 text-primary" />, category: "Frontend" },
  { name: "Next.js", icon: <Server className="h-8 w-8 text-primary" />, category: "Frontend" },
  { name: "TypeScript", icon: <Type className="h-8 w-8 text-primary" />, category: "Frontend" },
  { name: "Styled Components", icon: <Palette className="h-8 w-8 text-primary" />, category: "Styling" },
  { name: "Material UI", icon: <Box className="h-8 w-8 text-primary" />, category: "Styling" },
  { name: "Tailwind CSS", icon: <Wind className="h-8 w-8 text-primary" />, category: "Styling" },
  { name: "Redux", icon: <GitMerge className="h-8 w-8 text-primary" />, category: "State Management" },
];

const SkillCard = ({ name, icon }) => {
  return (
    <motion.div
      className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center border border-border"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-foreground">{name}</h3>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/30 dark:bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Habilidades
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
          {skillsData.map((skill) => (
            <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
