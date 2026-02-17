import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

const Projects = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    return (
        <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-900 text-slate-100' : 'bg-gray-50 text-slate-800'}`}>
            {/* Header */}
            <header className={`shadow-sm sticky top-0 z-50 transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-800' : 'bg-white'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <Reveal>
                        <h1
                            className={`text-2xl font-bold flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
                        >
                            <i className="fa-solid fa-code text-green-600"></i>
                            Projelerim
                        </h1>
                    </Reveal>
                    <div className="flex items-center gap-4">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className={`transition-colors p-2 rounded-full ${theme === 'dark' ? 'text-slate-400 hover:text-slate-200 hover:bg-slate-700' : 'text-slate-500 hover:text-slate-700 hover:bg-gray-100'}`}
                            aria-label="Toggle Dark Mode"
                        >
                            <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'} text-xl`}></i>
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[85vh]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Listify Card */}
                    <Link to="/listify" className="block group h-full">
                        <Reveal delay={100} className="h-full">
                            <div
                                className={`rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border h-full flex flex-col ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'}`}
                            >
                                <div className={`h-48 flex items-center justify-center relative overflow-hidden p-8 ${theme === 'dark' ? 'bg-green-900/20' : 'bg-green-50'}`}>
                                    <div className="absolute inset-0 bg-gradient-to-tr from-green-500/5 to-transparent"></div>
                                    {/* Folder Icon placeholder or actual image */}
                                    <img
                                        src="/images/icon.png"
                                        alt="Listify"
                                        className="w-full h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/22c55e/ffffff?text=Listify'; }}
                                    />
                                </div>
                                <div className="p-6 flex-grow flex flex-col justify-between">
                                    <div>
                                        <h2 className={`text-xl font-bold mb-2 transition-colors ${theme === 'dark' ? 'text-white group-hover:text-green-400' : 'text-slate-900 group-hover:text-green-600'}`}>
                                            Listify
                                        </h2>
                                        <p className={`text-sm line-clamp-3 mb-4 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                                            Akıllı alışveriş ve yapılacaklar listesi uygulaması. Listelerinizi kolayca oluşturun, kategorize edin ve arkadaşlarınızla paylaşın.
                                        </p>
                                    </div>
                                    <div className={`flex items-center font-medium text-sm mt-auto ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                                        <span>Projeye Git</span>
                                        <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </Link>

                </div>
            </main>

            {/* Footer */}
            <footer className={`border-t py-8 transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'}`}>
                <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                    <p>&copy; MoonKSoftware Tüm hakları saklıdır.</p>
                </div>
            </footer>
        </div>
    );
};

export default Projects;
