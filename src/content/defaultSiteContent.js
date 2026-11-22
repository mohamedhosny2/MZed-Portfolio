export const defaultSiteContent = {
  brandName: "M.Zed",
  home: {
    title: "Application\nSupport Engineer",
    rotatingTitles: ["Banking Applications", "Production Support", "AI Workflow Automation"],
    description: "Senior Application Support Engineer experienced in enterprise banking platforms, incident management, deployments, UAT, and production reliability.",
    techStack: ["SQL / PL-SQL", "IIS & ETL", "KYC / AML / CFT", "L2 / L3 Support"],
    animationUrl: "Animation1.gif",
    projectsButton: "Projects",
    contactButton: "Contact",
  },
  about: {
    name: "Mohamed Abdelzaher",
    role: "Senior Application Support Engineer",
    summary: "I support enterprise banking applications across production operations, incident management, deployments, and UAT. My work spans SQL/PL-SQL, IIS, ETL, KYC/AML/CFT, and watchlist screening, with a focus on clear communication and reliable service.",
    location: "Giza, Egypt",
    email: "mohamedhosny2819@gmail.com",
    phone: "+20 112 162 3973",
    cvFile: "Mohamed-Abdelzaher.pdf",
    photoFile: "Mohamed-Abdelzaher.jpg",
    closingLine: "Reliable service, thoughtful analysis, and clear communication.",
  },
  highlights: [
    { value: "3 Years", label: "Professional Experience" },
    { value: "Banking", label: "Enterprise Applications" },
    { value: "L2 / L3", label: "Production Support" },
  ],
  experience: [
    { role: "Senior Application Support Engineer", company: "Data Gear", period: "June 2024 – Present", details: "Deliver L2/L3 production support for enterprise banking applications, including KYC, AML/CFT, and watchlist screening. Investigate incidents using SQL, ETL, IIS, and log analysis; execute deployments, release validation, and UAT; manage SSL certificates, licenses, and production monitoring; and build AI workflows for log analysis and email automation." },
    { role: "Web Development Instructor", company: "Route Academy", period: "", details: "Delivered web development training and mentored students." },
  ],
  education: ["B.Sc. Computer Science — Cairo University, 2023", "IT Masters Diploma — Route Academy", "Master's Degree — In Progress"],
  skills: ["Production Support", "L2/L3 Support", "SQL / PL-SQL", "IIS", "ETL", "REST APIs", "KYC / AML / CFT", "Watchlist Screening", "UAT", "Root Cause Analysis", "JSON / XML", "Windows / Linux", "Java / Spring Boot", "AI Workflow Automation"],
  certifications: ["Claude 101", "IT Masters Diploma — Route Academy", "WordPress — Coursera", "AWS Cloud Practitioner — In Progress"],
  languages: ["Arabic (Native)", "English (Professional Working Proficiency)"],
  contact: {
    title: "Contact Me",
    subtitle: "Have a question or opportunity? Send a message and I will get back to you.",
    cardTitle: "Contact",
    cardSubtitle: "Discuss a support role, project, or collaboration.",
    sendButton: "Send Message",
  },
  socialLinks: [
    { id: "github", label: "GitHub", url: "https://github.com/mohamedhosny2" },
    { id: "facebook", label: "Facebook", url: "" },
    { id: "instagram", label: "Instagram", url: "" },
    { id: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/mohamed-hosny28" },
  ],
};

export function mergeSiteContent(saved) {
  if (!saved || typeof saved !== "object") return defaultSiteContent;
  return {
    ...defaultSiteContent,
    ...saved,
    home: { ...defaultSiteContent.home, ...saved.home },
    about: { ...defaultSiteContent.about, ...saved.about },
    contact: { ...defaultSiteContent.contact, ...saved.contact },
    highlights: Array.isArray(saved.highlights) ? saved.highlights : defaultSiteContent.highlights,
    experience: Array.isArray(saved.experience) ? saved.experience : defaultSiteContent.experience,
    education: Array.isArray(saved.education) ? saved.education : defaultSiteContent.education,
    skills: Array.isArray(saved.skills) ? saved.skills : defaultSiteContent.skills,
    certifications: Array.isArray(saved.certifications) ? saved.certifications : defaultSiteContent.certifications,
    languages: Array.isArray(saved.languages) ? saved.languages : defaultSiteContent.languages,
    socialLinks: Array.isArray(saved.socialLinks) ? saved.socialLinks : defaultSiteContent.socialLinks,
  };
}
