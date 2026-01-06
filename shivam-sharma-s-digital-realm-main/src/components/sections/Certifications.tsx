import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, CheckCircle2 } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations/ScrollReveal';

const certifications = [
  {
    title: 'AWS Academy Cloud Foundations',
    issuer: 'AWS Academy',
    score: '100/100',
    date: '2024',
    skills: ['AWS Architecture', 'AWS Core Services', 'AWS Pricing', 'AWS Support'],
    color: 'from-orange-400 to-orange-600',
    icon: '☁️',
  },
  {
    title: 'Oracle Cloud Infrastructure AI Foundations',
    issuer: 'Oracle',
    score: '98/100',
    date: '2025',
    skills: ['AI Fundamentals', 'Machine Learning', 'Deep Learning', 'NLP', 'Prompt Engineering'],
    color: 'from-red-400 to-red-600',
    icon: '🤖',
  },
  {
    title: 'Application Development with Microservices',
    issuer: 'IBM',
    score: '93.50/100',
    date: '2024',
    skills: ['Kubernetes', 'Containerization', 'Microservices', 'RESTful APIs', 'Serverless'],
    color: 'from-blue-400 to-blue-600',
    icon: '🐳',
  },
  {
    title: 'Linux Commands & Shell Scripting',
    issuer: 'Coursera',
    score: '92/100',
    date: '2024',
    skills: ['Linux', 'Shell Scripting', 'Bash', 'Command Line'],
    color: 'from-yellow-400 to-yellow-600',
    icon: '🐧',
  },
  {
    title: 'Introduction to Networking and Storage',
    issuer: 'IBM',
    score: '80.62/100',
    date: '2024',
    skills: ['Cloud Storage', 'Wireless Networks', 'Network Troubleshooting'],
    color: 'from-green-400 to-green-600',
    icon: '🌐',
  },
];

export const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="up" blur>
          <div className="text-center mb-16">
            <h2 className="section-title">
              <span className="text-gradient">Certifications</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Industry-recognized credentials validating cloud expertise
            </p>
          </div>
        </ScrollReveal>

        {/* Certifications Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {certifications.map((cert, index) => (
            <StaggerItem key={cert.title}>
              <motion.div
                className="glass-card p-6 h-full group relative overflow-hidden cursor-default"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Gradient Overlay */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0`}
                  whileHover={{ opacity: 0.1 }}
                />
                
                {/* Badge Icon */}
                <div className="flex items-start justify-between mb-4">
                  <motion.div 
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {cert.icon}
                  </motion.div>
                  <span className="px-2 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold mb-2 group-hover:text-gradient transition-all">
                  {cert.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-3">{cert.issuer}</p>

                {/* Score */}
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-primary font-semibold">{cert.score}</span>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-1 rounded-full bg-muted/50 text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="text-xs px-2 py-1 rounded-full bg-muted/50 text-muted-foreground">
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>

                {/* Verified Badge */}
                <motion.div 
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                >
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                </motion.div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Summary Stats */}
        <ScrollReveal direction="up" delay={0.4}>
          <motion.div 
            className="mt-12 glass-card p-8"
            whileHover={{ scale: 1.02 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: '5+', label: 'Certifications' },
                { value: '93%', label: 'Average Score' },
                { value: '4', label: 'Cloud Platforms' },
                { value: '20+', label: 'Skills Validated' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <motion.div 
                    className="text-3xl font-bold text-gradient mb-1"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};
