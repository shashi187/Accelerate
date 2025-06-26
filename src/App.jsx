import { useState } from 'react'
import './App.css'
import { Analytics } from "@vercel/analytics/react"
import Header from './components/Header'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Impact from './sections/Impact'
import Stats from './sections/Stats'
import About from './sections/About'
import Projects from './sections/Projects'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useAnalytics() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-7LRB4L4B0X', {
        page_path: location.pathname,
      });
    }
  }, [location]);
}


function App() {
  useAnalytics();
  return (
    <>
      <Header />
      <Hero />
      <Impact />
      <Services />
      <Stats />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
