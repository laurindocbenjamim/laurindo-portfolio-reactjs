import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, Printer, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ResumeHeader, ResumeExperienceItem } from "./resume/ResumeBase";

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
Data Engineer with over one years of experience in designing, implementing, and managing data solutions. Proficient in ETL processes, data modeling, and data warehousing. Skilled in Python, SQL, and Azure. Specialized in Databricks, Spark, and Data Lake architectures. Specializing in Python, PostgreSQL, and MongoDB, with expertise in MatLAB for advanced signal and image processing.

CORE SKILLS
- Data Engineering: Databricks, Spark, ETL processes, Data modeling, Data pipelines, Microsoft Fabric, Hadoop, Hive.
- Programming: Python, MatLAB, R, SQL, PostgreSQL, MongoDB, TypeScript, React, Java, PHP.
- Cloud Platforms: Azure, AWS, Google Cloud Platform (GCP).
- DevOps: CI/CD, Docker, Git, Nginx, Apache Airflow.

PROFESSIONAL EXPERIENCE

Full Stack Software Engineer (Project Lead - SpectraLab)
SpectraLab | 2026 - Present
- Architected and developed SpectraLab, a high-performance modular monolithic web application for spectroscopy analysis.
- Implemented real-time chemometrics processing supporting multiple file formats (.csv, .sp).
- Integrated unsupervised and supervised learning algorithms (PCA, PLS-DA, RAMAN) with interactive visualizations using Python and React.

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

Data Engineer (Contract/Freelance)
Azure, Databricks & Big Data Solutions | May 2025 - Oct 2025
- Architected and implemented production-grade Databricks pipelines on Azure, integrating PostgreSQL, APIs, and CSV sources into centralized Delta Lakes.
- Orchestrated complex data workflows using Apache Airflow for automated scheduling and dependency management of ETL jobs.
- Processed massive datasets using Hadoop (HDFS/Hive), optimizing storage and query performance for analytical reporting.

Data Pipeline Architect (Personal Projects)
Real-time Streaming & Kafka | Jan 2025 - Present
- Engineered a real-time market sentiment analyzer using Apache Kafka for high-throughput ingestion and Spark Streaming for live processing.
- Integrated financial APIs into a resilient Kafka cluster, ensuring zero data loss during high-volatility periods.
- Developed sub-second alerting systems triggered by Spark stateful processing windows.

FREELANCE DATA & SOFTWARE ENGINEER
Personal Projects | January 2024 – Present
- Developed a modular Shopping Application (7 modules) with Python/Flask and PostgreSQL, deployed on Heroku. Implemented TDD processes and built foundations for automated ML-driven invoice features.
- Engineered a full-scale ETL Pipeline for IBM/Coursera waste recycling project: processed diverse sources, designed a Data Warehouse, and created analytical Dashboards using Shell Scripting and Aggregation queries (89% data accuracy).
- Developed a Weather Extraction application using Shell Script and the wttr.in repository for automated environmental data collection.

