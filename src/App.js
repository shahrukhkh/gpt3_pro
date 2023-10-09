import React from 'react'
import { Blog, Features, Footer, Header, Possibillity, WhatGPT3 } from './containers'
import { CTA, Brand, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibillity />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App