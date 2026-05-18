import React from "react";

export const ResumeSection = ({ title, children, className = "" }: { title: string, children: React.ReactNode, className?: string }) => (
  <section className={`mb-10 ${className}`}>
    <h2 className="text-base font-bold border-b border-slate-200 pb-1.5 mb-4 uppercase tracking-widest text-slate-900">{title}</h2>
    {children}
  </section>
);

export const BulletList = ({ bullets }: { bullets: string[] }) => (
  <ul className="list-disc list-outside ml-4 space-y-1.5 text-sm text-slate-600">
    {bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
  </ul>
);
