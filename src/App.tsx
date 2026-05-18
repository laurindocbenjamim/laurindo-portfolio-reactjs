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
  Server,
  Activity,
  BarChart3,
  Presentation
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Showcases from "./components/Showcases";

const PROFILE_IMAGES = [
  "https://github.com/laurindocbenjamim/dev-images/blob/main/Laurindo.png?raw=true",
  "https://github.com/laurindocbenjamim/dev-images/blob/main/laurindo-thinking.jpeg?raw=true",
  "https://github.com/laurindocbenjamim/dev-images/blob/main/lcb.jpeg?raw=true"
];

const PROJECTS = [
  {
    title: "MSpeeText: converter",
    description: "Convert audio speech into text using AI models with precision and high performance.",
    demo: "https://laurindocbenjamim.github.io/laurindo-c-benjamim-portfolio/portfolio/convert-speech-to-text.html",
    github: "https://github.com/laurindocbenjamim/laurindo-c-benjamim-portfolio",
    tags: ["OpenAI API", "Python", "Flask", "JS", "Bootstrap"],
    type: "AI / Utility"
  },
  {
    title: "AI Audio Book generator",
    description: "Generate professional audio books from text documents using advanced neural voices.",
    demo: "https://laurindocbenjamim.github.io/laurindo-c-benjamim-portfolio/portfolio/deepseek_audiobook_75.html",
    github: "https://github.com/laurindocbenjamim/pidio-audio-book-frontend",
    tags: ["AI", "Python", "Flask", "Bootstrap"],
    type: "AI / Content"
  },
  {
    title: "Clone Voice with AI",
    description: "State-of-the-art voice cloning technology for personalized audio experiences.",
    demo: "https://www.d-tuning.com/api/v1/video/clone-voice",
    github: "https://github.com/laurindocbenjamim/pidio-audio-book-frontend",
    tags: ["AI", "Python", "API", "Audio"],
    type: "AI / Service"
  },
  {
    title: "Workflow Automated Data Processing",
    description: "Automated end-to-end data processing workflows for industrial applications.",
    demo: "https://laurindocbenjamim.github.io/laurindo-c-benjamim-portfolio/workflow.html",
    github: "https://github.com/laurindocbenjamim/pidio-audio-book-frontend",
    tags: ["Python", "Automation", "Flask", "Data"],
    type: "Automation"
  },
  {
    title: "CV Customization Tool",
    description: "Intelligent tool to adjust CVs to specific job requirements automatically.",
    demo: "https://laurindocbenjamim.github.io/laurindo-c-benjamim-portfolio/cv_customizer.html",
    github: "https://github.com/laurindocbenjamim/laurindo-c-benjamim-portfolio",
    tags: ["NLP", "Python", "JS", "Bootstrap"],
    type: "AI / HR"
  },
  {
    title: "Video Studio",
    description: "Cloud-based video editing and generation platform with advanced tools.",
    demo: "https://laurindocbenjamim.github.io/laurindo-c-benjamim-portfolio/video_studio_v4.html",
    github: "https://github.com/laurindocbenjamim/laurindo-c-benjamim-portfolio",
    tags: ["Python", "Flask", "Video Processing"],
    type: "Creative"
  },
  {
    title: "WPodcaster",
    description: "Comprehensive platform for podcast creation and distribution.",
    demo: "https://laurindocbenjamim.github.io/laurindo-c-benjamim-portfolio/podcast_creator/w_podcaster.html",
    github: "https://github.com/laurindocbenjamim/podcast_creator",
    tags: ["Audio", "Python", "Flask", "JS"],
    type: "Creative"
  },
  {
    title: "WakeUp Alarm",
    description: "Personalized AI alarm system that wakes you up with custom music and voices.",
    demo: "https://laurindocbenjamim.github.io/laurindo-c-benjamim-portfolio/alarm_app/index.html",
    github: "https://github.com/laurindocbenjamim/laurindo-c-benjamim-portfolio",
    tags: ["JS", "AI", "Mobile Web"],
    type: "Utility"
  },
  {
    title: "Countries API",
    description: "High-performance API for international country data and calling codes.",
    demo: "https://www.d-tuning.com/api/v1/web-scrapping/countries",
    github: "https://github.com/laurindocbenjamim/laurindo-c-benjamim-portfolio",
    tags: ["Scraping", "Python", "FastAPI"],
    type: "API"
  },
  {
    title: "Dubbing Studio",
    description: "Automated video dubbing and translation services using AI.",
    demo: "https://laurindocbenjamim.github.io/laurindo-c-benjamim-portfolio/dubbing_studio/",
    github: "https://github.com/laurindocbenjamim/laurindo-c-benjamim-portfolio",
    tags: ["AI", "Multimedia", "Python"],
    type: "Creative"
  },
  {
    title: "Sentiment Analysis",
    description: "Extract deep sentiments and entities from text data using Watson AI.",
    demo: "https://github.com/laurindocbenjamim/pylau-app-flask/tree/main/app/package_data_science/module_sentiment_analyse",
    github: "https://github.com/laurindocbenjamim/pylau-app-flask/tree/main/app/package_data_science/module_sentiment_analyse",
    tags: ["Watson AI", "NLP", "Python", "Flask"],
    type: "Data Science"
  },
  {
    title: "Stream Speech Test",
    description: "Real-time speech-to-text streaming testing module.",
    demo: "https://laurindocbenjamim.github.io/laurindo-c-benjamim-portfolio/portfolio/stream-speech.html",
    github: "https://github.com/laurindocbenjamim/laurindo-c-benjamim-portfolio",
    tags: ["Streaming", "WebSockets", "JS", "AI"],
    type: "Testing"
  },
  {
    title: "Smart Reader",
    description: "AI-powered document reader with text-to-speech highlights.",
    demo: "https://laurindocbenjamim.github.io/laurindo-c-benjamim-portfolio/doc_reader/doc_reader.html",
    github: "https://github.com/laurindocbenjamim/laurindo-c-benjamim-portfolio",
    tags: ["AI", "JS", "TTS", "Python"],
    type: "AI / Accessibility"
  },
  {
    title: "Audio Splitter",
    description: "Intelligent audio segmentation tool for precise file splitting.",
    demo: "https://laurindocbenjamim.github.io/laurindo-c-benjamim-portfolio/portfolio/split-audio.html",
    github: "https://github.com/laurindocbenjamim/laurindo-c-benjamim-portfolio",
    tags: ["Python", "Flask", "Audio"],
    type: "Utility"
  }
];

