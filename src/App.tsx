import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import HowItWorks from './components/sections/HowItWorks';
import UseCases from './components/sections/UseCases';
import Demo from './components/sections/Demo';
import Testimonials from './components/sections/Testimonials';
import Pricing from './components/sections/Pricing';
import CTA from './components/sections/CTA';
import WhatsAppButton from './components/widgets/WhatsAppButton';
import LiveChatWidget from './components/widgets/LiveChatWidget';

function App() {
  return (
    <div className="antialiased noise">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <UseCases />
        <Demo />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <LiveChatWidget />
    </div>
  );
}

export default App;
