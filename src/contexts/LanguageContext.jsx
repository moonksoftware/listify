import React, { createContext, useContext, useState, useEffect } from 'react';
import translationsData from '../translations.json';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');
    const [translations, setTranslations] = useState(translationsData[language]);

    useEffect(() => {
        setTranslations(translationsData[language]);
        localStorage.setItem('language', language);
        document.documentElement.lang = language;
    }, [language]);

    const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === 'en' ? 'tr' : 'en'));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t: translations }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