FULL-STACK DEVELOPER
Instituto Politécnico Privado Esperança do Lubango, Angola | January 2018 - November 2021
- Developed a file management system using Java 10, Spring Boot MVC, Bootstrap, and Javascript.
- Achieved a 98% requirement implementation rate and automated manual administrative processes.

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
          @page { margin: 15mm; size: A4; }
        }
      `}</style>
      
      {/* Controls */}
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
        <ResumeHeader />

        {/* Summary */}
        <section className="mb-10 text-justify">
          <h2 className="text-base font-bold border-b border-slate-200 pb-1.5 mb-4 uppercase tracking-widest text-slate-900">Summary</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Data Engineer with over one years of experience in designing, implementing, and managing data solutions. Proficient in ETL processes, data modeling, and data warehousing. Skilled in Python, SQL, and Azure. Specialized in Databricks, Spark, and Data Lake architectures for production environments. Specializing in Python, PostgreSQL, and MongoDB, with expertise in MatLAB for advanced signal and image processing.
          </p>
        </section>

        {/* Core Skills */}
        <section className="mb-10">
          <h2 className="text-base font-bold border-b border-slate-200 pb-1.5 mb-4 uppercase tracking-widest text-slate-900">Core Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            <div className="flex gap-2">
              <span className="font-bold text-sm text-slate-800 shrink-0">•</span>
              <p className="text-sm text-slate-600"><span className="font-bold text-slate-800">Big Data:</span> Databricks, Apache Spark, Delta Lake, Hadoop, Hive.</p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-sm text-slate-800 shrink-0">•</span>
              <p className="text-sm text-slate-600"><span className="font-bold text-slate-800">ETL/ELT:</span> Spark, Apache Airflow, Data Pipelines, Microsoft Fabric.</p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-sm text-slate-800 shrink-0">•</span>
              <p className="text-sm text-slate-600"><span className="font-bold text-slate-800">Software:</span> Python, TypeScript, React, FastAPI, SQL, MatLAB, R.</p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-sm text-slate-800 shrink-0">•</span>
              <p className="text-sm text-slate-600"><span className="font-bold text-slate-800">Databases:</span> PostgreSQL, MongoDB, Redis, MySQL, Data Warehousing.</p>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-10">
          <h2 className="text-base font-bold border-b border-slate-200 pb-1.5 mb-6 uppercase tracking-widest text-slate-900">Professional Experience</h2>
          
          <div className="space-y-2">
            <ResumeExperienceItem 
              title="Full Stack Software Engineer (Project Lead)"
              company="SpectraLab - Spectroscopy Analysis"
              date="2026 - Present"
              bullets={[
                "Architected and developed SpectraLab, a high-performance modular monolithic web application for chemometrics processing.",
                "Implemented real-time preprocessing and data ingestion for multiple spectroscopy file formats (.csv, .sp).",
                "Built and integrated PCA, PLS-DA, and RAMAN algorithms returning interactive d3.js visualizations for analytical chemistry."
              ]}
            />
            <ResumeExperienceItem 
              title="Full Stack Software Engineer"
              company="Camisa10"
              date="March 2026 – Present"
              bullets={[
                "Architecting and developing a high-performance e-commerce platform for sports apparel using FastAPI and React.js.",
                "Integrating Stripe API for secure payment processing and managing complex data states with PostgreSQL, MongoDB, and Redis.",
                "Managing deployment and continuous integration on Render, overseen the final 30% of the production launch phase."
              ]}
            />
            <ResumeExperienceItem 
              title="Full Stack Software Engineer"
              company="Elinara Lab."
              date="Jan 2026 – April 2026"
              bullets={[
                "Engineered a SaaS platform for Agentic AI, orchestrating 5 specialized agents across a microservices architecture.",
                "Implemented real-time communication protocols using Websockets and Webhooks, optimized by Redis caching.",
                "Built and integrated custom AI Agents leveraging various LLMs, Python, and FastAPI, with a frontend powered by React and Vite."
              ]}
            />
            <ResumeExperienceItem 
              title="Data Engineer (Contract)"
              company="Azure, Databricks & Big Data Solutions"
              date="May 2025 - Oct 2025"
              bullets={[
                "Architected and implemented production-grade Databricks pipelines on Azure, integrating PostgreSQL, APIs, and CSV sources into centralized Delta Lakes.",
                "Orchestrated complex data workflows using Apache Airflow for automated scheduling and dependency management of ETL jobs.",
                "Processed massive datasets using Hadoop (HDFS/Hive), optimizing storage and query performance for analytical reporting."
              ]}
            />
            <ResumeExperienceItem 
              title="Data Pipeline Architect (Personal Projects)"
              company="Real-time Streaming & Kafka"
              date="Jan 2025 - Present"
              bullets={[
                "Engineered a real-time market sentiment analyzer using Apache Kafka for high-throughput ingestion and Spark Streaming for live processing.",
                "Integrated financial APIs into a resilient Kafka cluster, ensuring zero data loss during high-volatility periods.",
                "Developed sub-second alerting systems triggered by Spark stateful processing windows."
              ]}
            />
          </div>
        </section>

        {/* Continue on next page if needed - Simplified sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-auto pt-8 border-t border-slate-100">
          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-4 items-center flex gap-2">
              <span className="w-1.5 h-4 bg-slate-900 rounded-full inline-block"></span>
              Education
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Tecnologo em Analise e Desenvolvimento de Sistemas</h3>
                <p className="text-xs text-slate-600">AIEC Brasil | 2021</p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Bachelor’s in Computer Engineering</h3>
                <p className="text-xs text-slate-600">UJES Angola | 2017</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-4 items-center flex gap-2">
              <span className="w-1.5 h-4 bg-slate-900 rounded-full inline-block"></span>
              Certifications
            </h2>
            <ul className="text-xs text-slate-600 space-y-1.5 font-medium">
              <li>• IBM Data Engineering Professional Certificate</li>
              <li>• IBM Full Stack Software Developer Certificate</li>
              <li>• IBM Data Science Certificate</li>
            </ul>
          </section>
        </div>

        <p className="hidden print:block text-center text-[10px] text-slate-400 mt-8 pt-4 border-t border-slate-50 italic">
          Resume generated from benjamim.dev | Scan for full project source code
        </p>
      </motion.div>
    </div>
  );
}
