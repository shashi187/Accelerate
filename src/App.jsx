import { useState } from 'react'
import './App.css'
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

function App() {

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
