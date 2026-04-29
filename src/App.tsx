import { useState, useEffect } from "react";
import { 
  Github, 
  Linkedin, 
  Youtube, 
  ExternalLink, 
  Mail, 
  Terminal, 
  Database, 
  Monitor, 
  Cpu, 
  Globe, 
  MessageSquare,
  ChevronRight,
  Menu,
  X,
  Brain,
  Server
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const PROFILE_IMAGES = [
  "https://github.com/laurindocbenjamim/dev-images/blob/main/Laurindo.png?raw=true",
  "https://github.com/laurindocbenjamim/dev-images/blob/main/laurindo-thinking.jpeg?raw=true",
  "https://github.com/laurindocbenjamim/dev-images/blob/main/lcb.jpeg?raw=true"
];

const PROJECTS = [
  {
    title: "Camisa 10 Shopping",
    description: "A premium e-commerce platform for sports apparel with a focus on high-performance UX, secure payments, and inventory management.",
    demo: "https://camisa10-shopping.onrender.com",
    tags: ["React", "Node.js", "Tailwind", "PostgreSQL"],
    type: "E-commerce"
  },
  {
    title: "Discord AI Multi-Bot",
    description: "Advanced Discord bot integration featuring AI-powered commands, community moderation, and automated workflows.",
    demo: "https://discord.com/oauth2/authorize?client_id=1489759723124297930&permissions=268814336&integration_type=0&scope=bot+applications.commands",
    tags: ["TypeScript", "Discord.js", "Gemini AI", "Redis"],
    type: "Bot / AI"
  },
  {
    title: "Huambo Geopark Site",
    description: "Official portal for the Huambo Plateau Geopark, showcasing environmental beauty and tourism information with modern storytelling.",
    demo: "https://github.com/laurindocbenjamim/huambo-plateau-geopark-site",
    tags: ["Next.js", "Framer Motion", "CMS"],
    type: "Web Portal"
  },
  {
    title: "MathWizAi",
    description: "AI-driven educational tool designed to solve complex mathematical problems and explain steps using natural language processing.",
    demo: "https://github.com/laurindocbenjamim/MathWizAi",
    tags: ["Python", "FastAPI", "OpenAI", "React"],
    type: "AI / EdTech"
  }
];

const SKILLS = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"], icon: <Monitor className="w-5 h-5 text-blue-500" /> },
  { category: "Backend", items: ["Node.js", "Python (FastAPI/Flask)", "PostgreSQL", "MongoDB", "Redis"], icon: <Server className="w-5 h-5 text-emerald-500" /> },
  { category: "DevOps & Tools", items: ["Docker", "Git", "Nginx", "Keycloak", "CI/CD"], icon: <Terminal className="w-5 h-5 text-amber-500" /> },
  { category: "AI & Data Science", items: ["Gemini API", "Prompt Engineering", "R", "Scikit-Learn"], icon: <Brain className="w-5 h-5 text-purple-500" /> }
];

