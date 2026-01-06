import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-glass-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-bold">
              <span className="text-gradient">Shivam Sharma</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Cloud Computing | Data Analytics | DevOps
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/shivam-sharma-465876259"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:scale-110 hover:bg-primary/10 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/ShivamAS2307"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:scale-110 hover:bg-primary/10 transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:shivam66785@gmail.com"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:scale-110 hover:bg-primary/10 transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-glass-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © 2025 Shivam Sharma. Built with <Heart className="w-4 h-4 text-red-500" /> and React.
          </p>
        </div>
      </div>
    </footer>
  );
};
