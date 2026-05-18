import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export const ResumeHeader = () => (
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
);

export const ResumeExperienceItem = ({ title, company, date, bullets }: { title: string, company: string, date: string, bullets: string[] }) => (
  <div className="break-inside-avoid mb-8">
    <div className="flex justify-between items-baseline mb-1">
      <h3 className="font-bold text-slate-900 text-base">{title}</h3>
      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{date}</span>
    </div>
    <p className="text-sm font-bold text-slate-700 mb-3">{company}</p>
    <ul className="list-disc list-outside ml-4 space-y-1.5 text-sm text-slate-600">
      {bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
    </ul>
  </div>
);
