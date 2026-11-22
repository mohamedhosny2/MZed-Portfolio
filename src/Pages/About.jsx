import { useEffect } from "react";
import { FileText, Code, Award, MapPin, Mail, Phone, BriefcaseBusiness } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = ["Production Support", "L2/L3 Support", "SQL / PL-SQL", "IIS", "ETL", "REST APIs", "KYC / AML / CFT", "Watchlist Screening", "UAT", "Root Cause Analysis", "JSON / XML", "Windows / Linux", "Java / Spring Boot", "AI Workflow Automation"];
const experience = [
  { role: "Senior Application Support Engineer", company: "Data Gear", period: "June 2024 – Present", details: "Deliver L2/L3 production support for enterprise banking applications, including KYC, AML/CFT, and watchlist screening. Investigate incidents using SQL, ETL, IIS, and log analysis; execute deployments, release validation, and UAT; manage SSL certificates, licenses, and production monitoring; and build AI workflows for log analysis and email automation." },
  { role: "Web Development Instructor", company: "Route Academy", period: "", details: "Delivered web development training and mentored students." },
];
const education = ["B.Sc. Computer Science — Cairo University, 2023", "IT Masters Diploma — Route Academy", "Master's Degree — In Progress"];
const highlights = [
  { value: "3 Years", label: "Professional Experience", icon: BriefcaseBusiness },
  { value: "Banking", label: "Enterprise Applications", icon: Code },
  { value: "L2 / L3", label: "Production Support", icon: Award },
];

const AboutPage = () => {
  useEffect(() => { AOS.init({ once: true }); }, []);
  return <section id="About" className="text-white px-[5%] lg:px-[10%] pt-24 pb-20 scroll-mt-16">
    <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
      <div className="space-y-6 text-center lg:text-left" data-aos="fade-right">
        <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Hello, I&apos;m</span>
          <span className="mt-2 block text-gray-100">Mohamed Abdelzaher</span>
        </h2>
        <p className="text-lg font-medium text-violet-300 sm:text-xl">Senior Application Support Engineer</p>
        <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
          I support enterprise banking applications across production operations, incident management, deployments, and UAT. My work spans SQL/PL-SQL, IIS, ETL, KYC/AML/CFT, and watchlist screening, with a focus on clear communication and reliable service.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-slate-400 lg:justify-start">
          <span className="inline-flex items-center gap-2"><MapPin size={16} className="text-violet-300"/>Giza, Egypt</span>
          <a className="inline-flex items-center gap-2 hover:text-white" href="mailto:mohamedhosny2819@gmail.com"><Mail size={16} className="text-violet-300"/>Email</a>
          <a className="inline-flex items-center gap-2 hover:text-white" href="tel:+201121623973"><Phone size={16} className="text-violet-300"/>+20 112 162 3973</a>
        </div>
        <div className="relative inline-flex max-w-2xl items-center rounded-2xl border border-indigo-400/30 bg-gradient-to-r from-indigo-500/[0.08] to-purple-500/[0.08] px-5 py-4 text-left text-sm font-medium italic text-slate-200 shadow-xl sm:text-base">
          Reliable service, thoughtful analysis, and clear communication.
        </div>
        <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:justify-center lg:justify-start">
          <a href="/Mohamed-Abdelzaher.pdf" download className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-900/30 transition hover:brightness-110"><FileText size={18}/>Download CV</a>
          <a href="#Portofolio" className="inline-flex items-center justify-center gap-2 rounded-xl border border-violet-400/40 px-6 py-3 font-semibold text-violet-300 transition hover:bg-violet-400/10"><Code size={18}/>View Projects</a>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end" data-aos="fade-left">
        <div className="relative">
          <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-cyan-400/20 blur-2xl" />
          <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-white/20 shadow-[0_0_50px_rgba(120,119,198,0.25)] sm:h-96 sm:w-96">
            <img src="/Mohamed-Abdelzaher.jpg" alt="Mohamed Abdelzaher" className="h-full w-full object-cover object-center" />
          </div>
        </div>
      </div>
    </div>

    <div className="mx-auto mt-16 grid max-w-7xl gap-5 md:grid-cols-3" data-aos="fade-up">
      {highlights.map(({value, label, icon: Icon}) => <article key={label} className="rounded-2xl border border-white/10 bg-white/[0.045] p-6 transition hover:border-violet-400/30">
        <div className="mb-5 flex items-center justify-between"><Icon className="h-8 w-8 text-violet-300"/><span className="text-3xl font-bold text-white">{value}</span></div>
        <p className="text-sm uppercase tracking-wider text-slate-300">{label}</p>
      </article>)}
    </div>

    <div className="mx-auto mt-20 grid max-w-7xl gap-12 lg:grid-cols-2">
      <div data-aos="fade-up">
        <h3 className="text-2xl font-semibold">Professional Experience</h3>
        <div className="mt-6 space-y-4">{experience.map(item=><article key={item.role} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
          <div className="flex flex-wrap justify-between gap-2"><h4 className="font-semibold">{item.role} <span className="text-violet-300">· {item.company}</span></h4>{item.period&&<span className="text-sm text-slate-400">{item.period}</span>}</div>
          <p className="mt-3 text-sm leading-6 text-slate-300">{item.details}</p>
        </article>)}</div>
      </div>
      <div className="space-y-10" data-aos="fade-up">
        <div><h3 className="text-2xl font-semibold">Core Skills</h3><div className="mt-5 flex flex-wrap gap-2">{skills.map(skill=><span key={skill} className="rounded-full border border-violet-400/20 bg-violet-400/[0.07] px-3 py-2 text-sm text-slate-200">{skill}</span>)}</div></div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div><h3 className="text-xl font-semibold">Education</h3><ul className="mt-4 space-y-3 text-sm text-slate-300">{education.map(x=><li key={x} className="border-l-2 border-violet-400/50 pl-3">{x}</li>)}</ul></div>
          <div><h3 className="flex items-center gap-2 text-xl font-semibold"><Award size={19} className="text-violet-300"/>Certifications</h3><ul className="mt-4 space-y-2 text-sm text-slate-300"><li>Claude 101</li><li>IT Masters Diploma</li><li>WordPress — Coursera</li><li>AWS Cloud Practitioner — In Progress</li></ul></div>
        </div>
        <p className="text-sm text-slate-400">Arabic (Native) <span className="mx-2 text-violet-400">·</span> English (Professional Working Proficiency)</p>
      </div>
    </div>
  </section>;
};
export default AboutPage;
