import { Linkedin, Mail, Phone } from "lucide-react";
const socialLinks = [
  { name: "LinkedIn", displayName: "Connect on LinkedIn", subText: "Professional profile", icon: Linkedin, url: "https://linkedin.com/in/mohamed-hosny28", color: "#0A66C2" },
  { name: "Email", displayName: "Send an email", subText: "mohamedhosny2819@gmail.com", icon: Mail, url: "mailto:mohamedhosny2819@gmail.com", color: "#a78bfa" },
  { name: "Phone", displayName: "Call Mohamed", subText: "+20 112 162 3973", icon: Phone, url: "tel:+201121623973", color: "#34d399" },
];
export default function SocialLinks() {
  return <div className="flex flex-wrap justify-center gap-3">{socialLinks.map(({name, displayName, subText, icon: Icon, url, color})=><a key={name} href={url} target={url.startsWith("http") ? "_blank" : undefined} rel={url.startsWith("http") ? "noopener noreferrer" : undefined} className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 hover:bg-white/[0.08] transition-colors"><Icon size={20} style={{color}}/><span className="text-left"><span className="block text-sm font-medium text-white">{displayName}</span><span className="block text-xs text-slate-400">{subText}</span></span></a>)}</div>;
}
