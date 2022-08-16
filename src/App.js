import React from 'react'
import './App.css'
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import Content from './components/Content.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
