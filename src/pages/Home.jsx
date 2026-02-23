import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Screenshots from '../components/Screenshots';
import Footer from '../components/ListifyFooter';

const Home = () => {
    return (
        <>
            <Header />
            <main className="flex-grow">
                <Hero />
                <Features />
                <Screenshots />
            </main>
            <Footer />
        </>
    );
};

export default Home;
