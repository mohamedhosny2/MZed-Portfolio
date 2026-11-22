import { Facebook, Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { useSiteContent } from "../context/SiteContentContext";

const iconById = { github: Github, facebook: Facebook, instagram: Instagram, linkedin: Linkedin };
const colorById = { github: "#e2e8f0", facebook: "#1877F2", instagram: "#E4405F", linkedin: "#0A66C2" };

export default function SocialLinks({ compact = false }) {
  const { content } = useSiteContent();
  const socialLinks = [
    ...content.socialLinks.map((item) => ({
      ...item,
      icon: iconById[item.id] || Github,
      displayName: item.label,
      subText: item.url || "Add profile link in dashboard",
      color: colorById[item.id] || "#a78bfa",
    })),
    { id: "email", displayName: "Send an email", subText: content.about.email, icon: Mail, url: `mailto:${content.about.email}`, color: "#a78bfa" },
    { id: "phone", displayName: "Call Mohamed", subText: content.about.phone, icon: Phone, url: `tel:${content.about.phone.replace(/[^+\d]/g, "")}`, color: "#34d399" },
  ];

  return <div className={`flex flex-wrap ${compact ? "justify-start gap-3" : "justify-center gap-3"}`}>
    {socialLinks.map(({ id, displayName, subText, icon: Icon, url, color }) => {
      const enabled = Boolean(url);
      const className = compact
        ? `rounded-xl border border-white/10 bg-black/50 p-3 transition-colors ${enabled ? "hover:border-white/20" : "cursor-not-allowed opacity-60"}`
        : `flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 transition-colors ${enabled ? "hover:bg-white/[0.08]" : "cursor-not-allowed opacity-70"}`;
      const body = compact
        ? <Icon size={20} style={{ color }} />
        : <><Icon size={20} style={{ color }} /><span className="text-left"><span className="block text-sm font-medium text-white">{displayName}</span><span className="block max-w-48 truncate text-xs text-slate-400">{subText}</span></span></>;

      return enabled
        ? <a key={id} href={url} target={url.startsWith("http") ? "_blank" : undefined} rel={url.startsWith("http") ? "noopener noreferrer" : undefined} aria-label={displayName} className={className}>{body}</a>
        : <span key={id} aria-label={`${displayName} link not set`} aria-disabled="true" title={`Add ${displayName} URL in dashboard`} className={className}>{body}</span>;
    })}
  </div>;
}
