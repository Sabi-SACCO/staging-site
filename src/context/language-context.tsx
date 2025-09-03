"use client";

import React, { createContext, useState, useContext, ReactNode, useMemo } from 'react';
import { translations } from '@/lib/translations';

type Language = 'en' | 'am';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  translations: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'am' : 'en'));
  };

  const currentTranslations = useMemo(() => translations[language], [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations: currentTranslations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
