import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-sans antialiased">
            <div className="max-w-[800px] mx-auto px-5 py-10">
                <Link to="/listify" className="inline-block mb-5 text-brand-600 dark:text-brand-400 no-underline hover:underline">&larr; Back to Listify</Link>
                <h1 className="text-[2rem] mb-2.5 font-bold text-slate-900 dark:text-white">Privacy Policy</h1>
                <p className="text-slate-500 dark:text-slate-400 mb-[30px]">Last Updated: February 2025</p>

                <h2 className="text-[1.3rem] mt-[30px] mb-[15px] font-bold text-slate-900 dark:text-white">Data Storage</h2>
                <ul className="ml-5 list-disc mb-3 text-slate-600 dark:text-slate-300">
                    <li className="mb-3">All your lists and items are stored locally on your device</li>
                    <li className="mb-3">We do not collect, store, or transmit your personal data to external servers</li>
                    <li className="mb-3">Your data remains entirely under your control</li>
                </ul>

                <h2 className="text-[1.3rem] mt-[30px] mb-[15px] font-bold text-slate-900 dark:text-white">Sharing Feature</h2>
                <ul className="ml-5 list-disc mb-3 text-slate-600 dark:text-slate-300">
                    <li className="mb-3">When you use the sharing feature, your list data is temporarily stored on our server</li>
                    <li className="mb-3">Share codes automatically expire after 24 hours</li>
                    <li className="mb-3">Shared data is deleted from our servers when the code expires</li>
                </ul>

                <h2 className="text-[1.3rem] mt-[30px] mb-[15px] font-bold text-slate-900 dark:text-white">Advertisements</h2>
                <ul className="ml-5 list-disc mb-3 text-slate-600 dark:text-slate-300">
                    <li className="mb-3">This app uses Google AdMob advertising service</li>
                    <li className="mb-3">You need to watch a rewarded ad to generate a list share code</li>
                    <li className="mb-3">AdMob may collect device identifiers for ad personalization</li>
                    <li className="mb-3">AdMob's privacy policy: <a href="https://policies.google.com/privacy" className="text-brand-600 dark:text-brand-400 hover:underline">https://policies.google.com/privacy</a></li>
                </ul>

                <h2 className="text-[1.3rem] mt-[30px] mb-[15px] font-bold text-slate-900 dark:text-white">Data We Don't Collect</h2>
                <ul className="ml-5 list-disc mb-3 text-slate-600 dark:text-slate-300">
                    <li className="mb-3">Personal identification information</li>
                    <li className="mb-3">Location data</li>
                    <li className="mb-3">Contact information</li>
                </ul>

                <h2 className="text-[1.3rem] mt-[30px] mb-[15px] font-bold text-slate-900 dark:text-white">Data Security</h2>
                <ul className="ml-5 list-disc mb-3 text-slate-600 dark:text-slate-300">
                    <li className="mb-3">Local data is stored using your device's secure storage mechanisms</li>
                    <li className="mb-3">Shared data is transmitted over encrypted HTTPS connections</li>
                </ul>

                <h2 className="text-[1.3rem] mt-[30px] mb-[15px] font-bold text-slate-900 dark:text-white">Your Rights</h2>
                <ul className="ml-5 list-disc mb-3 text-slate-600 dark:text-slate-300">
                    <li className="mb-3">You can delete all your data by uninstalling the app</li>
                    <li className="mb-3">You can delete individual lists at any time within the app</li>
                </ul>

                <h2 className="text-[1.3rem] mt-[30px] mb-[15px] font-bold text-slate-900 dark:text-white">Contact</h2>
                <p className="mb-3 text-slate-600 dark:text-slate-300">For questions about this Privacy Policy, please contact: <a href="mailto:moonksoftware@gmail.com" className="text-brand-600 dark:text-brand-400 hover:underline">moonksoftware@gmail.com</a></p>

                <h2 className="text-[1.3rem] mt-[30px] mb-[15px] font-bold text-slate-900 dark:text-white">Changes to This Policy</h2>
                <p className="mb-3 text-slate-600 dark:text-slate-300">We may update this Privacy Policy from time to time. Any changes will be reflected in the "Last Updated" date.</p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
