import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations/ScrollReveal';

const skillCategories = [
  {
    title: 'Cloud & DevOps',
    color: 'from-cyan-400 to-blue-500',
    skills: [
      { name: 'AWS', level: 95 },
      { name: 'Docker', level: 85 },
      { name: 'Kubernetes', level: 80 },
      { name: 'CI/CD', level: 85 },
      { name: 'Linux', level: 90 },
    ],
  },
  {
    title: 'Programming',
    color: 'from-purple-400 to-pink-500',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Java', level: 75 },
      { name: 'SQL', level: 88 },
      { name: 'Node.js', level: 80 },
      { name: 'Bash', level: 85 },
    ],
  },
  {
    title: 'Data & Analytics',
    color: 'from-green-400 to-cyan-500',
    skills: [
      { name: 'Power BI', level: 85 },
      { name: 'MySQL', level: 90 },
      { name: 'Data Modeling', level: 82 },
      { name: 'Excel', level: 88 },
    ],
  },
  {
    title: 'Web Development',
    color: 'from-orange-400 to-red-500',
    skills: [
      { name: 'HTML/CSS', level: 90 },
      { name: 'TypeScript', level: 82 },
      { name: 'React', level: 78 },
      { name: 'Supabase', level: 80 },
    ],
  },
];

const SkillOrb = ({ skill, delay, categoryColor }: { skill: { name: string; level: number }; delay: number; categoryColor: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.6, delay, type: 'spring' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <motion.div 
        className="skill-orb w-20 h-20 md:w-24 md:h-24 cursor-pointer"
        whileHover={{ scale: 1.2, rotate: 10 }}
        animate={{ y: isHovered ? -5 : 0 }}
      >
        <motion.div 
          className={`absolute inset-0 rounded-full bg-gradient-to-br ${categoryColor} opacity-20`}
          animate={{ opacity: isHovered ? 0.4 : 0.2 }}
        />
        <span className="relative z-10 text-sm font-medium text-center px-2">{skill.name}</span>
        
        {/* Level indicator on hover */}
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.8 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            y: isHovered ? 0 : 10,
            scale: isHovered ? 1 : 0.8
          }}
          className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm"
        >
          <span className="text-xs text-primary font-mono">{skill.level}%</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="up" blur>
          <div className="text-center mb-16">
            <h2 className="section-title">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="section-subtitle mx-auto">
              A comprehensive toolkit for building modern cloud solutions
            </p>
          </div>
        </ScrollReveal>

        {/* Category Tabs */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {skillCategories.map((category, index) => (
              <motion.button
                key={category.title}
                onClick={() => setActiveCategory(index)}
                className={`
                  px-6 py-3 rounded-full font-medium transition-all duration-300
                  ${activeCategory === index
                    ? 'bg-gradient-primary text-primary-foreground scale-105'
                    : 'glass-card'
                  }
                `}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.title}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Skills Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 30, rotateX: -10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="glass-card p-8 md:p-12"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <h3 className={`text-2xl font-bold mb-8 text-center bg-gradient-to-r ${skillCategories[activeCategory].color} bg-clip-text text-transparent`}>
            {skillCategories[activeCategory].title}
          </h3>
          
          {/* Skill Orbs */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <SkillOrb
                key={skill.name}
                skill={skill}
                delay={index * 0.1}
                categoryColor={skillCategories[activeCategory].color}
              />
            ))}
          </div>

          {/* Progress Bars */}
          <div className="mt-8 space-y-4 max-w-2xl mx-auto">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <motion.span 
                    className="text-sm text-muted-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, delay: 0.4 + index * 0.1, ease: 'easeOut' }}
                    className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full relative`}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/30"
                      animate={{ x: ['0%', '100%', '0%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                      style={{ width: '50%', filter: 'blur(10px)' }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Skills Grid */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12" staggerDelay={0.1}>
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <motion.div 
                className="glass-card p-4"
                whileHover={{ scale: 1.05 }}
              >
                <h4 className={`text-sm font-semibold mb-3 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill.name}
                      className="text-xs px-2 py-1 rounded-full bg-muted/50 text-muted-foreground"
                      whileHover={{ scale: 1.1, backgroundColor: 'hsl(var(--primary) / 0.2)' }}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
