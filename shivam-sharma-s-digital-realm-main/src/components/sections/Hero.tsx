import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile.jpg';
import heroBg from '@/assets/hero-bg.jpg';

export const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Letter animation for name
  const nameText = "Shivam Sharma";
  const letters = nameText.split('');

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 2 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Profile Image with Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring', bounce: 0.4 }}
          className="relative mb-8 inline-block"
        >
          <div className="relative">
            <motion.div 
              className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-blue blur-2xl"
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.img
              src={profileImage}
              alt="Shivam Sharma"
              className="relative w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-2 border-primary/50 shadow-2xl"
              whileHover={{ scale: 1.05, rotate: 5 }}
            />
          </div>
          
          {/* Floating tech icons */}
          <motion.div
            animate={{ 
              y: [-10, 10, -10],
              rotate: [0, 10, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center border border-primary/30"
          >
            <span className="text-2xl">☁️</span>
          </motion.div>
          <motion.div
            animate={{ 
              y: [10, -10, 10],
              rotate: [0, -10, 0]
            }}
            transition={{ duration: 3.5, repeat: Infinity }}
            className="absolute -bottom-2 -left-6 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center border border-secondary/30"
          >
            <span className="text-xl">⚡</span>
          </motion.div>
          <motion.div
            animate={{ 
              y: [-5, 15, -5],
              x: [-5, 5, -5]
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-1/2 -right-10 w-8 h-8 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center border border-neon-blue/30"
          >
            <span className="text-lg">🔧</span>
          </motion.div>
        </motion.div>

        {/* Name with letter animation */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi, I'm{' '}
          </motion.span>
          <span className="text-gradient">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.4 + index * 0.05,
                  type: 'spring'
                }}
                className="inline-block"
                style={{ display: letter === ' ' ? 'inline' : 'inline-block' }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          <motion.span 
            className="text-primary"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Cloud Computing
          </motion.span>{' '}•{' '}
          <motion.span 
            className="text-secondary"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          >
            Data Analytics
          </motion.span>{' '}•{' '}
          <motion.span 
            className="text-neon-blue"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
          >
            DevOps Enthusiast
          </motion.span>
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-muted-foreground mb-12 max-w-xl mx-auto"
        >
          Building scalable cloud solutions & transforming data into insights.
          B.Tech CSE student passionate about DevOps and modern infrastructure.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-8"
            >
              View Projects
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary/50 hover:bg-primary/10 hover:border-primary"
            >
              <a href="/Shivam_Sharma_Resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="border-secondary/50 hover:bg-secondary/10 hover:border-secondary"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex justify-center gap-4 mb-12"
        >
          {[
            { icon: Linkedin, href: 'https://www.linkedin.com/in/shivam-sharma-465876259', label: 'LinkedIn' },
            { icon: Github, href: 'https://github.com/ShivamAS2307', label: 'GitHub' },
            { icon: Mail, href: 'mailto:shivam66785@gmail.com', label: 'Email' },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.8 + index * 0.1, type: 'spring' }}
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center"
            >
              <social.icon className="w-5 h-5 text-primary" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-muted-foreground cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
