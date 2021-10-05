import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import NewCollection from '../NewCollection';
import Footer from '../Footer';

function Home() {
    return (
        <>
        <HeroSection />
        <Cards />
        <NewCollection />
        <Footer />
        </>
    );
}

export default Home;