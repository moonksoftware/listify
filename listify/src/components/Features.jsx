import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Reveal from './Reveal';

const FeatureCard = ({ icon, colorClass, title, desc, detail, index }) => (
    <Reveal
        className="bg-gray-50 dark:bg-slate-700/50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-slate-700 group h-full hover:scale-[1.02]"
        delay={index * 100}
    >
        <div className={`w-12 h-12 ${colorClass} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
            <i className={`${icon} text-xl`}></i>
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{title}</h3>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-2">{desc}</p>
        <p className="text-sm text-slate-500 dark:text-slate-400">{detail}</p>
    </Reveal>
);

const Features = () => {
    const { t } = useLanguage();

    return (
        <section className="py-16 md:py-24 bg-white dark:bg-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    <FeatureCard
                        index={0}
                        icon="fa-solid fa-basket-shopping"
                        colorClass="bg-brand-100 dark:bg-brand-900/50 text-brand-600 dark:text-brand-400"
                        title={t.feature1_title}
                        desc={t.feature1_desc}
                        detail={t.feature1_detail}
                    />

                    <FeatureCard
                        index={1}
                        icon="fa-solid fa-check-to-slot"
                        colorClass="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                        title={t.feature2_title}
                        desc={t.feature2_desc}
                        detail={t.feature2_detail}
                    />

                    <FeatureCard
                        index={2}
                        icon="fa-solid fa-share-nodes"
                        colorClass="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                        title={t.feature3_title}
                        desc={t.feature3_desc}
                        detail={t.feature3_detail}
                    />

                    <FeatureCard
                        index={3}
                        icon="fa-solid fa-wand-magic-sparkles"
                        colorClass="bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400"
                        title={t.feature4_title}
                        desc={t.feature4_desc}
                        detail={t.feature4_detail}
                    />

                    <div className="sm:col-span-2 lg:col-span-2">
                        <FeatureCard
                            index={4}
                            icon="fa-solid fa-heart"
                            colorClass="bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400"
                            title={t.feature5_title}
                            desc={t.feature5_desc}
                            detail={t.feature5_detail}
                        />
                    </div>

                </div>

                {/* Free Text Extra */}
                <div className="mt-16 text-center">
                    <Reveal delay={500}>
                        <p className="text-lg font-medium text-brand-600 dark:text-brand-400">
                            {t.free_text}
                        </p>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default Features;
