import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 py-12 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
                        <Link to="/listify" className="flex items-center gap-2">
                            <img src="/images/icon.png" alt="Listify" className="w-6 h-6 rounded-md" />
                            <span className="font-bold text-slate-900 dark:text-white">{t.brand_name}</span>
                        </Link>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400" dangerouslySetInnerHTML={{ __html: t.copyright }}>
                    </p>
                </div>
                <div className="flex gap-6 text-sm text-slate-500 dark:text-slate-400">
                    <a href="/listify/privacy.html" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                        {t.privacy_policy}
                    </a>
                    {/* <Link to="/terms" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
            {t.terms_of_use}
          </Link> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
