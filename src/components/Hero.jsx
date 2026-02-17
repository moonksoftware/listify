import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Reveal from './Reveal';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left z-10">
            <Reveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-slate-900 dark:text-white">
                <span className="gradient-text">{t.headline}</span>
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {t.subheadline}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" id="download">
                <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-brand-600 hover:bg-brand-700 transition-all shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50 transform hover:-translate-y-1">
                  <i className="fa-brands fa-google-play text-xl mr-3"></i>
                  <div className="text-left">
                    <div className="text-xs uppercase opacity-80">Get it on</div>
                    <div className="font-bold leading-none">Google Play</div>
                  </div>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Visual */}
          <Reveal delay={300} className="relative lg:h-auto flex justify-center items-center">
            {/* Blob Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-200/50 dark:bg-brand-900/20 blur-3xl rounded-full -z-10 animate-pulse">
            </div>

            {/* App Screenshot Placeholder */}
            <div className="relative w-64 h-[520px] bg-gray-200 dark:bg-slate-800 rounded-[2rem] border-8 border-gray-900 dark:border-slate-700 shadow-2xl flex flex-col items-center justify-center overflow-hidden">
              {/* Screen Content */}
              <img src="/images/4.jpg" alt="App Screenshot" className="absolute inset-0 w-full h-full object-cover object-top" />
              {/* Notch */}
              <div className="absolute top-0 w-32 h-6 bg-gray-900 dark:bg-slate-700 rounded-b-xl"></div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
