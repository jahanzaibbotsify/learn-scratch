import React from 'react';
import Hero from '../components/sections/Hero';
import Benefits from '../components/sections/Benefits';
import HowItWorks from '../components/sections/HowItWorks';
import Curriculum from '../components/sections/Curriculum';
import SuccessStories from '../components/sections/SuccessStories';
import Pricing from '../components/sections/Pricing';
import FAQ from '../components/sections/FAQ';
import Contact from '../components/sections/Contact';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <Benefits />
      <HowItWorks />
      <Curriculum />
      <SuccessStories />
      <Pricing />
      <FAQ />
      <Contact />
    </main>
  );
};

export default HomePage;