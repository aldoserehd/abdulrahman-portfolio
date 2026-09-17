import React, { createContext, useContext, useEffect, useState } from "react";
import { content, type Content, type Lang } from "@/content";

interface LanguageContextType {
  language: Lang;
  isArabic: boolean;
  toggleLanguage: () => void;
  c: Content;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "ar") return saved;
  } catch {}
  return "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Lang>(initialLang);

  useEffect(() => {
    const el = document.documentElement;
    el.lang = language;
    el.dir = language === "ar" ? "rtl" : "ltr";
    try {
      localStorage.setItem("lang", language);
    } catch {}
  }, [language]);

  const toggleLanguage = () => setLanguage((p) => (p === "en" ? "ar" : "en"));

  return (
    <LanguageContext.Provider
      value={{ language, isArabic: language === "ar", toggleLanguage, c: content[language] as Content }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
