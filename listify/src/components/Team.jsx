import React from 'react';
import Reveal from './Reveal';
import { useLanguage } from '../contexts/LanguageContext';



const TeamMember = ({ member, index }) => {
    return (
        <Reveal
            className="flex flex-col items-center bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-slate-700 h-full"
            delay={index * 100}
        >
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-brand-100 dark:border-brand-900/50 shadow-sm">
                <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{member.name}</h3>
            <p className="text-sm text-brand-600 dark:text-brand-400 mb-2">@{member.username}</p>
            <p className="text-slate-600 dark:text-slate-400 text-center text-sm mb-4 line-clamp-2">
                {member.bio}
            </p>
            <a
                href={member.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center text-sm font-medium text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 transition-colors"
            >
                <i className="fa-brands fa-github mr-2 text-lg"></i>
                GitHub
            </a>
        </Reveal>
    );
};

const Team = () => {
    const { t } = useLanguage();

    const teamData = [
        {
            username: 'AbdulbakiDEMIR',
            name: 'Abdulbaki DEMİR',
            title: t.team_member_1_title,
            avatar: 'https://github.com/AbdulbakiDEMIR.png',
            bio: t.team_member_1_bio,
            url: 'https://github.com/AbdulbakiDEMIR'
        },
        {
            username: 'ahmet-yasir',
            name: 'Ahmet Yasir',
            title: t.team_member_2_title,
            avatar: 'https://github.com/ahmet-yasir.png',
            bio: t.team_member_2_bio,
            url: 'https://github.com/ahmet-yasir'
        }
    ];

    return (
        <section className="py-16 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <Reveal>
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
                            {t.team_title}
                        </h2>
                    </Reveal>
                    <Reveal delay={100}>
                        <p className="text-lg text-slate-600 dark:text-slate-300">
                            {t.team_subtitle}
                        </p>
                    </Reveal>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {teamData.map((member, index) => (
                        <div key={member.username} className="w-full sm:w-80">
                            <TeamMember member={member} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
