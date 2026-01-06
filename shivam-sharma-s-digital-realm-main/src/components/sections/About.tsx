import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cloud, Database, Server, Code2, Zap } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations/ScrollReveal';

const highlights = [
  {
    icon: Cloud,
    title: 'Cloud Native',
    description: 'Expertise in AWS services, cloud architecture, and scalable infrastructure design.',
  },
  {
    icon: Database,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights using Power BI, SQL, and Python.',
  },
  {
    icon: Server,
    title: 'DevOps',
    description: 'CI/CD pipelines, Docker, Kubernetes, and infrastructure automation.',
  },
  {
    icon: Code2,
    title: 'Full-Stack Dev',
    description: 'Building modern web applications with TypeScript, Node.js, and React.',
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="up" blur>
          <div className="text-center mb-16">
            <h2 className="section-title">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Passionate about building the future of cloud infrastructure
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Bio */}
          <ScrollReveal direction="left" delay={0.2} scale={0.9}>
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <motion.div 
                  className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Zap className="w-6 h-6 text-primary-foreground" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold">B.Tech CSE - Cloud Computing</h3>
                  <p className="text-muted-foreground">MIT School of Computing • 2022-2026</p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a cloud computing undergraduate with a strong foundation in AWS, Linux, and scripting 
                (Python, Bash). My journey spans from organizing technical events at the GeeksforGeeks 
                Student Chapter to building real-world cloud platforms.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm deeply familiar with DevOps workflows, CI/CD pipelines, and containerization using 
                Docker & Kubernetes. My goal is to leverage cloud and DevOps knowledge to solve complex 
                business challenges and build reliable, scalable systems.
              </p>

              <div className="flex flex-wrap gap-3">
                {['Problem Solver', 'Team Player', 'Quick Learner', 'Detail-Oriented'].map((trait, index) => (
                  <motion.span
                    key={trait}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 rounded-full border border-primary/30 text-sm text-primary bg-primary/5 cursor-default"
                  >
                    {trait}
                  </motion.span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Highlights Grid */}
          <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={0.15}>
            {highlights.map((item, index) => (
              <StaggerItem key={item.title}>
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="glass-card p-6 h-full group cursor-default"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h4 className="font-semibold mb-2 group-hover:text-gradient transition-all">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Stats */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { value: '7.06', label: 'CGPA', suffix: '/10' },
              { value: '5+', label: 'Certifications', suffix: '' },
              { value: '3+', label: 'Projects', suffix: '' },
              { value: '100%', label: 'AWS Certified', suffix: '' },
            ].map((stat, index) => (
              <motion.div 
                key={stat.label} 
                className="text-center glass-card p-6"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}<span className="text-muted-foreground text-lg">{stat.suffix}</span>
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
