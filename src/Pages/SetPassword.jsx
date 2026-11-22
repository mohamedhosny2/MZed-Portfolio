import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LockKeyhole, Save } from "lucide-react";
import { isSupabaseConfigured, supabase } from "../supabase";

export default function SetPassword() {
  const navigate = useNavigate();
  const [hasSession, setHasSession] = useState(false);
  const [password, setPassword] = useState("");
  const [repeat, setRepeat] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!isSupabaseConfigured) return;
    let active = true;
    supabase.auth.getSession().then(({ data }) => {
      if (active) setHasSession(Boolean(data.session));
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (active && session) setHasSession(true);
    });
    return () => { active = false; subscription.unsubscribe(); };
  }, []);

  const submit = async event => {
    event.preventDefault();
    setMessage("");
    if (password.length < 8) return setMessage("خلي كلمة المرور 8 أحرف على الأقل.");
    if (password !== repeat) return setMessage("كلمتا المرور مش متطابقتين.");
    setBusy(true);
    const { error } = await supabase.auth.updateUser({ password });
    setBusy(false);
    if (error) return setMessage(error.message);
    setMessage("تم تعيين كلمة المرور. هحوّلك لصفحة تسجيل الدخول.");
    setTimeout(() => navigate("/login", { replace: true }), 1200);
  };

  return <main className="grid min-h-screen place-items-center px-4 text-white"><section className="w-full max-w-md rounded-2xl border border-white/10 bg-white/[.05] p-7 shadow-2xl"><div className="mb-6 text-center"><LockKeyhole className="mx-auto mb-3 h-9 w-9 text-violet-300"/><h1 className="text-2xl font-bold">تعيين كلمة مرور الداشبورد</h1><p className="mt-2 text-sm text-slate-400">اختار كلمة مرور لحساب إدارة البورتفوليو.</p></div>{!isSupabaseConfigured ? <p className="text-center text-sm text-rose-300">إعدادات تسجيل الدخول غير متاحة حاليًا.</p> : !hasSession ? <div className="space-y-4 text-center"><p className="text-sm text-slate-300">افتح رابط الدعوة الأحدث من بريدك الإلكتروني للوصول إلى النموذج.</p><Link to="/login" className="inline-block text-sm text-violet-300 underline">العودة لتسجيل الدخول</Link></div> : <form onSubmit={submit} className="space-y-4"><label className="block space-y-2 text-sm text-slate-300">كلمة المرور<input type="password" minLength={8} required autoComplete="new-password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full rounded-xl border border-white/10 bg-[#0d0d22] px-4 py-3 text-white outline-none focus:border-violet-400/60"/></label><label className="block space-y-2 text-sm text-slate-300">تأكيد كلمة المرور<input type="password" minLength={8} required autoComplete="new-password" value={repeat} onChange={e=>setRepeat(e.target.value)} className="w-full rounded-xl border border-white/10 bg-[#0d0d22] px-4 py-3 text-white outline-none focus:border-violet-400/60"/></label><button disabled={busy} className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-3 font-semibold disabled:opacity-60"><Save size={17}/>{busy?"جاري الحفظ...":"حفظ كلمة المرور"}</button></form>}{message&&<p role="status" className="mt-4 text-center text-sm text-violet-200">{message}</p>}</section></main>;
}
