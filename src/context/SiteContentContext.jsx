import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { isSupabaseConfigured, supabase } from "../supabase";
import { defaultSiteContent, mergeSiteContent } from "../content/defaultSiteContent";

const SiteContentContext = createContext(null);

export function SiteContentProvider({ children }) {
  const [content, setContent] = useState(defaultSiteContent);
  const [loading, setLoading] = useState(isSupabaseConfigured);

  useEffect(() => {
    if (!isSupabaseConfigured) return;
    let active = true;
    supabase
      .from("site_settings")
      .select("settings")
      .eq("id", "portfolio")
      .maybeSingle()
      .then(({ data, error }) => {
        if (!active) return;
        if (error) console.error("Could not load portfolio settings:", error.message);
        if (data?.settings) setContent(mergeSiteContent(data.settings));
        setLoading(false);
      })
      .catch((error) => {
        if (active) {
          console.error("Could not load portfolio settings:", error);
          setLoading(false);
        }
      });
    return () => { active = false; };
  }, []);

  const saveContent = useCallback(async (nextContent) => {
    if (!isSupabaseConfigured) throw new Error("Supabase is not configured yet.");
    const { error } = await supabase.from("site_settings").upsert({
      id: "portfolio",
      settings: nextContent,
      updated_at: new Date().toISOString(),
    });
    if (error) throw error;
    setContent(mergeSiteContent(nextContent));
  }, []);

  return (
    <SiteContentContext.Provider value={{ content, loading, saveContent }}>
      {children}
    </SiteContentContext.Provider>
  );
}

export function useSiteContent() {
  const value = useContext(SiteContentContext);
  if (!value) throw new Error("useSiteContent must be used inside SiteContentProvider");
  return value;
}
