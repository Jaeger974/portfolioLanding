import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  ExternalLink, 
  Mail, 
  Linkedin, 
  Twitter, 
  ChevronRight, 
  Code2, 
  User, 
  Send,
  Menu,
  X,
  Terminal,
  Cpu,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

// --- Types ---
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
}

// --- Mock Data ---
const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Amourly Subscription Service",
    description: "A full-stack E-Poem subscription service. Users can subscribe to send their SO a personalised poem every month.",
    tags: ["React", "Node.js", "PostgreSQL", "Express.js"],
    githubUrl: "https://github.com/Jaeger974/jmwebdev.io",
    liveUrl: "https://amourlyserviceproject-io.onrender.com/",
    image: "portfolioLanding\\images\\Amourlyhomepagepreview.JPG"
  },
  {
    id: 2,
    title: "Local Sparring Matchmaking App",
    description: "A local boxing and martial arts matchmaking app for finding training partners in your area. Users can create profiles, list their skills, and connect with others for sparring sessions.",
    tags: ["React Native", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/username/sparring-app",
    liveUrl: "https://sparring-app.netlify.app",
    image: "https://picsum.photos/seed/sparring/800/600"
  },
  {
    id: 3,
    title: "Weather Sphere",
    description: "A beautiful 3D weather application with global coverage and interactive maps.",
    tags: ["React", "Three.js", "OpenWeather API"],
    githubUrl: "https://github.com/username/weather-sphere",
    liveUrl: "https://weather-sphere.netlify.app",
    image: "https://picsum.photos/seed/weather/800/600"
  }
];

const SKILLS = [
  "React", "TypeScript", "Node.js", "Tailwind CSS", 
  "PostgreSQL", "Next.js", "Git", "Docker", "AWS"
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md border-b py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 font-display font-bold text-xl tracking-tighter"
        >
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
            <Terminal size={18} />
          </div>
          <span>DEV.PORTFOLIO</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <Button size="sm" className="rounded-full">Resume</Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium"
                >
                  {link.name}
                </a>
              ))}
              <Button className="w-full">Resume</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-6 px-4 py-1 text-xs font-mono tracking-widest uppercase">
              Available for hire
            </Badge>
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-8">
              BUILDING <span className="text-muted-foreground">DIGITAL</span> EXPERIENCES THAT <span className="italic font-light">MATTER.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            I'm a junior full-stack developer passionate about creating clean, 
            performant, and accessible web applications. Currently focused on 
            mastering React and modern backend architectures.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="rounded-full px-8 group">
              View Work <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
            <div className="flex items-center gap-4 px-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Github size={24} /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin size={24} /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Twitter size={24} /></a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-2xl overflow-hidden group"
          >
            <img 
              src="https://picsum.photos/seed/developer/800/800" 
              alt="Developer Profile"
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl m-4 pointer-events-none" />
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 text-primary mb-4">
                <User size={20} />
                <span className="text-sm font-bold uppercase tracking-widest">About Me</span>
              </div>
              <h2 className="text-4xl font-display font-bold mb-6">Passionate about solving complex problems with simple solutions.</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                My journey into development started with a curiosity about how things work 
                on the internet. What began as tweaking HTML/CSS for personal blogs 
                evolved into a deep dive into modern JavaScript frameworks and 
                backend systems.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I believe in continuous learning and staying updated with the 
                latest industry trends. When I'm not coding, you can find me 
                exploring open-source projects or contributing to local tech communities.
              </p>

              <div className="space-y-6">
                <h3 className="font-bold text-sm uppercase tracking-widest text-foreground">Technical Arsenal</h3>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1 rounded-md">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-primary mb-4">
              <Code2 size={20} />
              <span className="text-sm font-bold uppercase tracking-widest">Showcase</span>
            </div>
            <h2 className="text-5xl font-display font-bold">Selected Projects</h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-sm"
          >
            A collection of projects that demonstrate my technical skills and 
            creative problem-solving abilities.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="group overflow-hidden border-muted/50 hover:border-primary/50 transition-colors bg-card/50 backdrop-blur-sm">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <Button size="icon" variant="secondary" className="rounded-full">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
                    </Button>
                    <Button size="icon" variant="secondary" className="rounded-full">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"><ExternalLink size={20} /></a>
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-mono uppercase tracking-wider text-primary/70">{tag}</span>
                    ))}
                  </div>
                  <CardTitle className="font-display text-xl">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                </CardHeader>
                <CardFooter className="pt-0">
                  <a 
                    href={project.liveUrl} 
                    className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    View Project <ChevronRight size={14} />
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormState({ name: '', email: '', message: '' });
    
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 text-primary mb-4">
                <Mail size={20} />
                <span className="text-sm font-bold uppercase tracking-widest">Get in touch</span>
              </div>
              <h2 className="text-5xl font-display font-bold mb-8">Let's build something amazing together.</h2>
              <p className="text-muted-foreground mb-10 leading-relaxed">
                Whether you have a question, a project idea, or just want to 
                say hi, my inbox is always open. I'll do my best to get back 
                to you as soon as possible!
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-primary">
                    <Globe size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Location</p>
                    <p className="font-medium">London, United Kingdom</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-primary">
                    <Cpu size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Current Focus</p>
                    <p className="font-medium">Full-stack Engineering</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-muted/50 bg-card/50 backdrop-blur-sm p-2">
                <CardHeader>
                  <CardTitle className="text-xl">Send a Message</CardTitle>
                  <CardDescription>Fill out the form below and I'll get back to you.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest">Name</label>
                        <Input 
                          placeholder="John Doe" 
                          required 
                          value={formState.name}
                          onChange={e => setFormState({...formState, name: e.target.value})}
                          className="bg-muted/50 border-none focus-visible:ring-1"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest">Email</label>
                        <Input 
                          type="email" 
                          placeholder="john@example.com" 
                          required 
                          value={formState.email}
                          onChange={e => setFormState({...formState, email: e.target.value})}
                          className="bg-muted/50 border-none focus-visible:ring-1"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest">Message</label>
                      <Textarea 
                        placeholder="Tell me about your project..." 
                        required 
                        rows={5}
                        value={formState.message}
                        onChange={e => setFormState({...formState, message: e.target.value})}
                        className="bg-muted/50 border-none focus-visible:ring-1 resize-none"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full rounded-lg h-12 font-bold uppercase tracking-widest"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : (isSuccess ? "Message Sent!" : "Send Message")}
                      {!isSubmitting && !isSuccess && <Send className="ml-2" size={18} />}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-muted/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2 font-display font-bold text-lg tracking-tighter">
            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-primary-foreground">
              <Terminal size={14} />
            </div>
            <span>DEV.PORTFOLIO</span>
          </div>
          
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Junior Developer. Built with React & Tailwind.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
