// portofolio/src/App.js
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

function App() {
  return (
      <div className="App">
        <Navbar /> {/* Navbar akan selalu tampil di semua halaman */}
        
        {/* Render semua halaman secara berurutan */}
      <Home />
      <About />
      <Projects />
      <Contact />
      </div>
  );
}

export default App;