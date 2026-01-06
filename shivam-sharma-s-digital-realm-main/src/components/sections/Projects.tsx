import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Cloud, Database, Server, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations/ScrollReveal';

const projects = [
  {
    title: 'Cloudx Gaming Platform',
    description: 'A full-stack cloud gaming platform with real-time multiplayer capabilities, user authentication, and cloud-based game streaming infrastructure.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80',
    tech: ['TypeScript', 'Supabase', 'Node.js', 'HTML/CSS', 'Cloud Services', 'SQL'],
    github: 'https://github.com/ShivamAS2307/cloudx-play-sphere',
    date: 'Jan 2025 - May 2025',
    mentor: 'Prof. Suresh Kapre',
    highlights: [
      'Cloud-native architecture for scalable gaming',
      'Real-time database with Supabase',
      'Modern TypeScript frontend',
    ],
  },
];

const techIcons: Record<string, typeof Cloud> = {
  'TypeScript': Code,
  'Supabase': Database,
  'Node.js': Server,
  'Cloud Services': Cloud,
};

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="up" blur>
          <div className="text-center mb-16">
            <h2 className="section-title">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Real-world applications showcasing cloud computing expertise
            </p>
          </div>
        </ScrollReveal>

        {/* Main Project Card */}
        {projects.map((project, index) => (
          <ScrollReveal key={project.title} direction="up" delay={0.2} scale={0.95}>
            <motion.div
              className="glass-card overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  
                  {/* Floating Tech Icons */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {Object.entries(techIcons).slice(0, 4).map(([tech, Icon], i) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 + i * 0.15, type: 'spring' }}
                        className="absolute"
                        style={{
                          top: `${20 + (i % 2) * 40}%`,
                          left: `${15 + i * 20}%`,
                        }}
                      >
                        <motion.div 
                          className="w-12 h-12 rounded-full glass-card flex items-center justify-center"
                          animate={{ y: [0, -10, 0] }}
                          transition={{ duration: 3 + i * 0.5, repeat: Infinity }}
                        >
                          <Icon className="w-5 h-5 text-primary" />
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-8 lg:p-12">
                  <motion.div 
                    className="flex items-center gap-3 mb-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium animate-pulse">
                      Featured
                    </span>
                    <span className="text-sm text-muted-foreground">{project.date}</span>
                  </motion.div>

                  <h3 className="text-3xl font-bold mb-4 group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Mentor */}
                  <p className="text-sm text-muted-foreground mb-6">
                    <span className="text-primary">Mentor:</span> {project.mentor}
                  </p>

                  {/* Highlights */}
                  <StaggerContainer className="space-y-2 mb-6" staggerDelay={0.1}>
                    {project.highlights.map((highlight) => (
                      <StaggerItem key={highlight} direction="left">
                        <div className="flex items-center gap-2 text-sm">
                          <motion.div 
                            className="w-1.5 h-1.5 rounded-full bg-primary"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          {highlight}
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.6 + i * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1.5 rounded-lg bg-muted text-sm font-mono text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4">
                    <Button asChild className="bg-gradient-primary hover:opacity-90">
                      <motion.a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View on GitHub
                      </motion.a>
                    </Button>
                    <Button variant="outline" className="border-primary/50 hover:bg-primary/10" asChild>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </motion.a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}

        {/* More Projects Coming */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="mt-12 text-center">
            <motion.div 
              className="glass-card p-8 inline-block"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-muted-foreground mb-4">More exciting projects coming soon...</p>
              <div className="flex justify-center gap-3">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 rounded-full bg-primary/30"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 1, 0.3]
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