const SKILLS = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap"], icon: <Monitor className="w-5 h-5 text-blue-500" /> },
  { category: "Backend & Data", items: ["Python (FastAPI/Flask)", "Java", "PHP (Pure/Laravel)", "PostgreSQL", "MySQL", "Hadoop/Hive", "Databricks", "Data Lake/Lakehouse"], icon: <Database className="w-5 h-5 text-emerald-500" /> },
  { category: "DevOps & Cloud", items: ["Docker", "Git", "Nginx", "Keycloak", "Apache Airflow", "Apache Spark", "Data Fabric"], icon: <Server className="w-5 h-5 text-amber-500" /> },
  { category: "AI & Science", items: ["OpenAI API", "Watson AI", "Gemini API", "Speech-to-Text", "Voice Cloning"], icon: <Brain className="w-5 h-5 text-purple-500" /> }
];

function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedMobileBadge, setSelectedMobileBadge] = useState<number | null>(null);

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
    { name: "Showcases", href: "/shocases" },
    { name: "Contact", href: "#contact" }
  ];

  const EXPERIENCES = [
    {
      role: "Senior Data Engineer (Databricks & Lakehouse)",
      company: "Modern Data Platforms",
      period: "2022 - 2023",
      desc: "Architected scalable Lakehouse solutions using Databricks and Delta Lake. Engineered high-performance Spark pipelines for ETL/ELT processes and implemented automated data quality frameworks.",
      bullets: [
        "Migrated legacy on-premise data pipelines to Databricks Lakehouse architecture, improving processing speed by 45%.",
        "Implemented robust Data Lake storage strategies with prioritized security and medallion architecture (Bronze/Silver/Gold).",
        "Optimized complex Spark SQL and PySpark jobs, significantly reducing cloud compute costs."
      ]
    },
    {
      role: "Data Solutions Architect (Data Fabric)",
      company: "Enterprise Integration",
      period: "2021 - 2022",
      desc: "Designed and deployed Data Fabric frameworks to unify disparated data sources and enable real-time metadata-driven data orchestration across hybrid cloud environments.",
      bullets: [
        "Engineered automated metadata discovery and generation pipelines to support semantic data layers.",
        "Implemented Data Fabric concepts for unified data governance, access control, and self-service analytics.",
        "Collaborated on harmonizing data across multi-cloud environments using advanced orchestration tools."
      ]
    },
    {
      role: "Trainer",
      company: "Charkcoders, Gaia",
      period: "September 2023 – May 2024",
      desc: "Python Developer trainer for children aged 11-17 (75% success), Web Developer trainer (90% success), and Game Developer trainer (68% success).",
      bullets: [
        "Python Developer trainer for children aged 11 to 17 years old, where 75% of them show good learning.",
        "Web Developer trainer for children aged 11 to 17 years old, where 90% of them show good learning.",
        "Game Developer trainer for children aged 8 to 17 years old, where 68% of them show good learning."
      ]
    },
    {
      role: "Senior Software Developer (Desktop)",
      company: "IPPE Lubango (Angola)",
      period: "January 2018 - November 2021",
      desc: "Developed a desktop file management application with 98% of requirements implemented and 89% acceptance."
    },
    {
      role: "Senior Software Developer (Web)",
      company: "IPPE Lubango (Angola)",
      period: "January 2018 - November 2021",
      desc: "Developed an academic management platform using pure PHP, HTML, CSS, Bootstrap, JQuery, and Ajax (75% acceptance). Modernized manual payment registrations."
    },
    {
      role: "Full Stack Developer",
      company: "ELT - Contas, lda - Lubango",
      period: "March 2019 - September 2021",
      desc: "Developed a Shopping web application with 70% of requirements implemented using PHP/Laravel and JQuery (Project discontinued)."
    }
  ];

  return (
    <>
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
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold leading-tight mb-6 text-white text-center lg:text-left">
                Building <span className="text-brand-primary italic">scalable</span> solutions with AI & Modern Tech
              </h1>
              <p className="text-base sm:text-lg text-neutral-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed text-center lg:text-left">
                Hi, I'm <span className="text-white font-semibold">Laurindo C. Benjamim</span>. A Software Engineer dedicated to crafting beautiful, high-performance web applications and intelligent automated systems.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a 
                  href="#projects" 
                  className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-medium hover:bg-neutral-200 transition-all hover:translate-y-[-2px] shadow-lg shadow-white/5"
                >
                  View My Work
                  <ChevronRight className="w-4 h-4" />
                </a>
                <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
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
              className="relative aspect-square h-[320px] lg:h-[400px] mx-auto lg:ml-auto lg:mr-0 z-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Circular Orbit Path (Desktop only) */}
              <div className="absolute inset-0 pointer-events-none hidden lg:block">
                 <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-dashed border-neutral-800/50 rounded-full"
                >
                  {/* Badge 1: Experience */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.div 
                      animate={{ rotate: -360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                      className="bg-neutral-900 p-4 rounded-2xl shadow-2xl border border-neutral-800 whitespace-nowrap"
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
                  </div>

                  {/* Badge 2: Open Source */}
                  <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
                    <motion.div 
                      animate={{ rotate: -360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                      className="bg-neutral-900 p-4 rounded-2xl shadow-2xl border border-neutral-800 whitespace-nowrap"
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
                  </div>

                  {/* Badge 3: Data Engineer */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <motion.div 
                      animate={{ rotate: -360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                      className="bg-neutral-900 p-4 rounded-2xl shadow-2xl border border-neutral-800 whitespace-nowrap"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-500/10 text-blue-500 rounded-lg">
                          <BarChart3 className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest leading-none mb-1">Expertise</p>
                          <p className="text-sm font-bold text-white">Data Engineer</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Badge 4: Biomedical */}
                  <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
                    <motion.div 
                      animate={{ rotate: -360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                      className="bg-neutral-900 p-4 rounded-2xl shadow-2xl border border-neutral-800 whitespace-nowrap"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-rose-500/10 text-rose-500 rounded-lg">
                          <Activity className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest leading-none mb-1">Education</p>
                          <p className="text-sm font-bold text-white">Master Biomedical Engineer</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Profile Image */}
              <div className="relative w-full h-full bg-neutral-900 rounded-full overflow-hidden border-4 border-neutral-800 shadow-[0_0_50px_-12px_rgba(14,165,233,0.3)] z-0">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Mobile Badges (Interactive) */}
              <div className="lg:hidden absolute -bottom-16 flex flex-col items-center gap-4 w-full">
                <div className="flex gap-4 justify-center">
                  {[
                    { icon: <Terminal className="w-5 h-5" />, color: "text-brand-primary", title: "Experience", value: "Full Stack Developer" },
                    { icon: <BarChart3 className="w-5 h-5 theme-blue" />, color: "text-blue-500", title: "Expertise", value: "Data Engineer" },
                    { icon: <Activity className="w-5 h-5 theme-rose" />, color: "text-rose-500", title: "Education", value: "Master Biomedical Engineer" }
                  ].map((badge, i) => (
                    <motion.button
                      key={i}
                      onClick={() => setSelectedMobileBadge(selectedMobileBadge === i ? null : i)}
                      whileTap={{ scale: 0.9 }}
                      className={`relative bg-neutral-900 p-3 rounded-xl border transition-all ${
                        selectedMobileBadge === i ? "border-brand-primary ring-1 ring-brand-primary/50" : "border-neutral-800"
                      } shadow-xl`}
                    >
                      <div className={badge.color}>{badge.icon}</div>
                    </motion.button>
                  ))}
                </div>
                
                <AnimatePresence>
                  {selectedMobileBadge !== null && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="bg-neutral-900 border border-neutral-800 p-4 rounded-2xl shadow-2xl w-full max-w-[280px]"
                    >
                      <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest leading-none mb-1 text-center">
                        {[ "Experience", "Expertise", "Education" ][selectedMobileBadge]}
                      </p>
                      <p className="text-sm font-bold text-white text-center">
                        {[ "Full Stack Developer", "Data Engineer", "Master Biomedical Engineer" ][selectedMobileBadge]}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
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

          <div className="space-y-12 relative before:absolute before:left-[17px] sm:before:left-[21px] md:before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-neutral-800">
            {EXPERIENCES.map((exp, idx) => (
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
                      <p className="text-brand-primary font-bold mb-1 font-mono text-xs">{exp.period}</p>
                      <h3 className="text-xl font-bold mb-2 text-white">{exp.role}</h3>
                      {exp.bullets ? (
                        <ul className="text-neutral-500 text-sm space-y-1 text-right">
                          {exp.bullets.map((bullet, i) => (
                            <li key={i} className="leading-relaxed">{bullet}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-neutral-500 text-sm leading-relaxed">{exp.desc}</p>
                      )}
                    </div>
                  ) : null}
                </div>
                
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-neutral-900 border-4 border-neutral-800 shadow-sm z-10 flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>

                <div className="flex-1 w-full text-left">
                  <div className={`${idx % 2 !== 0 ? 'md:pl-12' : 'pl-12 md:pl-0'}`}>
                    <div className="md:hidden mb-1">
                       <p className="text-brand-primary font-bold mb-1 font-mono text-xs">{exp.period}</p>
                       <h3 className="text-xl font-bold mb-2 text-white">{exp.role}</h3>
                    </div>
                    {idx % 2 !== 0 ? (
                      <div className="hidden md:block">
                        <p className="text-brand-primary font-bold mb-1 font-mono text-xs">{exp.period}</p>
                        <h3 className="text-xl font-bold mb-2 text-white">{exp.role}</h3>
                        {exp.bullets ? (
                          <ul className="text-neutral-500 text-sm space-y-1">
                            {exp.bullets.map((bullet, i) => (
                              <li key={i} className="leading-relaxed">{bullet}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-neutral-500 text-sm leading-relaxed">{exp.desc}</p>
                        )}
                      </div>
                    ) : null}
                    <div className="md:hidden text-neutral-500 text-sm leading-relaxed">
                      {exp.bullets ? (
                        <ul className="space-y-1">
                          {exp.bullets.map((bullet, i) => (
                            <li key={i}>{bullet}</li>
                          ))}
                        </ul>
                      ) : exp.desc}
                    </div>
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
              <h2 className="text-4xl font-display font-bold text-white leading-tight">Featured Projects</h2>
              <Link to="/shocases" className="inline-flex items-center gap-2 mt-4 text-brand-primary hover:text-white transition-colors text-sm font-bold">
                View Project Slides <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            
            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-end">
              {projectTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveFilter(type)}
                  className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
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
                      <div className="flex gap-2">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-neutral-800 rounded-full transition-colors group/link" title="GitHub Repository">
                            <Github className="w-5 h-5 text-neutral-500 group-hover/link:text-white" />
                          </a>
                        )}
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-neutral-800 rounded-full transition-colors group/link" title="Live Demo">
                          <ExternalLink className="w-5 h-5 text-neutral-500 group-hover/link:text-white" />
                        </a>
                      </div>
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
                    <p className="text-lg font-medium">Porto, Portugal (Available Worldwide)</p>
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

    </>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "About", href: "/#hero" },
    { name: "Experience", href: "/#experience" },
    { name: "Projects", href: "/#projects" },
    { name: "Shocases", href: "/shocases" },
    { name: "Skills", href: "/#skills" },
    { name: "Contact", href: "/#contact" }
  ];

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-brand-primary/20 transition-colors duration-500">
      <nav className="fixed top-0 w-full z-50 border-b border-neutral-800 bg-neutral-950/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-display font-bold text-lg">L</span>
              </div>
              <span className="font-display font-medium text-lg tracking-tight text-white">Benjamim.dev</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                link.href.startsWith("/#") ? (
                   <a 
                    key={link.name} 
                    href={link.href} 
                    className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link 
                    key={link.name} 
                    to={link.href} 
                    className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <a 
                href="#contact" 
                className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors"
              >
                Hire Me
              </a>
            </div>

            <button 
              className="md:hidden p-2 text-neutral-400 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

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
                   link.href.startsWith("/#") ? (
                    <a 
                      key={link.name} 
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-lg font-medium text-neutral-200 hover:text-white"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link 
                      key={link.name} 
                      to={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-lg font-medium text-neutral-200 hover:text-white"
                    >
                      {link.name}
                    </Link>
                  )
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shocases" element={<Showcases />} />
      </Routes>
    </div>
  );
}
