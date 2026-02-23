import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-8 text-center">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Privacy Policy</h1>
            <p className="text-slate-600 dark:text-slate-400">
                Please see the full privacy policy page at{' '}
                <a href="/listify/privacy.html" className="text-green-600 underline hover:text-green-700">
                    /listify/privacy.html
                </a>
            </p>
            <Link to="/" className="mt-4 text-sm text-slate-500 hover:text-slate-700">← Back to Home</Link>
        </div>
    );
};

export default PrivacyPolicy;
