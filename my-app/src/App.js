import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from "./components/Intro";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Intro />      
      <Services />
      <WhyChooseUs />
      <About />
      <Footer />
    </>
  );
}

export default App;