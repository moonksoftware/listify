import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Screenshots from '../components/Screenshots';
import Team from '../components/Team';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Header />
            <main className="flex-grow">
                <Hero />
                <Features />
                <Screenshots />
                <Team />
            </main>
            <Footer />
        </>
    );
};

export default Home;
