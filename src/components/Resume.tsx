import React from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Linkedin, ArrowLeft, Printer, Github, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Resume() {
  const navigate = useNavigate();

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTxt = () => {
    const cvContent = `CURRICULUM VITAE - LAURINDO C. BENJAMIM

Porto, Portugal | (+351) 93-344-3506 | laurindocbenjamim@gmail.com
LinkedIn: linkedin.com/in/laurindocbenjamim/
GitHub: github.com/laurindocbenjamim

SUMMARY
Data Engineer with over one years of experience in designing, implementing, and managing data solutions. Proficient in ETL processes, data modeling, and data warehousing. Skilled in Python, SQL, and Azure with hands-on experience in Microsoft Fabric. Partial background in cloud platforms including Azure, AWS and GCP. Fluent in English and adept at collaborating in multicultural and multidisciplinary environments. Specializing in Python, PostgreSQL, and MongoDB, with expertise in MatLAB for advanced signal and image processing.

CORE SKILLS
- Data Engineering: ETL processes, Data modeling, Data pipelines, Microsoft Fabric, Hadoop, Hive.
- Programming: Python, MatLAB, R, SQL, PostgreSQL, MongoDB, TypeScript, React, Java, PHP.
- Cloud Platforms: Azure, AWS, Google Cloud Platform (GCP).
- DevOps: CI/CD, Docker, Git, Nginx, Apache Airflow, Apache Spark.

PROFESSIONAL EXPERIENCE

Full Stack Software Engineer
Camisa10 | March 2026 – Present
- Architecting and developing a high-performance e-commerce platform for sports apparel using FastAPI and React.js.
- Integrating Stripe API for secure payment processing and managing complex data states with PostgreSQL, MongoDB, and Redis.
- Managing deployment and continuous integration on Render, overseen the final 30% of the production launch phase.

Full Stack Software Engineer
Elinara Lab. | Jan 2026 – April 2026
- Engineered a SaaS platform for Agentic AI, orchestrating 5 specialized agents across a microservices architecture.
- Implemented real-time communication protocols using Websockets and Webhooks, optimized by Redis caching.
- Built and integrated custom AI Agents leveraging various LLMs, Python, and FastAPI, with a frontend powered by React and Vite.

FREELANCE DATA ENGINEER
Various Projects | August 2024 – January 2025
- Developed and deployed a machine learning model for stroke prediction achieving 86% accuracy leveraging R.
- Designed and implemented ETL pipelines for waste management data from diverse sources including APIs, CSV, JSON, and SQL.
- Engineered a Machine Learning Pipeline for Airfoil Noise Prediction using SparkML achieving 89% accuracy.

PYTHON AND WEB DEVELOPMENT TRAINER
Charkcoders, Gaia | September 2023 – December 2024
- Trained students in Python and web development, achieving a 75-90% success rate.
- Conducted specialized training for children and teenagers in game development and web technologies.

FULL-STACK DEVELOPER
Instituto Politécnico Privado Esperança do Lubango, Angola | January 2018 - November 2021
- Developed a file management system using Java 10, Spring Boot MVC, Bootstrap, and Javascript.
- Achieved a 98% requirement implementation rate and automated manual administrative processes.

FULL STACK DEVELOPER
ELT - Contas, lda - Lubango | March 2019 - September 2021
- Developed a shopping web application using Laravel 8, Bootstrap, Javascript and JQuery.

EDUCATION
- Tecnologo em Analise e Desenvolvimento de Sistemas, AIEC Brasil (2021)
- Bachelor’s in Computer Engineering, Universidade José Eduardo dos Santos, Angola (2017)

LANGUAGES
- Portuguese (Native)
- English (Fluent)
- Spanish (Basic)

CERTIFICATIONS
- IBM Data Engineering Professional Certificate
- IBM Full Stack Software Developer Professional Certificate`;

    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Laurindo_Benjamim_CV.txt';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-neutral-100 text-slate-900 font-sans py-4 sm:py-12 px-2 sm:px-4 print:bg-white print:py-0">
      <style>{`
        @media print {
          body { background: white !important; }
          .no-print { display: none !important; }
          .page-break { page-break-after: always; }
          @page { margin: 15mm; size: A4; }
        }
      `}</style>
      
      {/* Controls - Hidden on print */}
      <div className="max-w-[210mm] mx-auto mb-6 flex flex-col sm:flex-row gap-4 justify-between items-center print:hidden bg-white/90 p-4 rounded-2xl border border-slate-200 backdrop-blur-md sticky top-4 z-50 shadow-sm">
        <button 
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors font-bold text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>
        <div className="flex flex-wrap justify-center gap-3">
          <div className="relative group">
            <button 
              onClick={handlePrint}
              className="flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-800 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-lg shadow-slate-900/20 active:scale-95"
            >
              <Printer className="w-4 h-4" /> Print professional PDF
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block transition-all z-10 w-48 p-2 bg-slate-800 text-white text-[10px] rounded-lg text-center shadow-xl">
              Pro tip: Select "Save as PDF" as the Printer Destination.
            </div>
          </div>
          <button 
            onClick={handleDownloadTxt}
            className="flex items-center gap-2 bg-white text-slate-900 border-2 border-slate-200 hover:border-slate-900 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all active:scale-95"
          >
            <Download className="w-4 h-4" /> Download .txt
          </button>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-[210mm] w-full mx-auto bg-white shadow-2xl p-6 sm:p-16 print:shadow-none print:p-0 min-h-screen sm:min-h-[297mm] flex flex-col"
      >
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 uppercase text-slate-900">Laurindo C. Benjamim</h1>
          <div className="flex flex-wrap justify-center gap-y-2 gap-x-4 sm:gap-x-6 text-sm text-slate-600 font-medium">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-slate-400" /> Porto, Portugal
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-slate-400" /> (+351) 93-344-3506
            </div>
            <div className="flex items-center gap-1.5 underline decoration-slate-200 underline-offset-4">
              <Mail className="w-4 h-4 text-slate-400" /> laurindocbenjamim@gmail.com
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 mt-3 text-sm text-slate-600 font-medium">
            <div className="flex items-center gap-1.5 text-blue-600">
              <Linkedin className="w-4 h-4" /> linkedin.com/in/laurindocbenjamim/
            </div>
            <div className="flex items-center gap-1.5 text-slate-900">
              <Github className="w-4 h-4" /> github.com/laurindocbenjamim
            </div>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-10 text-justify">
          <h2 className="text-base font-bold border-b border-slate-200 pb-1.5 mb-4 uppercase tracking-widest text-slate-900">Summary</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Data Engineer with over one years of experience in designing, implementing, and managing data solutions. Proficient in ETL processes, data modeling, and data warehousing. Skilled in Python, SQL, and Azure with hands-on experience in Microsoft Fabric. Partial background in cloud platforms including Azure, AWS and GCP. Fluent in English and adept at collaborating in multicultural and multidisciplinary environments. Specializing in Python, PostgreSQL, and MongoDB, with expertise in MatLAB for advanced signal and image processing.
          </p>
        </section>

        {/* Core Skills */}
        <section className="mb-10">
          <h2 className="text-base font-bold border-b border-slate-200 pb-1.5 mb-4 uppercase tracking-widest text-slate-900">Core Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            <div className="flex gap-2">
              <span className="font-bold text-sm text-slate-800 shrink-0">•</span>
              <p className="text-sm text-slate-600"><span className="font-bold text-slate-800">Data Engineering:</span> ETL processes, Data modeling, Data pipelines, Microsoft Fabric, Hadoop, Hive.</p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-sm text-slate-800 shrink-0">•</span>
              <p className="text-sm text-slate-600"><span className="font-bold text-slate-800">Programming:</span> Python, MatLAB, R, SQL, PostgreSQL, MongoDB, TypeScript, React, Java, PHP.</p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-sm text-slate-800 shrink-0">•</span>
              <p className="text-sm text-slate-600"><span className="font-bold text-slate-800">Cloud Platforms:</span> Azure, AWS, Google Cloud Platform (GCP).</p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-sm text-slate-800 shrink-0">•</span>
              <p className="text-sm text-slate-600"><span className="font-bold text-slate-800">DevOps:</span> CI/CD, Docker, Git, Nginx, Apache Airflow, Apache Spark.</p>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-10">
          <h2 className="text-base font-bold border-b border-slate-200 pb-1.5 mb-6 uppercase tracking-widest text-slate-900">Professional Experience</h2>
          
          <div className="space-y-8">
            <div className="break-inside-avoid">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-slate-900 text-base">Full Stack Software Engineer</h3>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">March 2026 – Present</span>
              </div>
              <p className="text-sm font-bold text-slate-700 mb-3">Camisa10</p>
              <ul className="list-disc list-outside ml-4 space-y-1.5 text-sm text-slate-600">
                <li>Architecting and developing a high-performance e-commerce platform for sports apparel using FastAPI and React.js.</li>
                <li>Integrating Stripe API for secure payment processing and managing complex data states with PostgreSQL, MongoDB, and Redis.</li>
                <li>Managing deployment and continuous integration on Render, overseen the final 30% of the production launch phase.</li>
              </ul>
            </div>

            <div className="break-inside-avoid">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-slate-900 text-base">Full Stack Software Engineer</h3>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Jan 2026 – April 2026</span>
              </div>
              <p className="text-sm font-bold text-slate-700 mb-3">Elinara Lab.</p>
              <ul className="list-disc list-outside ml-4 space-y-1.5 text-sm text-slate-600">
                <li>Engineered a SaaS platform for Agentic AI, orchestrating 5 specialized agents across a microservices architecture.</li>
                <li>Implemented real-time communication protocols using Websockets and Webhooks, optimized by Redis caching.</li>
                <li>Built and integrated custom AI Agents leveraging various LLMs, Python, and FastAPI, with a frontend powered by React and Vite.</li>
              </ul>
            </div>

            <div className="break-inside-avoid">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-slate-900 text-base">Freelance Data Engineer</h3>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Aug 2024 – Jan 2025</span>
              </div>
              <p className="text-sm font-bold text-slate-700 mb-3">Various Projects</p>
              <ul className="list-disc list-outside ml-4 space-y-1.5 text-sm text-slate-600">
                <li>Developed and deployed a machine learning model for stroke prediction achieving 86% accuracy leveraging R.</li>
                <li>Designed and implemented ETL pipelines to process waste management data from diverse sources including APIs, CSV, JSON, and SQL.</li>
                <li>Engineered a Machine Learning Pipeline for Airfoil Noise Prediction using SparkML achieving 89% accuracy.</li>
              </ul>
            </div>

            <div className="break-inside-avoid">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-slate-900 text-base">Python and Web Development Trainer</h3>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Sept 2023 – Dec 2024</span>
              </div>
              <p className="text-sm font-bold text-slate-700 mb-3">Charkcoders, Gaia</p>
              <ul className="list-disc list-outside ml-4 space-y-1.5 text-sm text-slate-600">
                <li>Trained students in Python and web development, achieving a 75-90% success rate in skills acquisition.</li>
                <li>Conducted specialized training for children and teenagers in game development and web technologies.</li>
              </ul>
            </div>

            <div className="break-inside-avoid">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-slate-900 text-base">Full-Stack Developer</h3>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Jan 2018 – Nov 2021</span>
              </div>
              <p className="text-sm font-bold text-slate-700 mb-3">IPPE Lubango (Angola)</p>
              <ul className="list-disc list-outside ml-4 space-y-1.5 text-sm text-slate-600">
                <li>Developed a file management system using Java 10, Spring Boot MVC, Bootstrap, and Javascript.</li>
                <li>Achieved a 98% requirement implementation rate and automated manual administrative processes.</li>
              </ul>
            </div>

            <div className="break-inside-avoid">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-slate-900 text-base">Full Stack Developer</h3>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">March 2019 – Sept 2021</span>
              </div>
              <p className="text-sm font-bold text-slate-700 mb-3">ELT - Contas, lda - Lubango</p>
              <ul className="list-disc list-outside ml-4 space-y-1.5 text-sm text-slate-600">
                <li>Developed a shopping web application using Laravel 8, Bootstrap, Javascript and JQuery.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Featured Projects Selection */}
        <section className="mb-10 break-inside-avoid">
          <h2 className="text-base font-bold border-b border-slate-200 pb-1.5 mb-6 uppercase tracking-widest text-slate-900">Featured Projects</h2>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:justify-between items-start">
               <h4 className="font-bold text-sm text-slate-800 italic">ASun Browser AI Agent</h4>
               <span className="text-[10px] text-slate-400 font-bold uppercase">React, FastAPI, Agentic AI</span>
            </div>
            <p className="text-sm text-slate-600 -mt-3">Intelligent browser agent for automation and pentesting in dynamic web environments.</p>

            <div className="flex flex-col sm:flex-row sm:justify-between items-start pt-2">
               <h4 className="font-bold text-sm text-slate-800 italic">Radar Sentinel</h4>
               <span className="text-[10px] text-slate-400 font-bold uppercase">Python, NLP, Discord API</span>
            </div>
            <p className="text-sm text-slate-600 -mt-3">AI-driven financial analysis bot delivering instant market insights from global indicators.</p>
          </div>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Education */}
          <section className="break-inside-avoid">
            <h2 className="text-base font-bold border-b border-slate-200 pb-1.5 mb-4 uppercase tracking-widest text-slate-900">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Tecnologo em Analise e Desenvolvimento de Sistemas</h3>
                <p className="text-xs text-slate-600">AIEC Brasil | 2021</p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Bachelor’s in Computer Engineering</h3>
                <p className="text-xs text-slate-600">Universidade José Eduardo dos Santos, Angola | 2017</p>
              </div>
            </div>
          </section>

          {/* Languages & Certs */}
          <div className="space-y-8">
            <div className="break-inside-avoid">
              <h2 className="text-base font-bold border-b border-slate-200 pb-1.5 mb-4 uppercase tracking-widest text-slate-900">Languages</h2>
              <div className="flex flex-wrap gap-x-6 text-sm text-slate-600 font-medium">
                <p>Portuguese (Native)</p>
                <p>English (Fluent)</p>
                <p>Spanish (Basic)</p>
              </div>
            </div>
            <div className="break-inside-avoid">
              <h2 className="text-base font-bold border-b border-slate-200 pb-1.5 mb-4 uppercase tracking-widest text-slate-900">Certifications</h2>
              <ul className="text-xs text-slate-600 space-y-1 font-medium">
                <li>IBM Data Engineering Professional Certificate</li>
                <li>IBM Full Stack Software Developer Certificate</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Print Footer */}
        <p className="hidden print:block text-center text-[10px] text-slate-400 mt-12 pt-8 border-t border-slate-100 italic">
          Resume generated directly from benjamim.dev portfolio. 
          Scan for digital version and complete project source code.
        </p>
      </motion.div>
    </div>
  );
}
