import { useSiteContent } from "../context/SiteContentContext";
const Footer = () => { const { content } = useSiteContent(); return <footer className="px-[5%] lg:px-[10%]"><div className="border-t border-white/10 py-6 text-center text-sm text-slate-500">© {new Date().getFullYear()} {content.about.name} · {content.about.location}</div></footer>; };
export default Footer;
