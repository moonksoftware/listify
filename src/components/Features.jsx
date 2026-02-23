import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import Reveal from './Reveal';

const FEATURES = [
    { icon: 'fa-basket-shopping', color: 'text-brand-600 dark:text-brand-400', bg: 'bg-brand-100 dark:bg-brand-900/50', titleKey: 'feature1_title', descKey: 'feature1_desc', detailKey: 'feature1_detail' },
    { icon: 'fa-check-to-slot', color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-100 dark:bg-blue-900/30', titleKey: 'feature2_title', descKey: 'feature2_desc', detailKey: 'feature2_detail' },
    { icon: 'fa-share-nodes', color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-100 dark:bg-purple-900/30', titleKey: 'feature3_title', descKey: 'feature3_desc', detailKey: 'feature3_detail' },
    { icon: 'fa-wand-magic-sparkles', color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-100 dark:bg-amber-900/30', titleKey: 'feature4_title', descKey: 'feature4_desc', detailKey: 'feature4_detail' },
    { icon: 'fa-heart', color: 'text-rose-600 dark:text-rose-400', bg: 'bg-rose-100 dark:bg-rose-900/30', titleKey: 'feature5_title', descKey: 'feature5_desc', detailKey: 'feature5_detail', span: 'sm:col-span-2 lg:col-span-2' },
];

const Features = () => {
    const { t } = useLanguage();
    const { theme } = useTheme();

    return (
        <section className={`py-16 md:py-24 transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-800' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {FEATURES.map((f, idx) => (
                        <div
                            key={idx}
                            className={`bg-gray-50 dark:bg-slate-700/50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-slate-700 group h-full hover:scale-[1.02] animate-fade-in-up ${f.span || ''}`}
                            style={{ animationDelay: `${idx * 100}ms` }}
                        >
                            <div className={`w-12 h-12 ${f.bg} ${f.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <i className={`fa-solid ${f.icon} text-xl`}></i>
                            </div>
                            <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                                {t[f.titleKey]}
                            </h3>
                            <p className={`leading-relaxed mb-2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                                {t[f.descKey]}
                            </p>
                            <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                                {t[f.detailKey]}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                        <p className={`text-lg font-medium text-brand-600 dark:text-brand-400`}>
                            {t.free_text}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