export default function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % PROFILE_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const projectTypes = ["All", ...new Set(PROJECTS.map(p => p.type))];
  const filteredProjects = activeFilter === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.type === activeFilter);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-brand-primary/20 transition-colors duration-500">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-neutral-800 bg-neutral-950/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-display font-bold text-lg">L</span>
              </div>
              <span className="font-display font-medium text-lg tracking-tight text-white">Benjamim.dev</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors"
              >
                Hire Me
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-neutral-400 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-neutral-900 border-b border-neutral-800 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg font-medium text-neutral-200 hover:text-white"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <motion.section 
        id="hero" 
        className="pt-32 pb-20 overflow-hidden scroll-mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <span className="w-2 h-2 bg-brand-primary rounded-full animate-pulse" />
                Available for new opportunities
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-6 text-white">
                Building <span className="text-brand-primary italic">scalable</span> solutions with AI & Modern Tech
              </h1>
              <p className="text-lg text-neutral-400 mb-8 max-w-lg leading-relaxed">
                Hi, I'm <span className="text-white font-semibold">Laurindo C. Benjamim</span>. A Software Engineer dedicated to crafting beautiful, high-performance web applications and intelligent automated systems.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#projects" 
                  className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-medium hover:bg-neutral-200 transition-all hover:translate-y-[-2px] shadow-lg shadow-white/5"
                >
                  View My Work
                  <ChevronRight className="w-4 h-4" />
                </a>
                <div className="flex items-center gap-4 px-4">
                  <a href="https://github.com/laurindocbenjamim" target="_blank" rel="noopener noreferrer" className="p-3 text-neutral-500 hover:text-white transition-colors hover:bg-neutral-900 rounded-lg">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="https://linkedin.com/in/laurindocbenjamim" target="_blank" rel="noopener noreferrer" className="p-3 text-neutral-500 hover:text-white transition-colors hover:bg-neutral-900 rounded-lg">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="https://youtube.com/@laurindocbenjamim" target="_blank" rel="noopener noreferrer" className="p-3 text-neutral-500 hover:text-white transition-colors hover:bg-neutral-900 rounded-lg">
                    <Youtube className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="relative aspect-square h-[320px] lg:h-[400px] mx-auto lg:ml-auto lg:mr-0"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-neutral-900 rounded-full overflow-hidden border-4 border-neutral-800">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage}
                    src={PROFILE_IMAGES[currentImage]}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="w-full h-full object-cover"
                    alt="Laurindo C. Benjamim"
                  />
                </AnimatePresence>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-neutral-900 p-4 rounded-2xl shadow-xl border border-neutral-800 z-10"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-brand-primary/10 text-brand-primary rounded-lg">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest leading-none mb-1">Experience</p>
                    <p className="text-sm font-bold text-white">Full Stack Developer</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-neutral-900 p-4 rounded-2xl shadow-xl border border-neutral-800 z-10"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-brand-secondary/10 text-brand-secondary rounded-lg">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest leading-none mb-1">Open Source</p>
                    <p className="text-sm font-bold text-white">Discord Bot Expert</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Video Presentation Section */}
      <motion.section 
        className="py-20 bg-neutral-900 text-white scroll-mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">Video Presentation</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Get to know me and my way of working through this short video overview of my skills and recent projects.
            </p>
          </motion.div>
          
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-neutral-800 bg-black">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/5fSiPDFk0hA?start=20"
              title="YouTube video presentation"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        id="experience" 
        className="py-20 relative bg-neutral-950 scroll-mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4"
          >
            <div>
              <p className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-3">Career Journey</p>
              <h2 className="text-4xl font-display font-bold text-white">Professional Experience</h2>
            </div>
            <a href="/cv.pdf" download className="text-sm font-semibold border-b-2 border-white pb-1 hover:text-neutral-400 hover:border-neutral-400 transition-colors text-white">
              Download Full CV
            </a>
          </motion.div>

          <div className="space-y-12 relative before:absolute before:left-[17px] md:before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-neutral-800">
            {[
              {
                role: "Senior Full Stack Engineer",
                company: "DataTuning SaaS",
                period: "2023 - Present",
                desc: "Leading the development of SaaS solutions, integrating Keycloak CRM for robust authentication and Docker for containerized deployment strategies."
              },
              {
                role: "Backend Specialist",
                company: "E-commerce Solutions",
                period: "2022 - 2023",
                desc: "Built high-traffic shopping platforms with Python/Flask and PostgreSQL, focusing on secure transaction flows and real-time inventory updates."
              },
              {
                role: "Web Developer",
                company: "Huambo Geopark Project",
                period: "2021 - 2022",
                desc: "Developed the digital presence for cultural and environmental landmarks in Angola, utilizing Next.js for SEO and high performance."
              }
            ].map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
              >
                <div className="flex-1 w-full md:text-right hidden md:block">
                  {idx % 2 === 0 ? (
                    <div className="pr-12">
                      <p className="text-brand-primary font-bold mb-1">{exp.period}</p>
                      <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                      <p className="text-neutral-500 text-sm leading-relaxed">{exp.desc}</p>
                    </div>
                  ) : null}
                </div>
                
                <div className="w-9 h-9 rounded-full bg-neutral-900 border-4 border-neutral-800 shadow-sm z-10 flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>

                <div className="flex-1 w-full text-left">
                  <div className={`${idx % 2 !== 0 ? 'md:pl-12' : 'pl-12 md:pl-0'}`}>
                    <div className="md:hidden mb-1">
                       <p className="text-brand-primary font-bold mb-1 font-mono text-xs">{exp.period}</p>
                       <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                    </div>
                    {idx % 2 !== 0 ? (
                      <div className="hidden md:block">
                        <p className="text-brand-primary font-bold mb-1">{exp.period}</p>
                        <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                        <p className="text-neutral-500 text-sm leading-relaxed">{exp.desc}</p>
                      </div>
                    ) : null}
                    <p className="md:hidden text-neutral-500 text-sm leading-relaxed">{exp.desc}</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mt-4">{exp.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects" 
        className="py-20 bg-neutral-900/50 scroll-mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8"
          >
            <div>
              <p className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-3">Portfolio</p>
              <h2 className="text-4xl font-display font-bold text-white">Featured Projects</h2>
            </div>
            
            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
              {projectTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveFilter(type)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === type 
                    ? "bg-white text-black shadow-md" 
                    : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div 
            layout
            className="grid md:grid-cols-2 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="group bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-800 hover:border-brand-primary transition-all hover:shadow-2xl hover:shadow-brand-primary/5"
                >
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div className="inline-block px-3 py-1 bg-neutral-800 rounded-lg text-xs font-bold text-neutral-400 uppercase tracking-widest">
                         {project.type}
                      </div>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-neutral-800 rounded-full transition-colors">
                        <ExternalLink className="w-5 h-5 text-neutral-500 group-hover:text-white" />
                      </a>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                    <p className="text-neutral-400 mb-6 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-mono font-bold px-2 py-1 bg-neutral-800 border border-neutral-700 rounded text-neutral-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="h-2 bg-gradient-to-r from-brand-primary to-brand-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-neutral-950 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-display font-bold text-white mb-4">Technical Toolbox</h2>
            <p className="text-neutral-400">A collection of technologies and frameworks I use to bring ideas to life.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SKILLS.map((skill, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.2)" }}
                className="p-8 bg-neutral-900 rounded-3xl border border-neutral-800 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-neutral-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="font-bold text-lg mb-4 text-white">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map(item => (
                    <li key={item} className="text-neutral-500 text-sm flex items-center gap-2">
                      <div className="w-1 h-1 bg-neutral-700 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-neutral-950 text-white overflow-hidden relative scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-8">
                Ready to <span className="text-neutral-500">collaborate?</span>
              </h2>
              <p className="text-xl text-neutral-400 mb-12">
                Have a vision or a challenge? Let's discuss how we can build something impactful together.
              </p>
              <div className="space-y-6">
                <a href="mailto:laurindocbenjamim@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center group-hover:bg-brand-primary transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 font-bold uppercase tracking-widest leading-none mb-1">Email</p>
                    <p className="text-lg font-medium">laurindocbenjamim@gmail.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 font-bold uppercase tracking-widest leading-none mb-1">Location</p>
                    <p className="text-lg font-medium">Huambo, Angola (Available Worldwide)</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-neutral-900 p-8 lg:p-12 rounded-[2.5rem] border border-neutral-800 shadow-2xl shadow-brand-primary/5"
            >
               <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Name</label>
                      <input type="text" className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 placeholder:text-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors text-white" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Email</label>
                       <input type="email" className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 placeholder:text-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors text-white" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Message</label>
                    <textarea rows={4} className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 placeholder:text-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors resize-none text-white" placeholder="Tell me about your project..." />
                  </div>
                  <button className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-neutral-200 transition-all hover:scale-[1.02] active:scale-[0.98]">
                    Send Message
                  </button>
               </form>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative circle */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-primary/10 blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-neutral-800">
         <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="flex justify-center gap-6 mb-8">
              <a href="https://github.com/laurindocbenjamim" className="text-neutral-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
              <a href="https://linkedin.com/in/laurindocbenjamim" className="text-neutral-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="https://youtube.com/@laurindocbenjamim" className="text-neutral-500 hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
            <p className="text-neutral-600 text-sm">
              &copy; {new Date().getFullYear()} Laurindo C. Benjamim. All rights reserved. Built with React & Tailwind.
            </p>
         </div>
      </footer>
    </div>
  );
}
