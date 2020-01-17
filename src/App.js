import React from 'react'
import './App.css'

import Navbar from './components/navbar/navbar'

import LandingPage from './pages/landing-page/landing-page'
import AboutPage from './pages/about-page/about-page'

const sections = [
  {
    name: 'About',
    to: '#about'
  },
  {
    name: 'Lorem',
    to: ''
  },
  {
    name: 'Ipsum',
    to: ''
  },
  {
    name: 'Dolor',
    to: ''
  }
]

function App() {
  return (
    <>
      <Navbar items={sections} navbrand="LOGO"/>
      <div id='body'>
        <LandingPage/>
        <AboutPage/>
      </div>
    </>
  )
}

export default App
