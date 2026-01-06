import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations/ScrollReveal';

const experiences = [
  {
    title: 'Data Analyst Intern',
    company: 'Leontra Technologies Pvt. Ltd.',
    location: 'Technology',
    date: 'Sep 2025 - Dec 2025',
    description: [
      'Performed data modeling for financial and invoicing systems to ensure accuracy and efficiency',
      'Conducted data verification and validation to maintain data integrity and reliability',
      'Supported IT and business processes through record-keeping, analysis, and documentation',
    ],
    skills: ['Data Modeling', 'SQL', 'Data Analysis', 'Documentation'],
    current: true,
  },
  {
    title: 'GFG Event Management Member',
    company: 'GeeksforGeeks Student Chapter',
    location: 'MIT School of Computing',
    date: '2023 - Present',
    description: [
      'Organized and managed technical events, coding contests, and webinars',
      'Handled event planning, coordination, and speaker communication',
      'Leveraged cloud computing skills to support online event infrastructure',
    ],
    skills: ['Event Management', 'Team Collaboration', 'Cloud Infrastructure'],
    current: true,
  },
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 px-4" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <ScrollReveal direction="up" blur>
          <div className="text-center mb-16">
            <h2 className="section-title">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Professional journey and leadership roles
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px"
            initial={{ background: 'transparent' }}
            animate={isInView ? { 
              background: 'linear-gradient(to bottom, hsl(var(--primary)), hsl(var(--secondary)), transparent)' 
            } : {}}
            transition={{ duration: 1 }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.2, type: 'spring' }}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'
              }`}
            >
              {/* Timeline Node */}
              <motion.div
                className={`absolute top-6 w-4 h-4 rounded-full border-4 border-background bg-primary z-10
                  ${index % 2 === 0 ? 'left-6 md:-right-2 md:left-auto' : 'left-6 md:-left-2'}
                `}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
              >
                {exp.current && (
                  <motion.div 
                    className="absolute inset-0 rounded-full bg-primary"
                    animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </motion.div>

              {/* Card */}
              <motion.div 
                className="ml-16 md:ml-0 glass-card p-6 hover:scale-[1.02] transition-transform duration-300"
                whileHover={{ rotateY: 2 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  {exp.current && (
                    <motion.span 
                      className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Current
                    </motion.span>
                  )}
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {exp.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </span>
                </div>

                <StaggerContainer className="space-y-2 mb-4" staggerDelay={0.1}>
                  {exp.description.map((item, i) => (
                    <StaggerItem key={i} direction="left">
                      <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {item}
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
