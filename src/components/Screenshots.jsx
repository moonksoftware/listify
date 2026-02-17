import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Reveal from './Reveal';

const ScreenshotItem = ({ img, title, desc, index }) => (
    <Reveal
        className="flex flex-col gap-4 items-center hover:scale-[1.02] transition-transform duration-300"
        delay={index * 100}
    >
        <div className="relative w-64 h-[520px] bg-gray-200 dark:bg-slate-800 rounded-[2rem] border-8 border-gray-900 dark:border-slate-700 shadow-2xl flex flex-col items-center justify-center overflow-hidden">
            {/* Screen Content */}
            <img src={img} alt="App Screenshot" className="absolute inset-0 w-full h-full object-cover object-top" />
            {/* Notch */}
            <div className="absolute top-0 w-32 h-6 bg-gray-900 dark:bg-slate-700 rounded-b-xl"></div>
        </div>
        <div className="text-center">
            <h3 className="font-bold text-slate-900 dark:text-white">{title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{desc}</p>
        </div>
    </Reveal>
);

const Screenshots = () => {
    const { t } = useLanguage();

    return (
        <section className="py-16 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <Reveal>
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
                            {t.gallery_title}
                        </h2>
                    </Reveal>
                    <Reveal delay={100}>
                        <p className="text-lg text-slate-600 dark:text-slate-300">
                            {t.gallery_subtitle}
                        </p>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ScreenshotItem
                        index={0}
                        img="/images/1.jpg"
                        title={t.gallery_img2_title}
                        desc={t.gallery_img2_desc}
                    />
                    <ScreenshotItem
                        index={1}
                        img="/images/3.jpg"
                        title={t.gallery_img3_title}
                        desc={t.gallery_img3_desc}
                    />
                    <ScreenshotItem
                        index={2}
                        img="/images/2.jpg"
                        title={t.gallery_img4_title}
                        desc={t.gallery_img4_desc}
                    />
                    <ScreenshotItem
                        index={3}
                        img="/images/4.jpg"
                        title={t.gallery_img5_title}
                        desc={t.gallery_img5_desc}
                    />
                </div>
            </div>
        </section>
    );
};

export default Screenshots;
